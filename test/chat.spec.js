import chai from 'chai';
import mongoose from 'mongoose';
import { Mockgoose } from 'mockgoose';
import chaiHttp from 'chai-http';
import server from '../src/server';
import config from '../src/config/config';

const mockgoose = new Mockgoose(mongoose);

chai.should();
chai.use(chaiHttp);

function addMessageToStorage(user_data, cb) {
  chai
    .request(server)
    .post('/api/chat')
    .send({ user_data })
    .end((err, res) => {
      if (cb) {
        cb(err, res);
      }
    });
}

describe('Chat', () => {
  before(done => {
    mongoose.disconnect();
    mockgoose.helper.reset();
    mockgoose.prepareStorage().then(() => {
      mongoose.connect(
        config.db,
        err => {
          done(err);
        }
      );
    });
  });

  describe('/GET chat', () => {
    it('it should get a empty list of chat', done => {
      chai
        .request(server)
        .get('/api/chat')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array').with.lengthOf(0);
          done();
        });
    });

    it('it should get a list of chat', done => {
      addMessageToStorage('Mock Todo', (err, res) => {
        chai
          .request(server)
          .get('/api/chat')
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('array').with.lengthOf(1);
            res.body.should.to.deep.equal([res.body[0]]);
            done();
          });
      });
    });
  });

  describe('/POST chat', () => {
    it('should create a chat with a property', done => {
      const payload = { nickname: 'Testador123', password: 'password123' };
      chai
        .request(server)
        .post('/api/chat')
        .send(payload)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('nickname').eql(payload.nickname);
          done();
        });
    });

    it('should not create a chat with a missing property', done => {
      chai
        .request(server)
        .post('/api/chat')
        .end((err, res) => {
          res.should.have.status(422);
          done();
        });
    });
  });

});
