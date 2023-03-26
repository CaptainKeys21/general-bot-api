import { Request, Response } from 'express';
import CommandAllowedIdsModel from '../models/CommandAllowedIdsConfig';

type QueryParams = {
  name?: string;
  keyname?: boolean;
};

interface BodyCreateParams extends BodyupdateParams {
  name: string;
}

interface BodyupdateParams {
  allowed: {
    roles: string[];
    users: string[];
  };
}

class CommandAllowedIdsConfig {
  async index(
    req: Request<unknown, unknown, BodyupdateParams, QueryParams>,
    res: Response
  ): Promise<Response> {
    try {
      if (!req.query.name) {
        const data = await CommandAllowedIdsModel.findAll(req.query.keyname);
        return res.status(200).json({ msg: 'ok', data });
      } else {
        const data = await CommandAllowedIdsModel.findOne(req.query.name);
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
        config_type: 'command_allowed_ids',
      };

      const response = await CommandAllowedIdsModel.insertOne(data);

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
      const { allowed } = req.body;
      const { name } = req.query;

      if (!name) {
        return res.status(400).json({ msg: 'Config name not specified' });
      }

      const response = await CommandAllowedIdsModel.editOne(name, allowed);

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

      const response = await CommandAllowedIdsModel.deleteOne(name);

      return res.status(200).json({ msg: 'ok', acknowledged: response });
    } catch (e) {
      console.log(e);
      return res.status(500).json({ msg: 'Unknown server error' });
    }
  }
}

export default new CommandAllowedIdsConfig();
