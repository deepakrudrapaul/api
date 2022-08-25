import {
  Column,
  CreateDateColumn, DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import { User } from "../../user/user.entity";
import { Repo } from "./repo.entity";

@Entity({
  name: "users_to_repos_stars",
})
export class RepoToUserStars {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public user_id!: number;

  @Column()
  public repo_id!: number;

  @CreateDateColumn({
    type: "timestamp without time zone",
    default: () => "now()",
  })
  created_at: Date;

  @UpdateDateColumn({
    type: "timestamp without time zone",
    default: () => "now()",
  })
  updated_at: Date;

  @DeleteDateColumn({
    type: "timestamp without time zone",
  })
  deleted_at: Date;

  @ManyToOne(() => User, (user) => user.repoToUserStars)
  @JoinColumn({
    name: "user_id",
    referencedColumnName: "id",
  })
  public user!: User;

  @ManyToOne(() => Repo, (repo) => repo.repoToUserStars)
  @JoinColumn({
    name: "repo_id",
    referencedColumnName: "id",
  })
  public repo!: Repo;
}