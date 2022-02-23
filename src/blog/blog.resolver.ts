import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create-blog-dto';
import { UpdateBlogDto } from './dto/update-blog-dto';
import { PostEntity } from './entities/post.entity';

@Resolver(() => PostEntity)
export class BlogResolver {
    constructor( private readonly blogService: BlogService) {}
    @Query(() => [PostEntity])
    getAllPosts(): Promise<PostEntity[]> {
        return this.blogService.getAllPosts();
    }

    @Mutation(() => PostEntity)
    async createBlog(@Args('post') post: CreateBlogDto): Promise<PostEntity>{
        return await this.blogService.createBlog(post);
    }

    @Mutation(() => PostEntity)
    async updateBlog(@Args('id') id: number, @Args('post') post: UpdateBlogDto): Promise<UpdateBlogDto>{
        return await this.blogService.updateBlog(id, post);
    }

    @Mutation(() => PostEntity)
    deleteBlog(@Args('id') id: number): Promise<PostEntity>{
        return this.blogService.deleteBlog(id);
    }
}
