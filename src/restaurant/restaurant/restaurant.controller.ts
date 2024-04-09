import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiBody, ApiQuery, ApiTags } from '@nestjs/swagger';
import { RestaurantService } from './restaurant.service';
import { RestaurantEntity } from '@goodfood/entities';
import { AddRestaurantDto } from './dto/addRestaurant.dto';

@Controller('restaurant')
@ApiTags('restaurant')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Get('all')
  async findAll(): Promise<RestaurantEntity[]> {
    return this.restaurantService.findAll();
  }

  @Get()
  @ApiQuery({ name: 'id', required: true })
  async getOne(@Query('id') id: number): Promise<RestaurantEntity> {
    return this.restaurantService.getOne(id);
  }

  @Get('getByCity')
  @ApiQuery({ name: 'city', required: true })
  async getByCity(@Query('city') city: string): Promise<RestaurantEntity[]> {
    return this.restaurantService.getByCity(city);
  }

  @Post('create')
  @ApiBody({ type: AddRestaurantDto, required: true })
  async createRestaurant(
    @Body() dto: AddRestaurantDto,
  ): Promise<RestaurantEntity> {
    return this.restaurantService.createRestaurant(dto);
  }
}
