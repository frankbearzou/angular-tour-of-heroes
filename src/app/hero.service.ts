import { Injectable } from '@angular/core';
import { Hero } from './hero';

const HEROES: Hero[] = [
  new Hero(11, 'Mr. Nice'),
  new Hero(12, 'Narco'),
  new Hero(13, 'Bombasto'),
  new Hero(14, 'Celeritas'),
  new Hero(15, 'Magneta'),
  new Hero(16, 'RubberMan'),
  new Hero(17, 'Dynama'),
  new Hero(18, 'Dr IQ'),
  new Hero(19, 'Magma'),
  new Hero(20, 'Tornado')
];

@Injectable()
export class HeroService {

  constructor() {}

  getHero(id: number): Promise<Hero> {
    return Promise.resolve(HEROES.find(hero => hero.id === id));
  }

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getTopHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES.slice(0, 5));
  }
}
