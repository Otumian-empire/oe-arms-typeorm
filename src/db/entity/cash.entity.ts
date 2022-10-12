import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AMOUNT_PRECISION, AMOUNT_SCALE } from "../../constants/app.constants";
import Tenant from "./tenant.entity";

@Entity()
export default class Cash extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Tenant)
  @JoinColumn()
  tenant: Tenant;

  @Column({ nullable: false })
  token: string;

  @Column({
    type: "numeric",
    precision: AMOUNT_PRECISION,
    scale: AMOUNT_SCALE,
    nullable: false,
    default: 0,
  })
  amount: number;

  @CreateDateColumn()
  paidAt: Date;
}
