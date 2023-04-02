import { Request, Response } from 'express';
import MembersModel from '../models/Members';

type QueryParams = {
  start: number;
  end: number;
};

class Members {
  async index(
    req: Request<unknown, unknown, unknown, QueryParams>,
    res: Response
  ): Promise<Response> {
    try {
      const data = await MembersModel.findAll();
      return res.status(200).json({ msg: 'ok', data });
    } catch (e) {
      console.log(e);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  }
}

export default new Members();
