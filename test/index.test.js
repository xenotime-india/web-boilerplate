/**
 * Created by xenotime on 03/11/16.
 */
var assert = require('chai').assert;
var request = require('supertest');

var basePathArr = __dirname.split('/');
basePathArr.pop();
var basePath = basePathArr.join('/');

var app = require('lillyWebPack')({ basePath });

describe('LUCID Web pack', function () {

  it('should use lucid web auth and lucid web redirects', function (done) {

    assert.include(Object.keys(require('../package.json').dependencies),'lillyWebPack', 'uses lillyWebPack');
    done();

  });
  it('should handle bad routes', function (done) {

    request(app)
      .get('/notvalidurl')
      .expect(302)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
  it('should set a templating engine, currently handlebars only', function(done){

    var templates = ['hbs'];	// Add more engines if needed

    assert.include(templates,app["settings"]["view engine"],'uses handlebars as templating engine');
    done();

  });
});
