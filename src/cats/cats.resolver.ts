/* eslint-disable @typescript-eslint/no-unused-vars */
import { Query, Resolver } from '@nestjs/graphql';
import { CatsService } from './cats.service';
import { CatType } from './dto/create-cat.dto';

@Resolver()
export class CatsResolver {
  constructor(private readonly catsService: CatsService) {}

  @Query(() => String)
  async hello() {
    return 'helloCats';
  }

  @Query((returns) => [CatType])
  async cats() {
    return this.catsService.findAll();
  }

  // @Mutation(() => CatType)
  // async createCat(@Args('input') input: CatInput) {
  //   return this.catsService.create(input);
  // }
}
