import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('orderMeal')
export class OrderMealEntity {
  @Column()
  @IsNotEmpty()
  @PrimaryColumn()
  orderId: number;

  @Column()
  @IsNotEmpty()
  @PrimaryColumn()
  mealId: number;

  @Column()
  quantity: number;
}
