import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { EventTypeEnum } from './enums/eventType.enum';
import { RestaurantEntity } from './restaurant.entity';
import { TimestampEntity } from './timestamp.entity';

@Entity('event')
export class EventEntity extends TimestampEntity {
  @PrimaryGeneratedColumn()
  eventId: number;

  @Column()
  type: EventTypeEnum;

  @Column()
  name: Date;

  @Column()
  guestCount: number;

  @Column()
  capacity: number;

  @ManyToOne(() => RestaurantEntity, (r) => r.events, { cascade: true })
  @JoinColumn({ name: 'restaurantId' })
  restaurant: RestaurantEntity;
}
