import dotenv from 'dotenv';
import express from 'express';
import 'express-async-errors';
import StatusCodes from 'http-status-codes';
import sequelize from './config/sequelize.config';
import notFoundHandler from './middlewares/not-found.middleware';
import logger from './utils/logger.utils';

dotenv.config();
const { HOST, PORT } = process.env;
const app = express();
// app.use(pinoHttp({ logger: logger }));
app.get('/healthcheck', (_req, res) => {
  res.status(StatusCodes.OK).json({
    success: true,
    message: 'Server is working!',
  });
});
//Error handling stack:
app.use(notFoundHandler);

const start = async () => {
  await sequelize.sync();
  app.listen(PORT, () => {
    logger.info(`SERVER IS LISTENING ON http://${HOST}:${PORT || 3000}`);
  });
};
start();
export default app;
