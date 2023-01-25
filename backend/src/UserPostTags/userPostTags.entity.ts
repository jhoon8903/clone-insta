import { PostEntity } from 'src/Posts/posts.entity';
import { UserEntity } from 'src/Users/users.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'UserPostTag' })
export class UserPostTagEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'int' })
  userId: number;

  @Column({ type: 'int' })
  postId: number;

  //*   Relation    */

  //*   UserPostTag | M : 1 | User
  @ManyToOne(() => UserEntity, (user) => user.userPostTag)
  @JoinColumn({ name: 'userId' })
  user: UserEntity;

  //*   UserPostTag | M : 1 | Post
  @ManyToOne(() => PostEntity, (post) => post.userPostTag)
  @JoinColumn({ name: 'postId' })
  post: PostEntity;
}
