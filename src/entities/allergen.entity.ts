import {
  Column,
  Entity,
  ManyToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TimestampEntity } from './timestamp.entity';
import { IngredientEntity } from './ingredient.entity';

@Entity('allergen')
export class AllergenEntity extends TimestampEntity {
  @PrimaryGeneratedColumn()
  allergenId: number;

  @Column({ unique: true })
  name: string;

  @ManyToMany(() => IngredientEntity, (i) => i.allergens)
  ingredients: IngredientEntity[];
}
