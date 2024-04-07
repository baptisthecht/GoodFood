import {
  Column,
  Entity,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DeliveryTypeEntity } from './deliveryType.entity';
import { TimestampEntity } from './timestamp.entity';

@Entity('deliveryMan')
export class DeliveryManEntity extends TimestampEntity {
  @PrimaryGeneratedColumn()
  deliveryManId: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  city: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  password: string;

  @ManyToOne(
    () => DeliveryTypeEntity,
    (deliveryType) => deliveryType.deliveryMen,
  )
  deliveryType: DeliveryTypeEntity;
}
