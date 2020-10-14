import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Product} from '../../../models/product';
import {Category} from '../../../models/category.model';
import {HttpClient} from '@angular/common/http';
import {ServerService} from '../../../server.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  @ViewChild('newProductForm') productForm: NgForm;
  product: Product;

  constructor(private serverService: ServerService) { }

  ngOnInit(): void {
  }

  onSubmit(newProductForm){
    this.product = new Product(
      this.productForm.value.newProductName,
      new Category(this.productForm.value.newProductCategory, 0),
      '',
      this.productForm.value.newProductPrice,
      this.productForm.value.newProductUnit,
      this.productForm.value.newProductAvailability);

    console.log(this.product);

    this.serverService.addProduct(this.product);

    this.productForm.reset();
  }
}
