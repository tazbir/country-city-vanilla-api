import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { City } from './entities/city.entity';

@Injectable()
export class CityService {
  private readonly filePath = 'dist/data/cities.json';

  private readFile(): City[] {
    const data = fs.readFileSync(this.filePath, 'utf8');
    return JSON.parse(data);
  }

  private writeFile(data: City[]): void {
    fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2));
  }

  findAll(): City[] {
    return this.readFile();
  }

  findOne(id: number): City {
    const cities = this.readFile();
    return cities.find((city) => city.id === id);
  }

  findByCountry(countryId: number): City[] {
    const cities = this.readFile();
    return cities.filter((city) => city.countryId === countryId);
  }

  create(city: City): void {
    const cities = this.readFile();
    cities.push(city);
    this.writeFile(cities);
  }

  update(id: number, city: City): void {
    const cities = this.readFile();
    const index = cities.findIndex((c) => c.id === id);
    if (index !== -1) {
      cities[index] = city;
      this.writeFile(cities);
    }
  }

  remove(id: number): void {
    let cities = this.readFile();
    cities = cities.filter((city) => city.id !== id);
    this.writeFile(cities);
  }
}
