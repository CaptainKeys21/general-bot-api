import { Request, Response } from 'express';
import UtilitiesModel from '../models/Utilities';

type RequestBody = {
  ids: string[];
};

class Utilities {
  async getNames(req: Request<unknown, unknown, RequestBody>, res: Response): Promise<Response> {
    try {
      const { ids } = req.body;
      const data = await UtilitiesModel.findNameById(ids);
      return res.status(200).json({ msg: 'ok', data });
    } catch (e) {
      console.log(e);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  }

  async getEmojis(req: Request<unknown, unknown, RequestBody>, res: Response): Promise<Response> {
    try {
      const { ids } = req.body;
      const data = await UtilitiesModel.findEmojisById(ids);
      return res.status(200).json({ msg: 'ok', data });
    } catch (e) {
      console.log(e);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  }
}

export default new Utilities();
