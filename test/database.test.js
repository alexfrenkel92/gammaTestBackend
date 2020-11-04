const chai = require('chai');
const expect = chai.expect;

// const prepare = require('mocha-prepare')
// const mongoUnit = require('mongo-unit')

// prepare(done => mongoUnit.start()
//  .then(testMongoUrl => {
//    process.env.DB_URL = testMongoUrl;
//    done()
//  }))

const mongoose = require('mongoose')
// const mongoUnit = require('../src/server');
const service = require('../src/app/database');
const testMongoUrl = process.env.DB_URL
const testData = require('./testData.json');


const prepare = require('mocha-prepare')
const mongoUnit = require('mongo-unit')

prepare(done => mongoUnit.start()
 .then(testMongoUrl => {
  process.env.DB_URL = testMongoUrl
   done()
 }))


describe('service', () => {
    beforeEach(() => mongoUnit.initDb(testMongoUrl, testData))
    afterEach(() => mongoUnit.drop())
   
    it('should find all tasks', () => {
      return service.getTasks()
        .then(tasks => {
          expect(tasks.length).to.equal(5)
        //   expect(tasks[0].name).to.equal('test')
        })
    })
})
 
// it('should return number', () => {
//     const num1 = 2;
//     const num2 = 2;
//     expect(num1 + num2).to.equal(4)
// })