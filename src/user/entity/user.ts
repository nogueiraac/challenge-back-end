import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Key } from "../../key/entity/key";

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  phone: string;

  @OneToMany(() => Key, (key:Key) => key.user, {
    cascade: true
  })
  keys: Key[];

}