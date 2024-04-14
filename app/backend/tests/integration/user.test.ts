import * as chai from 'chai';
import * as sinon from 'sinon';
import chaiHttp = require('chai-http');
import { app } from '../../src/app';
import UserModel from '../../src/models/UserModel';
import { userMock } from '../mocks/user.mock';
import SequelizeUser from '../../src/database/models/SequelizeUser';

const { expect } = chai;

chai.use(chaiHttp);

describe('User Tests', function () {
  describe('Create user', function () {

    beforeEach(() => {
      sinon.restore();
    });
  
    //
    it('should create a new user', async function () {
      // arrange
      sinon.stub(UserModel.prototype, 'getByEmail').resolves(null);
      sinon.stub(UserModel.prototype, 'create').resolves(userMock as any);

      // act
      const { status, body } = await chai.request(app).post('/user').send(userMock);

      // assert
      expect(status).to.equal(201);
      expect(body).to.be.an('object');
      expect(body).to.have.property('message');
      expect(body.message).to.equal('User created!');
    });

    //
    it('should return an error when trying to create a user that already exists', async function () {
      // arrange
      sinon.stub(UserModel.prototype, 'getByEmail').resolves(userMock as any);

      // act
      const { status, body } = await chai.request(app).post('/user').send(userMock);
      
      // assert
      expect(status).to.equal(409);
      expect(body).to.be.an('object');
      expect(body).to.have.property('message');
      expect(body.message).to.equal('User already exists!');
    }); 
  });
});