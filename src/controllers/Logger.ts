import { Request, Response } from 'express';
import LoggerModel from '../models/Logger';

type QueryParams = {
  page?: number;
  pageSize?: number;
  category?: string | string[];
};

class Logger {
  async index(
    req: Request<unknown, unknown, unknown, QueryParams>,
    res: Response
  ): Promise<Response> {
    try {
      const { page = 1, category = 'all', pageSize } = req.query;

      if (!(await LoggerModel.checkCategory(category))) {
        return res.status(400).json({ msg: 'category not supported' });
      }

      const data = await LoggerModel.find({
        filter: category,
        page: Number(page),
        numPerPage: pageSize ? Number(pageSize) : undefined,
      });

      return res.status(200).json({ msg: 'ok', ...data });
    } catch (e) {
      console.log(e);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  }

  async categories(req: Request, res: Response): Promise<Response> {
    try {
      const data = await LoggerModel.getAllCollectionNames();
      return res.status(200).json({ msg: 'ok', data });
    } catch (e) {
      console.log(e);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  }
}

export default new Logger();
