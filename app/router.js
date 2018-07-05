'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.get('/home', controller.home.index);
  router.post('/home/post', controller.home.post);
};
