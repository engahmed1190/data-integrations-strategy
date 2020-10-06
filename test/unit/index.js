'use strict';

const chai = require('chai');
const expect = chai.expect;
const path = require('path');
const GENERATE = require(path.join(__dirname, '../../index'));
chai.use(require('chai-spies'));

describe('evaluators', function () {
  describe('handling errors in evaluator', function () {
    it('should pass error to callback when it is passed', done => {
      GENERATE({ segment: null, }, (error) => {
        expect(error).to.be.instanceOf(Error);
        done();
      });
    });
    it('should return a function when no callback is passed', done => {
      GENERATE({ segments: null, })
        .then(evaluator => {
          expect(evaluator).to.be.a('function');
          done();
        })
        .catch(e => {
          done(e);
        });
    });
  });
});