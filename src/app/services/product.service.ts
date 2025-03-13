import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: "Cheese Burger",
      price: 389, image: "../../assets/classical-chicken-burger.avif",
      description: 'This is a delicious cheese burger with fresh ingredients,a Cheeseburger features a flame-grilled beef patty topped with melted American cheese, crinkle-cut pickles, mustard, and ketchup, all on a sesame seed bun',
      inStock: true,
    },
    {
      id: 2,
      name: "Chicken Burger",
      price: 289, image: "../../assets/Chicken-Burgers.jpg", 
      description: 'This is a delicious cheese burger with fresh ingredients, a Cheeseburger features a flame-grilled beef patty topped with melted American cheese, crinkle-cut pickles, mustard, and ketchup, all on a sesame seed bun', 
      inStock: true,
    },
  ];
  private specialProducts: Product[] = [
    {
      id: 3,
      name: "Special Cheese Burger",
      price: 489, image: "../../assets/Cheese-Chicken-Burgers-Special.jpg",
      description: 'This is a delicious cheese burger with fresh ingredients,a Cheeseburger features a flame-grilled beef patty topped with melted American cheese, crinkle-cut pickles, mustard, and ketchup, all on a sesame seed bun',
      inStock: true,
    },
    {
      id: 4,
      name: "Special Chicken Burger",
      price: 389, image: "../../assets/Chicken-Burgers-Special.jpg", 
      description: 'This is a delicious cheese burger with fresh ingredients, a Cheeseburger features a flame-grilled beef patty topped with melted American cheese, crinkle-cut pickles, mustard, and ketchup, all on a sesame seed bun', 
      inStock: true,
    },
  ];

  private newArrivalProducts: Product[] = [
    {
      id: 5,
      name: "NewArrival Cheese Burger",
      price: 359, image: "../../assets/Cheese-Chicken-Burgers-NewArrival.jpg",
      description: 'This is a delicious cheese burger with fresh ingredients,a Cheeseburger features a flame-grilled beef patty topped with melted American cheese, crinkle-cut pickles, mustard, and ketchup, all on a sesame seed bun',
      inStock: true,
    },
    {
      id: 6,
      name: "NewArrival Chicken Burger",
      price: 279, image: "../../assets/Chicken-Burgers-NewArrival.jpg", 
      description: 'This is a delicious cheese burger with fresh ingredients, a Cheeseburger features a flame-grilled beef patty topped with melted American cheese, crinkle-cut pickles, mustard, and ketchup, all on a sesame seed bun', 
      inStock: true,
    },
  ];

  getProducts(): Product[] {
    return this.products;
  }
  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }
  getRelatedProducts(id: number): Product[] {
    return this.products.filter(p => p.id !== id);
  }

  getSpecialProducts(): Product[] {
    return this.specialProducts;
  }
  getSpecialProductById(id: number): Product | undefined {
    return this.specialProducts.find(p => p.id === id);
  }
  getSpecialRelatedProducts(id: number): Product[] {
    return this.specialProducts.filter(p => p.id !== id);
  }

  getNewArrivalProducts(): Product[] {
    return this.newArrivalProducts;
  }
  getNewArrivalProductById(id: number): Product | undefined {
    return this.newArrivalProducts.find(p => p.id === id);
  }
  getNewArrivalRelatedProducts(id: number): Product[] {
    return this.newArrivalProducts.filter(p => p.id !== id);
  }
  }
