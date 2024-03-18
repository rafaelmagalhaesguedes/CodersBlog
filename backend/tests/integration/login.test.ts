import * as sinon from 'sinon';
import * as chai from 'chai';

import chaiHttp = require('chai-http');

import { app } from '../../src/app';
import * as jwt from 'jsonwebtoken';
import LoginService from '../../src/services/LoginService';

chai.use(chaiHttp);

const { expect } = chai;

describe('Login tests', () => {

  describe('1. Integration tests', () => {
    afterEach(() => {
      sinon.restore();
    });

    describe('Route post /login', () => {
      //
      it('should return token and status 200', async function() {
        // arrange
        const tokenMock = 'mockedToken';
        sinon.stub(LoginService.prototype, 'signUp').resolves({ status: 'SUCCESSFUL', data: { token: tokenMock } });

        // act
        const res = await chai.request(app).post('/login').send({ email: 'rafael@email.com', password: '123456' });

        // assert
        expect(res.status).to.equal(200);
        expect(res.body).to.deep.equal({ token: tokenMock });
      });
    });

    describe('Route get /login/role', () => {
      //
      it('should return role and status 200', async function() {
        // arrange
        const roleMock = 'admin';
        const payload = { id: 1, email: 'rafael@email.com'};
        const secret = 'secretKey'; // Use your actual secret here
        const tokenMock = jwt.sign(payload, secret);
        sinon.stub(LoginService.prototype, 'getRole').resolves({ status: 'SUCCESSFUL', data: { role: roleMock } });
    
        // act
        const res = await chai.request(app).get('/login/role').set('Authorization', `Bearer ${tokenMock}`);
    
        // assert
        expect(res.status).to.equal(200);
        expect(res.body).to.deep.equal({ role: roleMock });
      })
    });

    describe('Validation body', () => {
      //
      it('should return 400 if email is not provided', async function() {
        // act
        const { status, body } = await chai.request(app).post('/login').send({ password: '123456' });

        // assert
        expect(status).to.equal(400);
        expect(body).to.deep.equal({ message: 'All fields must be filled' });
      });

      it('should return 400 if password is not provided', async function() {
        // act
        const { status, body } = await chai.request(app).post('/login').send({ email: 'rafael@gmail.com' });

        // assert
        expect(status).to.equal(400);
        expect(body).to.deep.equal({ message: 'All fields must be filled' });
      });

      it('should return 401 if email is invalid', async function() {
        // act
        const { status, body } = await chai.request(app).post('/login').send({ email: 'rafael@gmail.com', password: '123456' });

        // assert
        expect(status).to.equal(401);
        expect(body).to.deep.equal({ message: 'Invalid email or password' });
      });

      it('should return 401 if password is invalid', async function() {
        // act
        const { status, body } = await chai.request(app).post('/login').send({ email: 'rafael@gmail.com', password: '123456' });

        // assert
        expect(status).to.equal(401);
        expect(body).to.deep.equal({ message: 'Invalid email or password' });
      });
    });
  });
});
