import { Service, SequelizeServiceOptions } from 'feathers-sequelize';
import { Application } from '../../declarations';
import { Params } from '@feathersjs/feathers';
import { Answer } from '../../models/answer.model';

export class Answers extends Service {
  constructor(options: Partial<SequelizeServiceOptions>, app: Application) {
    super(options);
  }

  async create(answer: Partial<Answer>, params?: Params): Promise<Answer> {
    // TODO: validate and persist answer
    return new Answer(0, "0", "", true);
  }
}
