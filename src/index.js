const logger = require("koa-logger");
const bodyParser = require("koa-body");
const cors = require("koa-cors");
const Router = require("koa-router");
const axios = require("axios");
const koa = require("koa");

const app = new koa();
const router = new Router();

app
  .use(cors())
  .use(logger())
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());

const baseUrl = "http://api.wanted.im/api/v1/auth";

router.post("/wanted/start", async (ctx, next) => {
  const data = await axios.post(`${baseUrl}/start`, ctx.request.body);
  ctx.body = data.data
});

router.post("/wanted/verify", async (ctx, next) => {
  const data = await axios.post(`${baseUrl}/verify`, ctx.request.body);
  ctx.body = data.data
});

app.listen(3030, console.log("Server is started on port 3030"));
