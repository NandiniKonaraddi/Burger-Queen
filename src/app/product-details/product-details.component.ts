import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined
  stars: number[] = [1, 2, 3, 4, 5];
  quantity: number = 1;
  relatedProducts: Product[] = [];
  isAddedToCart: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private location: Location
  ) {}

  ngOnInit() {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.getProductById(productId) || this.productService.getSpecialProductById(productId) ||this.productService.getNewArrivalProductById(productId);
    this.relatedProducts = this.productService.getRelatedProducts(productId) ||this.productService.getSpecialRelatedProducts(productId) ||this.productService.getNewArrivalRelatedProducts(productId);
  }

  addItemToCart() {
    this.isAddedToCart = true;
    this.addToCart()
  }

  addToCart() {
    if (this.product) {
      this.cartService.addToCart(this.product);
    }
  }
  removeCart() {
    if (this.product) {
      this.cartService.removeItem(this.product.id);
    }
  }

  increaseQuantity() {
    this.quantity++;
    this.addToCart()
  }

  decreaseQuantity() {
    if (this.quantity > 1) this.quantity--;
    this.removeCart()
  }

  expandDescription() {
    alert('Show full description logic here.');
  }
  goBack() {
    this.location.back(); 
  }
}
