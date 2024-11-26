import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountryModule } from './country/country.module';
import { StateModule } from './state/state.module';
import { CityModule } from './city/city.module';

@Module({
  imports: [CountryModule, StateModule, CityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
