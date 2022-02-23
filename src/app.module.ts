import { Module } from '@nestjs/common';
import { BlogModule } from './blog/blog.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    BlogModule,
    DatabaseModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
