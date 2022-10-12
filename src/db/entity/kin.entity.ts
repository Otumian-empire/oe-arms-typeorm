import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import Tenant from "./tenant.entity";

@Entity()
export default class Kin extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Tenant)
  @JoinColumn()
  tenant: Tenant;

  @Column({ nullable: false })
  fullName: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  phone: string;

  @Column({ nullable: false })
  residenceAddress: string;
}
