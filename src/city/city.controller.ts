import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CityService } from './city.service';
import { City } from './entities/city.entity';

@Controller('cities')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Get()
  findAll(): City[] {
    return this.cityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): City {
    return this.cityService.findOne(id);
  }

  @Get('country/:countryId')
  findByCountry(@Param('countryId') countryId: number): City[] {
    return this.cityService.findByCountry(countryId);
  }

  @Post()
  create(@Body() city: City) {
    this.cityService.create(city);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() city: City) {
    this.cityService.update(id, city);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    this.cityService.remove(id);
  }
}
