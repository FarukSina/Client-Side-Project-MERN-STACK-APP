/*
Principal author: Faruk Sina Kaya
Sub: Tomoaki Morita 
*/

module.exports = router => {
  require('./routes/movie')(router);

  return router;
};