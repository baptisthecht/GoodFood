import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { SpecialityEnum } from './enums/speciality.enum';
import { TimestampEntity } from './timestamp.entity';
import { AddressEntity } from './address.entity';
import { OrderEntity } from './order.entity';

@Entity('user')
export class UserEntity extends TimestampEntity {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  phone: string;

  @Column('varchar', { array: true, nullable: true })
  interests: SpecialityEnum[];

  @OneToMany(() => AddressEntity, (address) => address.user)
  addresses: AddressEntity[];

  @OneToMany(() => OrderEntity, (order) => order.user)
  orders: OrderEntity[];
}
