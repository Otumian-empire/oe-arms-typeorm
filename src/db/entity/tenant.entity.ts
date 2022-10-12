import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { USERNAME_LENGTH } from "../../constants/app.constants";

@Entity()
export default class Tenant extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  fullName: string;

  @Column({ nullable: false, unique: true, length: USERNAME_LENGTH })
  username: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: false })
  phone: string;

  @Column({ nullable: false })
  dob: Date;

  @Column({ nullable: false })
  prevResidenceAddress: string;
}
