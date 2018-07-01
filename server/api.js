const Router = require('koa-router');
const database = require('./database');
const cache = require('./cache');
const joi = require('joi');
const validate = require('koa-joi-validate');

const router = new Router();

// Hello World Test Endpoint
router.get('/hello', async ctx => {
  ctx.body = 'Hello World';
});


module.exports = router;
