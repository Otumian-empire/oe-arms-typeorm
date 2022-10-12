import {
  BaseEntity,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import Apartment from "./apartment.entity";
import Cash from "./cash.entity";
import Tenant from "./tenant.entity";

@Entity()
export default class Rent extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Tenant)
  @JoinColumn()
  tenant: Tenant;

  @OneToOne(() => Apartment)
  @JoinColumn()
  apartment: Apartment;

  @OneToOne(() => Cash)
  @JoinColumn()
  cash: Cash;

  @CreateDateColumn()
  rentedAt: Date;
}
