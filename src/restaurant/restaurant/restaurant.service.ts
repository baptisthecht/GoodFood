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
    @InjectRepository(AddressEntity)
    private readonly addressRepository: Repository<AddressEntity>,
    private readonly addressService: AddressService,
  ) {}

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
    // REMPLACER PAR UN DTO
    const newAddress = this.addressRepository.create({
      number: dto.adressNumber,
      city: dto.adressCity,
      zipCode: dto.adressZipCode,
      street: dto.adressStreet,
      country: dto.adressCountry,
      locationX: dto.adressLocationX,
      locationY: dto.adressLocationY,
    });
    // PASSER LE DTO
    const address = await this.addressService
      .createAddress(newAddress)
      .catch((e) => {
        throw new HttpException(e.message, 502);
      });

    const newRestaurant = this.restaurantRepository.create({
      name: dto.name,
      type: dto.type,
    });

    const restaurant = await this.restaurantRepository
      .save({
        ...newRestaurant,
        address: {
          addressId: address.addressId,
        },
      })
      .catch((e) => {
        throw new HttpException(e.message, 502);
      });

    await this.addressService.setRestaurantId(
      address.addressId,
      restaurant.restaurantId,
    );
    return restaurant;
  }
}
