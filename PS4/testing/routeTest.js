const app = require('../app')
const chai = require('chai');
const mocha = require('mocha');
const chaiHttp = require('chai-http');
const {expect} = chai;
const {describe} = mocha;

chai.use(chaiHttp);

describe('MusicxMatch API', () => {
    it('should return 200 success code', function () {
        chai.request(app)
            .get('/top')
            .end((err, response) => {
                expect(response).to.have.status(200);
            })
    })
    it('should not contain "Coronavirus"', function () {
        chai.request(app)
            .get('/')
            .end((err, response) => {
                expect(response.body.message).not.to.include('Coronavirus');

            })
    })

    it('should be of type object', function () {
        chai.request(app)
            .get('/')
            .end((err, response) => {
                it('body should be of type object', function () {
                    chai.request(app)
                        .get('/top')
                        .end((err, response) => {
                            expect(response.body).should.be.a('object');
                        })
                })

            })
    })


})