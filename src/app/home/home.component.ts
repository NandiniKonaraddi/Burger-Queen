import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    products: Product[] = [];
    specialProduct: Product[] = [];
    newArrivalProducts: Product[] = [];
    cartState: { [key: number]: { isAdded: boolean, quantity: number } } = {}; 

    constructor(private productService: ProductService, private cartService: CartService, private router: Router) {}

    ngOnInit() {
      this.products = this.productService.getProducts();
      this.products.forEach(product => {
        this.cartState[product.id] = { isAdded: false, quantity: 1 };
      });

      this.specialProduct = this.productService.getSpecialProducts();
      this.specialProduct.forEach(product => {
        this.cartState[product.id] = { isAdded: false, quantity: 1 };
      });

      this.newArrivalProducts = this.productService.getNewArrivalProducts();
      this.newArrivalProducts.forEach(product => {
        this.cartState[product.id] = { isAdded: false, quantity: 1 };
      });
    }

    addToCart(product: Product) {
      this.cartService.addToCart(product);
    }

    addItemToCart(product: Product) {
      this.cartState[product.id].isAdded = true;
      this.addToCart(product);
    }

    removeCart(product: Product) {
      this.cartService.removeItem(product.id);
      this.cartState[product.id].isAdded = false;
      this.cartState[product.id].quantity = 1; 
    }

    increaseQuantity(product: Product) {
      this.cartState[product.id].quantity++;
      this.addToCart(product);
    }

    decreaseQuantity(product: Product) {
      if (this.cartState[product.id].quantity > 1) {
        this.cartState[product.id].quantity--;
        this.addToCart(product);
      } else {
        this.removeCart(product);
      }
    }

    navigateToProductDetails(productId: number) {
      this.router.navigate(['/product', productId]);
    }
}
