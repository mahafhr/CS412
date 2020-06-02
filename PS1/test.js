const sortString = require('../PS1/PS1.P1').sortString;
const evaluate = require('../PS1/PS1.P2').evaluate;
const fString = require('../PS1/PS1.P3').fString;

const { describe, it } = require('mocha');
const { expect } = require('chai');

 describe('Testing PS1.P1...', () => {

     //Set up initial conditions

     //Set up individual unit tests
     it('should return "adgloyz: for input lazydog', function () {
         let word = sortString("lazydog");
         expect(word).to.be.equal("adgloyz");
     });
     it('should return "12aabb" for input baba12', function () {
         let word = sortString("baba12");
         expect(word).to.be.equal("12aabb");

     });
     it('should return a String type', function () {
         let word = sortString("ImAString");
         expect(word).to.be.a("string");

     });
 });

 describe("Testing PS1.P2...", () => {
     it('should return 15', function () {
         const expression = '8+7';
         let operator = evaluate(expression);
         let ret = operator(expression);
         expect(ret).to.be.equal(15)
     })

     it('should return 8', function () {
         const expression = '9-1';
         let operator = evaluate(expression);
         let ret = operator(expression);
         expect(ret).to.be.equal(8)
     })

     it('should return 4', function () {
         const expression = '8/2';
         let operator = evaluate(expression);
         let ret = operator(expression);
         expect(ret).to.be.equal(4)
     })
 })

describe("Testing PS1.P3...", () => {
    it('should return "comma"', function () {
        let ret = fString('c,o,m,m,a', function removeComma(s) {
            return s.split(',').join('');
        });
        expect(ret).to.be.equal('comma');
    });

    it('should return "dad"', function () {
        let ret = fString('dad', function reverseString(s) {
            return s.split('').reverse().join('');
        });
        expect(ret).to.be.equal('dad');
    });

    it('should return "ecaps"', function () {
        let ret = fString('space', function sort(s) {
            return s.split('').reverse().join('');
        });
        expect(ret).to.be.equal('ecaps');
    });


})