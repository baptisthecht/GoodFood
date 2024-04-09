import { AddressEntity, RestaurantEntity } from '@goodfood/entities';
import { HttpException, Inject, Injectable, forwardRef } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddRestaurantDto } from './dto/addRestaurant.dto';
import { AddressService } from 'src/common/address/address.service';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectRepository(RestaurantEntity)
    private readonly restaurantRepository: Repository<RestaurantEntity>,
  ) {}

  async getOne(id: number): Promise<RestaurantEntity> {
    const restaurant = await this.restaurantRepository.findOne({
      where: { restaurantId: id },
    });
    if (!restaurant) {
      throw new HttpException('Restaurant not found', 404);
    }
    return restaurant;
  }

  async getByCity(city: string): Promise<RestaurantEntity[]> {
    return this.restaurantRepository.find({
      where: {
        address: {
          city,
        },
      },
      relations: ['address', 'meals', 'meals.ingredients'],
    });
  }

  async findAll(): Promise<RestaurantEntity[]> {
    return this.restaurantRepository.find({
      relations: ['address', 'meals', 'meals.ingredients'],
    });
  }

  async createRestaurant(dto: AddRestaurantDto): Promise<RestaurantEntity> {
    const restaurant = this.restaurantRepository.create({
      type: dto.type,
      name: dto.name,
      isActive: false,
      address: {
        number: dto.adressNumber,
        street: dto.adressStreet,
        city: dto.adressCity,
        zipCode: dto.adressZipCode,
        country: dto.adressCountry,
        locationX: dto.adressLocationX,
        locationY: dto.adressLocationY,
      },
      activeDeliveryTypes: [
        {
          basePrice: 0,
          name: 'Delivery',
          priceByKm: 0,
        },
      ],
    });
    return this.restaurantRepository.save(restaurant);
  }
}
