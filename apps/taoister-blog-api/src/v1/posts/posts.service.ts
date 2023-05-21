import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { FindPostDto } from 'apps/taoister-blog-api/src/v1/posts/dto/find-post.dto';
import { DbService } from '@libs/db';

@Injectable()
export class PostsService {
  constructor(private readonly dbService: DbService) {}
  async findMany(findPostDto: FindPostDto) {
    const { title, id } = findPostDto;

    const total = await this.dbService.post.count({
      where: {
        title: {
          contains: title,
        },
        id,
      },
    });

    return { total: 0, lists: [] };
  }
  create(createPostDto: CreatePostDto) {
    return 'This action adds a new post';
  }

  findAll() {
    return `This action returns all posts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
