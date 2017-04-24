import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  id: number;
  hero: Hero;
  constructor(private route: ActivatedRoute, private location: Location, private heroService: HeroService) { }

  ngOnInit() {
    this.route.params.switchMap((params: Params) => {
      return this.heroService.getHero(+params['id']);
    }).subscribe(hero => this.hero = hero);
    // this.route.params.subscribe((params: Params) => {
    //   this.id = +params['id'];
    // });
    // this.heroService.getHero(this.id).then(hero => this.hero = hero);
  }

  goBack() {
    this.location.back();
  }

}
