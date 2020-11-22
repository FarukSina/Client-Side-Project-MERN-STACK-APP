const { index, show, create, update, destroy } = require('../controllers/movie');

module.exports = router => {
  router.get('/movie', index);
  router.get('/movie/:id', show);
  router.post('/movie', create);
  router.post('/movie/update/:id', update);
  router.post('/movie/destroy/:id', destroy);
};