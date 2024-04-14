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
  });
});
