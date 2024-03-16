import * as chai from 'chai';
import * as sinon from 'sinon';
import chaiHttp = require('chai-http');
import { app } from '../../src/app';
import * as jwt from 'jsonwebtoken';
import UserModel from '../../src/models/UserModel';
import { allUsersMock, userMock } from '../mocks/user.mock';

const { expect } = chai;

// Options for the token
const secret = process.env.JWT_SECRET || 'secretKey';
const payload = { id: 1, email: 'rafael@dev.com'};
const options = { expiresIn: '1h' };

// Generate a token
const tokenMock = jwt.sign(payload, secret, options);

chai.use(chaiHttp);

describe('User Tests', function () {

  afterEach(() => {
    sinon.restore();
  });

  describe('Create user', function () {
    //
    it('should create a new user', async function () {
      // arrange
      sinon.stub(UserModel.prototype, 'create').resolves(userMock as any);

      // act
      const res = await chai.request(app).post('/user').send(userMock);
      
      // assert
      expect(res.status).to.equal(201);
    });

    //
    it('should return an error when trying to create a user that already exists', async function () {
      // arrange
      sinon.stub(UserModel.prototype, 'getByEmail').resolves(userMock as any);

      // act
      const res = await chai.request(app).post('/user').send(userMock);
      
      // assert
      expect(res.status).to.equal(409);
    }); 
  });

  describe('Get aLL users', function () {
    //
    it('should return all users', async function () {
      // arrange
      sinon.stub(UserModel.prototype, 'findAll').resolves(allUsersMock as any);
      sinon.stub(jwt, 'verify').returns(payload as any);

      // act
      const res = await chai.request(app).get('/user').set('Authorization', `Bearer ${tokenMock}`);
      
      // assert
      expect(res.status).to.equal(200);
      expect(res.body).to.be.an('array');
      expect(res.body).to.deep.equal(allUsersMock);
    });

    //
    it('should return an error when trying to get all users without a token', async function () {
      // act
      const res = await chai.request(app).get('/user');
      
      // assert
      expect(res.status).to.equal(401);
    });
  });

  describe('Get user by id', function () {
    //
    it('should return a user by id', async function () {
      // arrange
      sinon.stub(UserModel.prototype, 'getById').resolves(userMock as any);
      sinon.stub(jwt, 'verify').returns(payload as any);

      // act
      const res = await chai.request(app).get('/user/1').set('Authorization', `Bearer ${tokenMock}`);
      
      // assert
      expect(res.status).to.equal(200);
      expect(res.body).to.be.an('object');
      expect(res.body).to.deep.equal(userMock);
    });

    //
    it('should return an error when trying to get a user by id without a token', async function () {
      // act
      const res = await chai.request(app).get('/user/1');
      
      // assert
      expect(res.status).to.equal(401);
    });
  });
});