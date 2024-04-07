import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProviderEntity } from './provider.entity';
import { TimestampEntity } from './timestamp.entity';
import { FoodTypeEnum } from './enums/foodType.enum';
import { MealEntity } from './meal.entity';
import { AllergenEntity } from './allergen.entity';

@Entity('ingredient')
export class IngredientEntity extends TimestampEntity {
  @PrimaryGeneratedColumn()
  ingredientId: number;

  @Column({ unique: true })
  name: string;

  @Column()
  type: FoodTypeEnum;

  @ManyToMany(() => ProviderEntity, (provider) => provider.ingredients)
  providers: ProviderEntity[];

  @ManyToMany(() => AllergenEntity, (a) => a.ingredients)
  allergens: AllergenEntity[];

  @ManyToMany(() => MealEntity, (m) => m.ingredients)
  meals: MealEntity[];
}
