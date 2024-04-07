import { AddressEntity } from '@goodfood/entities';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(AddressEntity)
    private readonly addressRepository: Repository<AddressEntity>,
  ) {}

  async createAddress(address: AddressEntity): Promise<AddressEntity> {
    return await this.addressRepository.save(address);
  }

  async setRestaurantId(
    addressId: number,
    restaurantId: number,
  ): Promise<void> {
    await this.addressRepository.update(addressId, {
      restaurant: {
        restaurantId: restaurantId,
      },
    });
  }
}
