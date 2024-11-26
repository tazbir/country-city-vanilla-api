import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { Country } from './entities/country.entity';

@Injectable()
export class CountryService {
  private readonly filePath = 'dist/data/countries.json';

  private readFile(): Country[] {
    const data = fs.readFileSync(this.filePath, 'utf8');
    return JSON.parse(data);
  }

  private writeFile(data: Country[]): void {
    fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2));
  }

  findAll(): Country[] {
    return this.readFile();
  }

  findOne(id: number): Country {
    const countries = this.readFile();
    return countries.find((country) => country.id === id);
  }

  create(country: Country): void {
    const countries = this.readFile();
    countries.push(country);
    this.writeFile(countries);
  }

  update(id: number, country: Country): void {
    const countries = this.readFile();
    const index = countries.findIndex((c) => c.id === id);
    if (index !== -1) {
      countries[index] = country;
      this.writeFile(countries);
    }
  }

  remove(id: number): void {
    let countries = this.readFile();
    countries = countries.filter((country) => country.id !== id);
    this.writeFile(countries);
  }
}
