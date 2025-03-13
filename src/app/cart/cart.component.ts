import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Product[] = [];

  constructor(private cartService: CartService, private location: Location) {}

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

  updateQuantity(product: Product, quantity: number) {
    if (quantity > 0) {
      this.cartService.updateQuantity(product.id, quantity);
      this.cart = this.cartService.getCart();
    }
  }

  removeItem(productId: number) {
    this.cartService.removeItem(productId);
    this.cart = this.cartService.getCart();
  }

  getSubtotal(): number {
    return this.cart.reduce((sum, item) => sum + item.price * (item.quantity ?? 1), 0);
  }

  getDiscount(): number {
    return 56; 
  }

  getTotal(): number {
    return this.getSubtotal() - this.getDiscount();
  }

  buyNow() {
    console.log(JSON.stringify(this.cart));
    alert('Order placed successfully!');
  }

  goBack() {
    this.location.back(); 
  }
}
