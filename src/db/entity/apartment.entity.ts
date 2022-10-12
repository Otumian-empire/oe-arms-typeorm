import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ROOM_NUMBER_LENGTH } from "../../constants/app.constants";

@Entity()
export default class Apartment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: false, length: ROOM_NUMBER_LENGTH })
  roomNumber: string;

  @Column("text")
  description: string;

  @Column({ type: "numeric", precision: 10, scale: 2 })
  price: number;
}
