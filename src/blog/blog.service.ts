import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateBlogDto } from './dto/create-blog-dto';
import { UpdateBlogDto } from './dto/update-blog-dto';
import { PostEntity } from './entities/post.entity';

@Injectable()
export class BlogService {
    constructor(private readonly databaseService: DatabaseService) {}
    getAllPosts(): Promise<PostEntity[]> {
        return this.databaseService.post.findMany();
    }

    createBlog(post: CreateBlogDto): Promise<PostEntity> {
        return this.databaseService.post.create({
            data: {
                ...post
            }
        });
    }

    //Blog Edit or Update
    async updateBlog(id: number, post: UpdateBlogDto): Promise<PostEntity> {
        return await this.databaseService.post.update({
            where: {id},
            data: {
                ...post
            }
        });
    }

    //Delete Blog Post
    deleteBlog(id: number): Promise<PostEntity>{
        return this.databaseService.post.delete({
            where: {
                id
            }
        });
    }
}
