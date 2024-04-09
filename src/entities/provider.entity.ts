import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
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
  @JoinTable({ name: 'providerIngredient' })
  ingredients: IngredientEntity[];
}
