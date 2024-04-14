import * as chai from 'chai';
import * as sinon from 'sinon';
import chaiHttp = require('chai-http');
import { app } from '../../../src/app';
import { allUsersMock } from '../../mocks/user.mock';
import SequelizeUser from '../../../src/database/models/SequelizeUser';

const { expect } = chai;

chai.use(chaiHttp);

describe('Tests findAll users', function () {
  beforeEach(() => {
    sinon.restore();
  });

  it('should return all users', async function () {
    // arrange
    sinon.stub(SequelizeUser, 'findAll').resolves(allUsersMock as any);

    // act
    const { status, body } = await chai.request(app).get('/user');

    // assert
    expect(status).to.equal(200);
    expect(body).to.be.an('array');
    expect(body).to.deep.equal(allUsersMock);
  });
});