/*
Principal author: IRONMAN
Sub: Tomoaki Morita (checkValidation)
*/

module.exports = router => {
  require('./routes/movie')(router);

  return router;
};