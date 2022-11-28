import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comments } from 'src/entities/comments.entity';
import { Posts } from 'src/entities/posts.entity';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
@Module({
  imports: [TypeOrmModule.forFeature([Posts,Comments])],
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
