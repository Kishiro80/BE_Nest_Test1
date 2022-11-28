import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

import { Comments } from 'src/entities/comments.entity';
import { Posts } from 'src/entities/posts.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([Posts, Comments])],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
