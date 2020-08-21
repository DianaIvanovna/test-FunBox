import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

interface Card{
  apptitle: string,
  title: string,
  downtitle: string,
  description: string,
  img: string,
  weight: string,
  condition: string,
}

@Component({
  selector: 'app-cat-food',
  templateUrl: './cat-food.component.html',
  styleUrls: ['./cat-food.component.scss']
})
export class CatFoodComponent implements OnInit {
  @Input() card:Card;
  @ViewChild('backgroundCard', {static: true}) backgroundCard:ElementRef;
  @ViewChild('weightCard', {static: true}) weightCard:ElementRef;
  @ViewChild('footerCard', {static: true}) footerCard:ElementRef;
  @ViewChild('unavailableCard', {static: true}) unavailableCard:ElementRef;
  inBasket:boolean;
  constructor() {
  }
  ngOnInit(): void {
    this.inBasket = false;
    if (this.card.condition === 'Disabled'){ // корма нет в наличие
      this.backgroundCard.nativeElement.classList.add('card__background_disabled');
      this.weightCard.nativeElement.classList.add('card__weight_disabled');
      this.footerCard.nativeElement.textContent = `Печалька, ${this.card.downtitle} закончился`;
      this.footerCard.nativeElement.classList.add('card__footer_disabled');
      this.unavailableCard.nativeElement.classList.add('card__unavailable_active');
    }
  }
  buyFood(){
    if (this.inBasket === false){
      this.backgroundCard.nativeElement.classList.remove('card__background_default');
      this.weightCard.nativeElement.classList.remove('card__weight_default');
      this.backgroundCard.nativeElement.classList.add('card__background_selected');
      this.weightCard.nativeElement.classList.add('card__weight_selected');
      this.footerCard.nativeElement.textContent = `Головы щучьи с чесноком да свежайшая сёмгушка.`;
    } else {
      this.backgroundCard.nativeElement.classList.remove('card__background_selected');
      this.weightCard.nativeElement.classList.remove('card__weight_selected');
      this.backgroundCard.nativeElement.classList.add('card__background_default');
      this.weightCard.nativeElement.classList.add('card__weight_default');
      this.footerCard.nativeElement.innerHTML='Чего сидишь? Порадуй котэ, <span class="card__buy" (click)="buyFood()">купи</span>.';
      //не могу понять, класс card__buy есть, а его стили не применяются.. незабудь спросить
    }
    this.inBasket = !this.inBasket;
  }

}
