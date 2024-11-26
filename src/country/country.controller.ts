import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CountryService } from './country.service';
import { Country } from './entities/country.entity';

@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get()
  findAll(): Country[] {
    return this.countryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Country {
    return this.countryService.findOne(id);
  }

  @Post()
  create(@Body() country: Country) {
    this.countryService.create(country);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() country: Country) {
    this.countryService.update(id, country);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    this.countryService.remove(id);
  }
}
