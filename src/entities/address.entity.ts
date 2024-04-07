import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TimestampEntity } from './timestamp.entity';
import { UserEntity } from './user.entity';
import { RestaurantEntity } from './restaurant.entity';

@Entity('address')
export class AddressEntity extends TimestampEntity {
  @PrimaryGeneratedColumn()
  addressId: number;

  @Column()
  number: string;

  @Column()
  street: string;

  @Column()
  city: string;

  @Column()
  zipCode: string;

  @Column()
  country: string;

  @Column()
  locationX: string;

  @Column()
  locationY: string;

  @ManyToOne(() => UserEntity, (user) => user.addresses, { nullable: true })
  @JoinColumn({ name: 'userId' })
  user: UserEntity;

  @OneToOne(() => RestaurantEntity, (restaurant) => restaurant.address, {
    nullable: true,
  })
  @JoinColumn({ name: 'restaurantId' })
  restaurant: RestaurantEntity;
}
