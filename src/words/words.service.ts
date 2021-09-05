import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Words } from './words.model';
import { CreateWordsDto } from './dto/create-words.dto';

@Injectable()
export class WordsService {
  constructor(@InjectModel(Words.name) private wordsModel: Model<Words>) {}

  async create(createCatDto: CreateWordsDto): Promise<Words> {
    const createdWords = new this.wordsModel(createCatDto);
    return createdWords.save();
  }

  async findAll(): Promise<Words[]> {
    return this.wordsModel.find().exec();
  }
}
