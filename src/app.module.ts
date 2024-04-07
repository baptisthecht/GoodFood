import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  AllergenEntity,
  IngredientEntity,
  ProviderEntity,
  MealEntity,
  RestaurantEntity,
  DeliveryManEntity,
  DeliveryTypeEntity,
  EventEntity,
  OrderEntity,
  UserEntity,
  AddressEntity,
  OrderMealEntity,
} from '@goodfood/entities';
import { RestaurantModule } from './restaurant/restaurant/restaurant.module';

@Module({
  imports: [
    RestaurantModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgresql://clupwo79h002r9rul0s40hvsd:J09Sh1c3UHcHo2ftfnjm7VwD@172.233.255.187:9001/clupwo79h002t9rul6kc54lui',
      entities: [
        AllergenEntity,
        IngredientEntity,
        ProviderEntity,
        MealEntity,
        RestaurantEntity,
        DeliveryManEntity,
        DeliveryTypeEntity,
        EventEntity,
        OrderEntity,
        UserEntity,
        AddressEntity,
        OrderMealEntity,
      ],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
