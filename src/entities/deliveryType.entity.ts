import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DeliveryManEntity } from './deliveryMan.entity';
import { RestaurantEntity } from './restaurant.entity';
import { TimestampEntity } from './timestamp.entity';

@Entity('deliveryType')
export class DeliveryTypeEntity extends TimestampEntity {
  @PrimaryGeneratedColumn()
  deliveryTypeId: number;

  @Column()
  name: string;

  @Column()
  priceByKm: number;

  @Column()
  basePrice: number;

  @OneToMany(() => DeliveryManEntity, (deliveryMan) => deliveryMan.deliveryType)
  deliveryMen: DeliveryManEntity[];

  @ManyToMany(() => RestaurantEntity, (r) => r.activeDeliveryTypes)
  @JoinTable({ name: 'restaurantDeliveryType' })
  restaurants: RestaurantEntity[];
}
