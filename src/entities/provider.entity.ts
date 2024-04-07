import {
  Column,
  Entity,
  ManyToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IngredientEntity } from './ingredient.entity';
import { TimestampEntity } from './timestamp.entity';

@Entity('provider')
export class ProviderEntity extends TimestampEntity {
  @PrimaryGeneratedColumn()
  providerId: number;

  @Column({ unique: true })
  name: string;

  @Column()
  address: string;

  @ManyToMany(() => IngredientEntity, (ingredient) => ingredient.providers)
  ingredients: IngredientEntity[];
}
