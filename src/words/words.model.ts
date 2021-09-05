/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Words {
  @Field((type) => Int)
  id: number;

  @Field((type) => Int)
  numbers: number;

  @Field((type) => String, { nullable: true })
  words: [string];
}
