import express from 'express';
import StatusCodes from 'http-status-codes';
import logger from './utils/logger';
const app = express();
const PORT = process.env.PORT || 3000;
// app.use(pinoHttp({ logger: logger }));
app.get('/healthcheck', (_req, res) => {
  res.status(StatusCodes.OK).json({
    success: true,
    message: 'Server is working!',
  });
});
const start = async () => {
  app.listen(PORT, () => {
    logger.info(`SERVER IS LISTENING ON http://localhost:${PORT}`);
  });
};
start();
export default app;
