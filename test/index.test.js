/**
 * Created by xenotime on 03/11/16.
 */

process.env.ENVIRONMENT = 'dev1';
process.env.ALLOW_ANONYMOUS='true';
process.env.FORCEHTTPS='false';
process.env.KEEPWWW='true';
process.env.AUTH0_DOMAIN='app.auth0.com';
process.env.AUTH0_CLIENT_ID='<client id>';
process.env.AUTH0_CLIENT_SECRET='<slient secret>';
process.env.AUTH0_CONNECTION='Web-Auth-QA';
process.env.HOST='http://localhost:3000';
process.env.CALLBACK_URL='/callback';
process.env.ERROR_PAGE='/error';
process.env.SESSION_SECRET='lillyshhhhh';

var assert = require('chai').assert;
var request = require('supertest');

var basePathArr = __dirname.split('/');
basePathArr.pop();
var basePath = basePathArr.join('/');

var app = require('lusa-pkg-web-pattern')({ basePath });

describe('LUCID Web pack', function () {

  it('should use lusa-pkg-web-pattern and lucid web redirects', function (done) {

    assert.include(Object.keys(require('../package.json').dependencies),'lusa-pkg-web-pattern', 'uses lusa-pkg-web-pattern');
    done();

  });
  it('should handle bad routes', function (done) {

    request(app)
      .get('/notvalidurl')
      .expect(404)
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
