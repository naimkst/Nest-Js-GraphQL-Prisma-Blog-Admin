import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class PostEntity {
    @Field(() => Int)
    id: number;

    @Field(()=> String)
    title: string;

    @Field(()=> String)
    content: string;
}