import {
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';
import { MealEntity } from './meal.entity';

@Entity('order')
export class OrderEntity {
  @PrimaryGeneratedColumn()
  orderId: number;

  @ManyToOne(() => UserEntity, (user) => user.orders)
  @JoinColumn({ name: 'userId' })
  user: UserEntity;

  @ManyToMany(() => MealEntity, (meal) => meal.orders)
  @JoinTable({
    name: 'orderMeal',
    joinColumn: {
      name: 'orderId',
      referencedColumnName: 'orderId',
    },
    inverseJoinColumn: {
      name: 'mealId',
      referencedColumnName: 'mealId',
    },
  })
  meals: MealEntity[];
}
