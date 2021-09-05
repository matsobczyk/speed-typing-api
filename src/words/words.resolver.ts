import { Query, Resolver } from '@nestjs/graphql';
import { CreateWordsDto } from './dto/create-words.dto';
import { WordsService } from './words.service';

@Resolver()
export class WordsResolver {
  constructor(private readonly wordsService: WordsService) {}
  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Query((returns) => [CreateWordsDto])
  async words() {
    return this.wordsService.findAll();
  }
}
