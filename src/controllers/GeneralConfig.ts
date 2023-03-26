import { Request, Response } from 'express';
import GeneralConfigModel from '../models/GeneralConfig';

type QueryParams = {
  name?: string;
  keyname?: boolean;
};

interface BodyCreateParams extends BodyupdateParams {
  name: string;
}

interface BodyupdateParams {
  data?: string;
}

class GeneralConfig {
  async index(
    req: Request<unknown, unknown, BodyupdateParams, QueryParams>,
    res: Response
  ): Promise<Response> {
    try {
      if (!req.query.name) {
        const data = await GeneralConfigModel.findAll(req.query.keyname);
        return res.status(200).json({ msg: 'ok', data });
      } else {
        const data = await GeneralConfigModel.findOne(req.query.name);
        return res.status(200).json({ msg: 'ok', data });
      }
    } catch (e) {
      console.log(e);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  }

  async store(
    req: Request<unknown, unknown, BodyCreateParams, unknown>,
    res: Response
  ): Promise<Response> {
    try {
      const data = {
        ...req.body,
        config_type: 'general',
      };

      const response = await GeneralConfigModel.insertOne(data);

      return res.status(201).json({ msg: 'created', data: response });
    } catch (e) {
      console.log(e);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  }

  async update(
    req: Request<unknown, unknown, BodyupdateParams, QueryParams>,
    res: Response
  ): Promise<Response> {
    try {
      const { data } = req.body;
      const { name } = req.query;

      if (!name) {
        return res.status(400).json({ msg: 'Config name not specified' });
      }

      const response = await GeneralConfigModel.editOne(name, data);

      return res.status(200).json({ msg: 'ok', acknowledged: response });
    } catch (e) {
      console.log(e);
      return res.status(500).json({ msg: 'Unknown server error' });
    }
  }

  async delete(
    req: Request<unknown, unknown, unknown, QueryParams>,
    res: Response
  ): Promise<Response> {
    try {
      const { name } = req.query;

      if (!name) {
        return res.status(400).json({ msg: 'Config name not specified' });
      }

      const response = await GeneralConfigModel.deleteOne(name);

      return res.status(200).json({ msg: 'ok', acknowledged: response });
    } catch (e) {
      console.log(e);
      return res.status(500).json({ msg: 'Unknown server error' });
    }
  }
}

export default new GeneralConfig();
