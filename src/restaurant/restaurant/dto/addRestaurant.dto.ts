import { SpecialityEnum } from '@goodfood/enums';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class AddRestaurantDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  adressNumber: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  adressStreet: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  adressCity: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  adressZipCode: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  adressCountry: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  adressLocationX: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  adressLocationY: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsEnum(SpecialityEnum)
  type: SpecialityEnum;
}
