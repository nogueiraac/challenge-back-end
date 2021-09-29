import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../user/entity/user";

@Entity('tranfers')
export class Transfer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: number;

  @ManyToOne(() => User, (user: User) => user.id)
  userDestiny: User;

  @ManyToOne(() => User, (user: User) => user.id)
  userSend: User;
 
}