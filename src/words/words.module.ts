import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WordsResolver } from './words.resolver';
import { WordsSchema } from './words.schema';
import { WordsService } from './words.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Words', schema: WordsSchema }]),
  ],
  providers: [WordsResolver, WordsService],
})
export class WordsModule {}
