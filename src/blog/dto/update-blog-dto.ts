import { InputType, PartialType } from "@nestjs/graphql";
import { CreateBlogDto } from "./create-blog-dto";

@InputType()
export class UpdateBlogDto extends PartialType(CreateBlogDto) {}