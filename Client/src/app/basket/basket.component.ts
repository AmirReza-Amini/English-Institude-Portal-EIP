import { basketStatus } from './../model/enum';
import { Component } from '@angular/core';
import { BasketService } from '../services/basket.service';

@Component({
  selector: 'basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {

  basketList = [] // Basket List

  seletedBasketId;
  basketDetailData = [];
  constructor(private basketService: BasketService) {
    basketService.GetBaskets().subscribe(m => this.basketList = m.data);
  }

  GetDetail(basketId) {
    this.basketService.GetDetail(basketId).subscribe(m => this.basketDetailData = m.data);
  }

  GetStatusText(statusCode) {
    return basketStatus.find(m => m.key == statusCode).value;
  }

  SetStatus(value) {
    this.basketService.SetStatus({ status: value, basketId: this.seletedBasketId, userId: 8 })
      .subscribe(m => {
        if (m.result)
          this.basketService.GetBaskets().subscribe(m => this.basketList = m.data);
      });
  }
}
