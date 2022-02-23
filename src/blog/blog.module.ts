import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { BlogResolver } from './blog.resolver';
import { BlogService } from './blog.service';

@Module({
  providers: [BlogResolver, BlogService],
  imports: [DatabaseModule]
})
export class BlogModule {}
