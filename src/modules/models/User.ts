import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("User")
class User {
  @PrimaryColumn()
  Id!: string;

  @Column()
  Name!: string;

  @Column()
  Email!: string;

  @Column()
  Password!: string;

  @Column()
  IsAdmin?: boolean;

  @CreateDateColumn()
  Created_at!: Date;

  constructor() {
    if (!this.Id) {
      this.Id = uuidV4();
    }
  }
}

export { User };