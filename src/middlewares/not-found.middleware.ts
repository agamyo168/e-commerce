import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const notFoundHandler = async (req: Request, res: Response) => {
  res
    .status(StatusCodes.NOT_FOUND)
    .json({ success: false, message: 'Resource not found' });
};

export default notFoundHandler;
