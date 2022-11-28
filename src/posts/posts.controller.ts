import { Controller, Get, Param } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private PostsService: PostsService) {}

  @Get(':id')
  async getOne(@Param() params) { 
    return await this.PostsService.getone({ where: { id: params.id } ,relations:['comments']});
  }
  @Get()
  getAll() { 
    return this.PostsService.getall({relations:['comments']});
  }
}
