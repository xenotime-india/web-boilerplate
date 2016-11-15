module.exports = function(routes){

  routes.get('/', function(req, res, next){
    const err = new Error('This is an error!');
    var throw_err = false;
    if(throw_err){ return next(err); } // This passes any errors to our express error handler.
    res.render('index', {
      title: 'LUSA-Web-Pack',
      user: JSON.stringify(req.user)
    });
  });

  routes.get('/sample-page', function (req, res) {
    const err = new Error('This is an error!');
    var throw_err = false;
    if(throw_err){ return next(err); } // This passes any errors to our express error handler.
    res.render('index', {
      title: 'Sample Page',
      user: JSON.stringify(req.user)
    });
  });
}
