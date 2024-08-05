import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(): void {
    this.cartItems = this.cartService.getCart();
    this.calculateTotalPrice();
    // this.cdr.detectChanges();
  }

  removeItem(product: Product): void {
    this.cartService.removeFromCart(product);
    this.loadCart();
    //  this.cdr.detectChanges();
  }

  calculateTotalPrice(): void {
    this.totalPrice = this.cartService.getTotalPrice();
  }
}
