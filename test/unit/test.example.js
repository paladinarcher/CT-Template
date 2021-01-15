var assert = require('assert');

describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});

describe('string name', function(){
    // can nest more describe()'s here, or tests go here
});

it('should...', function(){
    // Test case goes here
});

var assert = require('chai').assert;
var numbers = [1, 2, 3, 4, 5];
assert.isArray(numbers, 'is array of numbers');
assert.include(numbers, 2, 'array contains 2');
assert.lengthOf(numbers, 5, 'array contains 5 numbers');

var expect = require('chai').expect;
var numbers = [1, 2, 3, 4, 5];

expect(numbers).to.be.an('array').that.includes(2);
expect(numbers).to.have.lengthOf(5);

var should = require('chai').should();
var numbers = [1, 2, 3, 4, 5];

numbers.should.be.an('array').that.includes(2);
numbers.should.have.lengthOf(5);


// Create a group of tests about Arrays
describe('Array', function() {
    // Within our Array group, Create a group of tests for indexOf
    describe('#indexOf()', function() {
        // A string explanation of what we're testing
        it('should return -1 when the value is not present', function(){
            // Our actual test: -1 should equal indexOf(...)
            assert.equal(-1, [1,2,3].indexOf(4));
        });
    });
});