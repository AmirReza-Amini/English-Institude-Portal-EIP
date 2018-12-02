import { ProductService } from './../services/product.service';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { productType } from '../model/enum';
import { Tools } from '../Util/Tools';
import { Product } from '../model/productModel';
import { ApiResult } from '../model/ApiResult';
import { HttpEventType, HttpEvent, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [Tools]
})
export class ProductsComponent {

  @ViewChild('imageSelect') myInputVariable: ElementRef;
  product = '';
  fileName: string = 'انتخاب تصویر';
  fileToUpload: File;
  filePath = '../../assets/img/products/not-found.png';
  productList = []
  percentage = ''
  currentProduct: Product = {
    id: 0,
    imageUrl: '',
    userId: 8,
    productType: 0,
    isExist: true,
    title: '',
    price: 0,
    quantity: 0,
    criticalQuantity: 0,
    unitType: 1,
    unit: 'عدد',
    description: '',
    imageFile: null
  };
  showHide = false;

  constructor(public tool: Tools, activatedRoute: ActivatedRoute, private productService: ProductService, router: Router) {
    router.events.subscribe(m => this.Reset());

    activatedRoute.queryParams.subscribe(m => {
      this.product = m.name;
      this.LoadProducts();
    });
  }

  LoadProducts(): any {
    this.productService.GetProduct(productType[this.product])
      .subscribe(m => this.productList = m.data)
  }

  Save() {
    this.currentProduct.imageFile = this.fileToUpload;
    this.currentProduct.productType = productType[this.product];
    this.productService.AddOrUpdate(this.currentProduct).subscribe((m: HttpEvent<any>) => {
      console.log(this.currentProduct);
      if (m.type == HttpEventType.UploadProgress) {
        this.percentage = `${Math.round(100 * m.loaded / m.total)}% Uploaded`;
        console.log(this.percentage);
      }
      else if (m instanceof HttpResponse) {
        this.percentage = `Upload Completed...`;
        console.log(this.percentage);
      }
    });
  }

  Reset() {
    this.currentProduct = {
      id: 0,
      imageUrl: '',
      userId: 8,
      productType: 0,
      isExist: true,
      title: '',
      price: 0,
      quantity: 0,
      criticalQuantity: 0,
      unitType: 1,
      unit: 'عدد',
      description: '',
      imageFile: null
    };
    this.filePath = '../../assets/img/products/not-found.png';
    this.fileName = 'انتخاب تصویر';
    this.showHide = false;
  }

  GoToEditMode(product) {
    this.currentProduct = product;
    this.showHide = true;
  }

  ToggleExist(id) {
    this.productService.ToggleExist(id).subscribe(m => {
      this.ProccessResponse(m);
    })
  }

  Delete(command) {
    if (command) {
      this.productService.Delete(this.currentProduct.id).subscribe(m => {
        this.ProccessResponse(m);
      })
    }
  }

  public ProccessResponse(response: ApiResult) {
    if (response.result) {
      // this.tool.ShowSuccessMsg(this.toast, response.message);
      this.LoadProducts();
      this.Reset();
    }
    // else
    //this.tool.ShowErrMsg(this.toast, response.message)
  }

  public OnFileChanged(files: FileList) {
    this.fileToUpload = files.item(0);
    this.fileName = this.fileToUpload.name;
    this.fileName = this.fileName.substr(0, 10) + ' ' + Math.round(this.fileToUpload.size / 1024) + 'kb';
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.filePath = event.target.result
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  ClearPhoto() {
    this.fileName = 'انتخاب تصویر';
    this.fileToUpload = null;
    this.filePath = '../../assets/img/products/not-found.png';
    this.myInputVariable.nativeElement.value = "";
  }
}
