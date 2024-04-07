import { CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from 'typeorm';

export class TimestampEntity {
  @UpdateDateColumn({
    update: true,
    select: false,
  })
  updatedAt: Date;

  @CreateDateColumn({
    select: false,
    update: false,
  })
  createdAt: Date;
}
