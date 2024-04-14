//
import * as chai from 'chai';
import * as sinon from 'sinon';
import chaiHttp = require('chai-http');
import { app } from '../../../src/app';
import PostsModel from '../../../src/models/PostsModel';
import CategoriesModel from '../../../src/models/CategoriesModel';
import * as jwt from 'jsonwebtoken';

const { expect } = chai;

chai.use(chaiHttp);

// Options for the token
const secret = process.env.JWT_SECRET || 'secretKey';
const payload = { id: 1, email: 'rafael@dev.com'};
const options = { expiresIn: '1h' };

// Generate a token
const tokenMock = jwt.sign(payload, secret, options);

describe('Posts Tests', function () {
  //
  describe('Create Posts', function () {
    //
    it('should create a post', async function () {
        const post = {
          title: 'Java is hard to easy!',
          content: 'The best thing about TypeScript is that its a superset of JavaScript.',
          image: 'https://www.google.com/java',
          categoryIds: [4],
        };

        const category = {
          name: 'Category 10',
        };

        const categoryModelStub = sinon.stub(CategoriesModel.prototype, 'findCategory').resolves(category as any);
        const postsModelStub = sinon.stub(PostsModel.prototype, 'create').resolves(post as any);

        const res = await chai.request(app)
          .post('/post')
          .set('Authorization', `Bearer ${tokenMock}`)
          .send(post);

        expect(res.status).to.equal(201);
        expect(res.body).to.deep.equal(post);

        categoryModelStub.restore();
        postsModelStub.restore();
    });
  });

  describe('Get Posts', function () {
    //
    it('should return all posts', async function () {
      const posts = [
        {
          title: 'Java is hard to easy!',
          content: 'The best thing about TypeScript is that its a superset of JavaScript.',
          image: 'https://www.google.com/java',
          categoryIds: [4],
        },
        {
          title: 'Java is hard to easy!',
          content: 'The best thing about TypeScript is that its a superset of JavaScript.',
          image: 'https://www.google.com/java',
          categoryIds: [4],
        },
      ];

      const postsModelStub = sinon.stub(PostsModel.prototype, 'findAll').resolves(posts as any);

      const res = await chai.request(app)
        .get('/post')
        .set('Authorization', `Bearer ${tokenMock}`);

      expect(res.status).to.equal(200);
      expect(res.body).to.deep.equal(posts);

      postsModelStub.restore();
    });
  });

  describe('Get Post by Id', function () {
    //
    it('should return a post by id', async function () {
      const post = {
        title: 'Java is hard to easy!',
        content: 'The best thing about TypeScript is that its a superset of JavaScript.',
        image: 'https://www.google.com/java',
        categoryIds: [4],
      };

      const postsModelStub = sinon.stub(PostsModel.prototype, 'findById').resolves(post as any);

      const res = await chai.request(app)
        .get('/post/1')
        .set('Authorization', `Bearer ${tokenMock}`);

      expect(res.status).to.equal(200);
      expect(res.body).to.deep.equal(post);

      postsModelStub.restore();
    });

    it('should return 404 if post not found', async function () {
      const postsModelStub = sinon.stub(PostsModel.prototype, 'findById').resolves(null);

      const res = await chai.request(app)
        .get('/post/1')
        .set('Authorization', `Bearer ${tokenMock}`);

      expect(res.status).to.equal(404);
      expect(res.body).to.deep.equal({ message: 'Post not found!' });

      postsModelStub.restore();
    });
  });

  describe('Update Post', function () {
    //
    it('should update a post', async () => {
      const postId = 1;
      const postData = { title: 'Updated Title', content: 'Updated Content', image: 'https://www.google.com/java'};

      const findStub = sinon.stub(PostsModel.prototype, 'findById').resolves({ id: postId, userId: 1 } as any);
      const updateStub = sinon.stub(PostsModel.prototype, 'update').resolves({ id: postId, ...postData } as any);

      const res = await chai.request(app)
        .put(`/post/${postId}`)
        .set('Authorization', `Bearer ${tokenMock}`)
        .send(postData);

      findStub.restore();
      updateStub.restore();

      expect(res.status).to.equal(200);
    });

    it('should return UNAUTHORIZED if user is not the owner of the post', async () => {
      const postId = 1;
      const postData = { title: 'Updated Title', content: 'Updated Content', image: 'https://www.google.com/java'};

      const findStub = sinon.stub(PostsModel.prototype, 'findById').resolves({ id: postId, userId: 2 } as any);

      const res = await chai.request(app)
        .put(`/post/${postId}`)
        .set('Authorization', `Bearer ${tokenMock}`)
        .send(postData);

      findStub.restore();

      expect(res.status).to.equal(401);
    });
  });

  describe('DELETE /post/:id', () => {
    //
    it('should delete a post', async () => {
      const postId = 1;
  
      const findStub = sinon.stub(PostsModel.prototype, 'findById').resolves({ id: postId, userId: 1 } as any);
      const deleteStub = sinon.stub(PostsModel.prototype, 'delete').resolves(true);
  
      const res = await chai.request(app)
        .delete(`/post/${postId}`)
        .set('Authorization', `Bearer ${tokenMock}`);
  
      findStub.restore();
      deleteStub.restore();
  
      expect(res.status).to.equal(200);
      expect(res.body).to.deep.equal(true);
    });
  
    it('should return UNAUTHORIZED if user is not the owner of the post', async () => {
      const postId = 1;
  
      const findStub = sinon.stub(PostsModel.prototype, 'findById').resolves({ id: postId, userId: 2 } as any);
  
      const res = await chai.request(app)
        .delete(`/post/${postId}`)
        .set('Authorization', `Bearer ${tokenMock}`);
  
      findStub.restore();
  
      expect(res.status).to.equal(401);
      expect(res.body).to.deep.equal({ message: 'Unauthorized user' });
    });
  
    it('should return NOT_FOUND if post does not exist', async () => {
      const postId = 1;
  
      const findStub = sinon.stub(PostsModel.prototype, 'findById').resolves(null);
  
      const res = await chai.request(app)
        .delete(`/post/${postId}`)
        .set('Authorization', `Bearer ${tokenMock}`);
  
      findStub.restore();
  
      expect(res.status).to.equal(401);
    });
  });

  describe('Search Posts', function () {
    //
    it('should return all posts by search', async function () {
      const posts = [
        {
          title: 'Java is hard to easy!',
          content: 'The best thing about TypeScript is that its a superset of JavaScript.',
          image: 'https://www.google.com/java',
          categoryIds: [4],
        },
        {
          title: 'Java is hard to easy!',
          content: 'The best thing about TypeScript is that its a superset of JavaScript.',
          image: 'https://www.google.com/java',
          categoryIds: [4],
        },
      ];

      const postsModelStub = sinon.stub(PostsModel.prototype, 'search').resolves(posts as any);

      const res = await chai.request(app)
        .get('/post/search?q=java')
        .set('Authorization', `Bearer ${tokenMock}`);

      expect(res.status).to.equal(200);
      expect(res.body).to.deep.equal(posts);

      postsModelStub.restore();
    });
  });
});