import { Module } from '@nestjs/common';
import { RestaurantController } from './restaurant.controller';
import { RestaurantService } from './restaurant.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressEntity, RestaurantEntity } from '@goodfood/entities';
import { AddressModule } from 'src/common/address/address.module';

@Module({
  imports: [
    AddressModule,
    TypeOrmModule.forFeature([RestaurantEntity, AddressEntity]),
  ],
  controllers: [RestaurantController],
  providers: [RestaurantService],
})
export class RestaurantModule {}
