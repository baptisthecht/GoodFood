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

  @ManyToOne(() => UserEntity, (user) => user.orders, { cascade: true })
  @JoinColumn({ name: 'userId' })
  user: UserEntity;

  @ManyToMany(() => MealEntity, (meal) => meal.orders, { cascade: true })
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
