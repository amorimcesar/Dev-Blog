import { PostModel } from '@/models/post/post-model';
import { PostReader } from './post-reader';
import { resolve } from 'path';
import { readFile } from 'fs/promises';

const ROOT_DIR = process.cwd();
const JSON_POSTS_FILE_PATH = resolve(
  ROOT_DIR,
  'src',
  'db',
  'seed',
  'posts.json',
);

export class JsonPostRepository implements PostReader {
  private async readFromDisck(): Promise<PostModel[]> {
    const jsonContent = await readFile(JSON_POSTS_FILE_PATH, 'utf-8');
    const parsedJson = JSON.parse(jsonContent);
    const { posts } = parsedJson;
    return posts;
  }

  async findAll(): Promise<PostModel[]> {
    const posts = await this.readFromDisck();
    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    const posts = await this.findAll();
    const post = posts.find(post => post.id === id);
    if (!post) throw new Error('Post não encontrado');

    return post;
  }
}

export const postRepository: PostReader = new JsonPostRepository();
