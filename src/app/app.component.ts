import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cards = [{
    apptitle: 'Сказочное заморское яство',
    title: 'Нямушка',
    downtitle: 'с фуа-гра' ,
    description: `10 порций
    мышь в подарок`,
    img: '',
    weight: '0,5',
    condition: 'Available', // корм есть в наличие
  },
  {
    apptitle: 'Котэ не одобряет?',
    title: 'Нямушка',
    downtitle: 'с рыбой' ,
    description: `40 порций
    2 мыши в подарок`,
    img: '',
    weight: '2',
    footer: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
    condition: 'Available', // корм есть в наличие
  },
  {
    apptitle: 'Сказочное заморское яство',
    title: 'Нямушка',
    downtitle: 'с курой' ,
    description: `100 порций
    5 мышей в подарок
    заказчик доволен`,
    img: '',
    weight: '5',
    footer: 'Печалька, с курой закончился.',
    condition: 'Disabled', // корма нет в наличие
  }]
}
