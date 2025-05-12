import { PostModel } from '@/models/post/post-model';

export interface PostReader {
  findAll(): Promise<PostModel[]>;
  findById(id: string): Promise<PostModel>;
}
