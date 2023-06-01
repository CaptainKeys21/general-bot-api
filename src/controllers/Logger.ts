import { Request, Response } from 'express';
import LoggerModel from '../models/Logger';
import { DateParams, PaginationParams } from '../types/Models';

type QueryParams = {
  category?: string | string[];
} & Partial<PaginationParams> &
  Partial<DateParams>;

type Params = {
  id: string;
};

class Logger {
  async index(
    req: Request<unknown, unknown, unknown, QueryParams>,
    res: Response
  ): Promise<Response> {
    try {
      const {
        page = 1,
        category = 'all',
        numPerPage = 100,
        dateInitial = 0,
        dateFinal = 0,
      } = req.query;

      if (!(await LoggerModel.checkCategory(category))) {
        return res.status(400).json({ msg: 'category not supported' });
      }

      const data = await LoggerModel.find({
        filter: category,
        page: Number(page),
        numPerPage: Number(numPerPage),
        dateInitial: Number(dateInitial),
        dateFinal: Number(dateFinal),
      });

      return res.status(200).json({ msg: 'ok', ...data });
    } catch (e) {
      console.log(e);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  }

  async messagesByUserId(
    req: Request<Params, unknown, unknown, QueryParams>,
    res: Response
  ): Promise<Response> {
    try {
      const { id } = req.params;
      const { page = 1, numPerPage = 100, dateInitial = 0, dateFinal = 0 } = req.query;

      const data = await LoggerModel.findMessagesByUserId(
        id,
        { page: Number(page), numPerPage: Number(numPerPage) },
        { dateInitial: Number(dateInitial), dateFinal: Number(dateFinal) }
      );

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
