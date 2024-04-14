import * as chai from 'chai';
import * as sinon from 'sinon';
import chaiHttp = require('chai-http');
import { app } from '../../../src/app';
import * as jwt from 'jsonwebtoken';
import CategoriesModel from '../../../src/models/CategoriesModel';

const { expect } = chai;

// Options for the token
const secret = process.env.JWT_SECRET || 'secretKey';
const payload = { id: 1, email: 'rafael@dev.com'};
const options = { expiresIn: '1h' };

// Generate a token
const tokenMock = jwt.sign(payload, secret, options);

chai.use(chaiHttp);

describe('Categories Tests', function () {
  //
  afterEach(() => {
    sinon.restore();
  });

  describe('Get all categories', function () {
    //
    it('should return all categories', async function () {
      // arrange
      const categoriesMock = [
        { id: 1, name: 'Category 1' },
        { id: 2, name: 'Category 2' }
      ];

      sinon.stub(CategoriesModel.prototype, 'findAll').resolves(categoriesMock as any);

      // act
      const res = await chai.request(app)
        .get('/categories').set('Authorization', `Bearer ${tokenMock}`);
      
      // assert
      expect(res.status).to.equal(200);
      expect(res.body).to.deep.equal(categoriesMock);
    });

    //
    it('should return an error when trying to get all categories', async function () {
      // arrange
      sinon.stub(CategoriesModel.prototype, 'findAll').resolves(null);

      // act
      const res = await chai.request(app)
        .get('/categories').set('Authorization', `Bearer ${tokenMock}`);
      
      // assert
      expect(res.status).to.equal(404);
    });
  });

  describe('Create a category', function () {
    //
    it('should create a category', async function () {
      // arrange
      const categoryMock = { id: 1, name: 'Category 1' };

      sinon.stub(CategoriesModel.prototype, 'findByName').resolves(null);
      sinon.stub(CategoriesModel.prototype, 'create').resolves(categoryMock as any);

      // act
      const res = await chai.request(app)
        .post('/categories').set('Authorization', `Bearer ${tokenMock}`)
        .send({ name: 'Category 1' });
      
      // assert
      expect(res.status).to.equal(201);
      expect(res.body).to.deep.equal(categoryMock);
    });

    //
    it('should return an error when trying to create a category', async function () {
      // arrange
      sinon.stub(CategoriesModel.prototype, 'findByName').resolves({ id: 1, name: 'Category 1' });

      // act
      const res = await chai.request(app)
        .post('/categories').set('Authorization', `Bearer ${tokenMock}`)
        .send({ name: 'Category 1' });
      
      // assert
      expect(res.status).to.equal(409);
      expect(res.body).to.deep.equal({ message: 'Category already exists!' });
    });

    //
    it('should return an error when trying to create a category', async function () {
      // arrange
      sinon.stub(CategoriesModel.prototype, 'findByName').resolves(null);
      sinon.stub(CategoriesModel.prototype, 'create').resolves(null);

      // act
      const res = await chai.request(app)
        .post('/categories').set('Authorization', `Bearer ${tokenMock}`)
        .send({ name: 'Category 1' });
      
      // assert
      expect(res.status).to.equal(500);
      expect(res.body).to.deep.equal({ message: 'Category not created!' });
    });
  });
});