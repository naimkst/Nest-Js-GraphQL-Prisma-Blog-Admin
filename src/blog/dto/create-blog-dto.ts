import { InputType, OmitType } from "@nestjs/graphql";
import { PostEntity } from "../entities/post.entity";

@InputType()
export class CreateBlogDto extends OmitType(PostEntity, ["id"], InputType) {}