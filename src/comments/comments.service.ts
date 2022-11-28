import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comments } from 'src/entities/comments.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comments)
    private Repo: Repository<Comments>,
  ) {}

   
  async getall(condition: any): Promise<Comments[]> {
    let data = await this.Repo.find(condition);
    return data;
  }
}
