import { Request, Response } from 'express';
import RolesModel from '../models/Roles';

class Roles {
  async index(req: Request, res: Response): Promise<Response> {
    try {
      const data = await RolesModel.findAll();
      return res.status(200).json({ msg: 'ok', data });
    } catch (e) {
      console.log(e);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  }
}

export default new Roles();
