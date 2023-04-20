import { Request, Response } from 'express';
import MembersModel from '../models/Members';

type QueryParams = {
  page: number;
  numPerPage: number;
};

class Members {
  async index(
    req: Request<unknown, unknown, unknown, QueryParams>,
    res: Response
  ): Promise<Response> {
    try {
      const page = Number(req.query.page) || 1;
      const numPerPage = Number(req.query.numPerPage) || 100;
      const data = await MembersModel.findAll({ page, numPerPage });
      return res.status(200).json({ msg: 'ok', ...data });
    } catch (e) {
      console.log(e);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  }
}

export default new Members();
