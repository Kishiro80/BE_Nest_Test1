/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, Param } from '@nestjs/common';
import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController {
  constructor(private CommentsService: CommentsService) {}

  @Get()
  async getAll() {
    let commentList = await this.CommentsService.getall({
      relations: ['posts'],
    });
    commentList.forEach((com, index) => {
      com['postId'] = com.posts.id;
      delete com['posts'];
    });
    return commentList;
  }
 
  @Get(':key/:value')
  async getFilter(@Param() params) {
    try {
      let filter = {};
      filter[params.key] = params.value;
      let commentList = await this.CommentsService.getall({
        where: filter,
        relations: ['posts'],
      });
      commentList.forEach((com, index) => {
        com['postId'] = com.posts.id;
        delete com['posts'];
      });
      return commentList;
    } catch (error) {
      return {};
    }
  }
}
