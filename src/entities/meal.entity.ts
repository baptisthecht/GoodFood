import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IngredientEntity } from './ingredient.entity';
import { SpecialityEnum } from './enums/speciality.enum';
import { RestaurantEntity } from './restaurant.entity';
import { TimestampEntity } from './timestamp.entity';
import { OrderEntity } from './order.entity';

@Entity('meal')
export class MealEntity extends TimestampEntity {
  @PrimaryGeneratedColumn()
  mealId: number;

  @Column({ unique: true })
  name: string;

  @ManyToMany(() => IngredientEntity, (i) => i.meals)
  @JoinTable({ name: 'mealIngredient' })
  ingredients: IngredientEntity[];

  @Column()
  type: SpecialityEnum;

  @Column()
  price: number;

  @ManyToMany(() => RestaurantEntity, (r) => r.meals)
  restaurants: RestaurantEntity[];

  @ManyToMany(() => OrderEntity, (m) => m.meals)
  orders: OrderEntity[];
}
