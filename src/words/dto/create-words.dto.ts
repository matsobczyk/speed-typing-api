import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreateWordsDto {
  @Field(() => Int)
  readonly id: number;
  @Field(() => String)
  readonly words: string[];
  @Field(() => Int)
  readonly numbers: number;
}
