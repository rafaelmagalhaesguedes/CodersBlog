//
import * as chai from 'chai';
import * as sinon from 'sinon';
import chaiHttp = require('chai-http');
import { app } from '../../src/app';
import PostsModel from '../../src/models/PostsModel';
import CategoriesModel from '../../src/models/CategoriesModel';
import * as jwt from 'jsonwebtoken';

const { expect } = chai;

chai.use(chaiHttp);

describe('Posts Tests', function () {
  //
  describe('Create Posts', function () {
    //
    it('should create a post', async function () {
        const post = {
        title: 'Java is hard to easy!',
        content: "The best thing about TypeScript is that it's a superset of JavaScript.",
        image: 'https://www.google.com',
        categoryIds: [4, 5],
        userId: 1,
        };

        const category = {
        name: 'Category 1',
        };

        const categoryModelStub = sinon.stub(CategoriesModel.prototype, 'findCategory').resolves(category as any);
        const postsModelStub = sinon.stub(PostsModel.prototype, 'create').resolves(post as any);

        // Create a token
        const token = jwt.sign({ id: 1, email: 'rafael@email.com'}, 'secretKey', { expiresIn: '10m' });

        const res = await chai.request(app).post('/post').set('Authorization', `Bearer ${token}`).send(post);

        expect(res.status).to.equal(201);
        expect(res.body).to.deep.equal(post);

        categoryModelStub.restore();
        postsModelStub.restore();
    });
  });
});