import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Posts } from 'src/entities/posts.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Posts)
    private PostRepo: Repository<Posts>,
  ) {}

  countcomments(item, index) {
    item.CommentsCount = item.comments.length;
  }
  removecomments(item, index) {
    delete item['comments'];
  }
  async getone(condition: any): Promise<Posts> {
    let data = await this.PostRepo.findOne(condition);
    data['CommentsCount'] = data.comments.length;
    delete data['comments'];

    return data;
  }
  async getall(condition: any): Promise<Posts[]> {
    let data = await this.PostRepo.find(condition);
    data.forEach(this.countcomments);
    data.forEach(this.removecomments);
    return data;
  }
}
