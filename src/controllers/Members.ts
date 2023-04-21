import { Request, Response } from 'express';
import MembersModel from '../models/Members';

type QueryParams = {
  page: number;
  numPerPage: number;
};

type Params = {
  id: string;
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

  async findOne(req: Request<Params>, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const data = await MembersModel.findOne(id);
      if (!data)
        return res.status(404).json({
          msg: 'Not Found',
          detail: 'Membro não encontrado na base de dados',
        });

      return res.status(200).json({ msg: 'ok', data });
    } catch (e) {
      console.log(e);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  }
}

export default new Members();
