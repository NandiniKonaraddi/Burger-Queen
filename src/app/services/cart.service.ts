import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Product[] = [];

  getCart(): Product[] {
    return this.cart;
  }

  addToCart(product: Product) {
    let existingItem = this.cart.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity! += 1;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
  }

  updateQuantity(productId: number, quantity: number) {
    let item = this.cart.find(item => item.id === productId);
    if (item) item.quantity = quantity;
  }

  removeItem(productId: number) {
    this.cart = this.cart.filter(item => item.id !== productId);
  }

  clearCart() {
    this.cart = [];
  }
}
