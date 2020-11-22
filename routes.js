module.exports = router => {
  require('./routes/movie')(router);

  return router;
};