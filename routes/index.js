
module.exports = (routes) => {
  routes.get('/', (req, res) => {
    res.render('index', {
      title: 'lusa-web-boilerplate',
      user: JSON.stringify(req.user),
    });
  });

  routes.get('/sample-page', (req, res) => {
    res.render('index', {
      title: 'Sample Page',
      user: JSON.stringify(req.user),
    });
  });
};
