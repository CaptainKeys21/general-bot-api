import { Request, Response } from 'express';
import { Prisma } from '../../prisma/generated/GeneralBot';
import GeneralBot from '../models/GeneralBot';

type QueryParams = {
  type: string | undefined;
  name: string | undefined;
};

interface BodyCreateParams extends BodyupdateParams {
  name: string;
  config_type: string;
}

interface BodyupdateParams {
  data?: string;
  group?: string;
  allowed?: {
    roles: Array<string>;
    users: Array<string>;
  };
}

class GeneralConfig {
  async index(
    req: Request<unknown, unknown, unknown, QueryParams>,
    res: Response
  ): Promise<Response> {
    try {
      const { name, type } = req.query;

      const data = await GeneralBot.config.findMany({
        where: { config_type: type, name },
      });

      return res.status(200).json({ msg: 'ok', data });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        return res.status(500).json({ msg: e.message });
      }
      console.log(e);
      return res.status(500).json({ msg: 'Unknown server error' });
    }
  }

  async store(
    req: Request<unknown, unknown, BodyCreateParams, unknown>,
    res: Response
  ): Promise<Response> {
    try {
      const data = req.body;

      const response = await GeneralBot.config.create({ data });

      return res.status(201).json({ msg: 'created', data: response });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        return res.status(500).json({ msg: e.message });
      }
      console.log(e);
      return res.status(500).json({ msg: 'Unknown server error' });
    }
  }

  async update(
    req: Request<unknown, unknown, BodyupdateParams, QueryParams>,
    res: Response
  ): Promise<Response> {
    try {
      const data = req.body;
      const query = req.query;

      if (!query.name || !query.type) {
        return res.status(400).json({ msg: 'Bad query attributes' });
      }

      const response = await GeneralBot.config.update({
        data,
        where: {
          name_config_type: {
            name: query.name,
            config_type: query.type,
          },
        },
      });

      return res.status(200).json({ msg: 'ok', data: response });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        return res.status(500).json({ msg: e.message });
      }
      console.log(e);
      return res.status(500).json({ msg: 'Unknown server error' });
    }
  }

  async delete(
    req: Request<unknown, unknown, unknown, QueryParams>,
    res: Response
  ): Promise<Response> {
    try {
      const query = req.query;

      if (!query.name || !query.type) {
        return res.status(400).json({ msg: 'Bad query attributes' });
      }

      const response = await GeneralBot.config.delete({
        where: {
          name_config_type: {
            name: query.name,
            config_type: query.type,
          },
        },
      });

      return res.status(200).json({ msg: 'ok', data: response });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        return res.status(500).json({ msg: e.message });
      }
      console.log(e);
      return res.status(500).json({ msg: 'Unknown server error' });
    }
  }
}

export default new GeneralConfig();
