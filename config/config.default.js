'use strict';
const path = require('path');

module.exports = appInfo => {
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1530584583082_5770';

  // add your config here
  config.middleware = [];

  config.cors = {
    allowMethods: 'POST,GET,OPTIONS',
    credentials: true,
  };
  config.view = {
    root: path.join(appInfo.baseDir, 'app/view'),
    mapping: {
      '.html': 'nunjucks',
    },
  };
  config.security = {
    csrf: {
      // ignoreJSON: true,
      enable: false,
      // queryName: '_csrf', // 通过 query 传递 CSRF token 的默认字段为 _csrf
      // bodyName: '_csrf', // 通过 body 传递 CSRF token 的默认字段为 _csrf
    },
    /* methodnoallow: {
      enable: false
    },
    domainWhiteList: ['http://localhost:3000'] */
  };
  return config;
};
