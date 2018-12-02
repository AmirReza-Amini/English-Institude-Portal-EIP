import { Component, Input, OnChanges } from '@angular/core';
import { BasketService } from '../../services/basket.service';

@Component({
  selector: 'basket-detail',
  templateUrl: './basket-detail.component.html',
  styleUrls: ['./basket-detail.component.css']
})
export class BasketDetailComponent implements OnChanges {

  @Input() modalId;
  @Input() title;
  @Input() basketId;
  basketDetail = [];
  total = 0
  constructor(private basketService: BasketService) {
  }

  ngOnChanges() {
    this.basketDetail = [];
    this.basketService.GetDetail(this.basketId).subscribe(m => {
      this.basketDetail = m.data;

      var sum = m.data.reduce((sum, current) => {
        return sum + current.totalPrice;
      }, 0
      );
      this.total = sum;
    });
  }
}
