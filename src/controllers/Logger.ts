import { Request, Response } from 'express';
import LoggerModel from '../models/Logger';

type QueryParams = {
  page?: number;
  pageSize?: number;
};

class Logger {
  async index(
    req: Request<unknown, unknown, unknown, QueryParams>,
    res: Response
  ): Promise<Response> {
    try {
      const params = req.query;

      const data = await LoggerModel.find({
        filter: 'all',
        page: Number(params.page || 1),
        numPerPage: params.pageSize ? Number(params.pageSize) : undefined,
      });

      return res.status(200).json({ msg: 'ok', ...data });
    } catch (e) {
      console.log(e);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  }
}

export default new Logger();
