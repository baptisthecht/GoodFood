import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SpecialityEnum } from './enums/speciality.enum';
import { MealEntity } from './meal.entity';
import { DeliveryTypeEntity } from './deliveryType.entity';
import { EventEntity } from './event.entity';
import { TimestampEntity } from './timestamp.entity';
import { AddressEntity } from './address.entity';

@Entity('restaurant')
export class RestaurantEntity extends TimestampEntity {
  @PrimaryGeneratedColumn()
  restaurantId: number;

  @Column({ unique: true })
  name: string;

  @OneToOne(() => AddressEntity, (a) => a.restaurant, {
    onDelete: 'CASCADE',
    cascade: true,
    eager: true,
  })
  @JoinColumn({ name: 'addressId' })
  address: AddressEntity;

  @Column()
  type: SpecialityEnum;

  @Column({ default: true })
  isActive: boolean;

  @ManyToMany(() => MealEntity, (m) => m.restaurants, { eager: true })
  @JoinTable({ name: 'restaurantMeal' })
  meals: MealEntity[];

  @ManyToMany(() => DeliveryTypeEntity, (dt) => dt.restaurants, {
    cascade: true,
    eager: true,
  })
  @JoinTable({ name: 'restaurantDeliveryType' })
  activeDeliveryTypes: DeliveryTypeEntity[];

  @OneToMany(() => EventEntity, (e) => e.restaurant)
  events: EventEntity[];
}
