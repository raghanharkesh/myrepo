import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-productlisting',
  templateUrl: './productlisting.component.html',
  styleUrls: ['./productlisting.component.css'],
})
export class ProductListingComponent implements OnInit {
  products: Product[] = [
    {
      name: 'RASA CABBERNET SAUVIGNON',
      image: '..//../assets/images/1.jpeg',
      flavours: 'Black fruit (blackcurrant, blackberries), olive, vanilla',
      price: '$12,000',
      pricenumber: 12000,
      quantity: 1,
    },
    {
      name: 'RASA SYRAH',
      image: '..//../assets/images/2.jpeg',
      flavours: 'Dark and red berries, vanilla, mocha, spices',
      price: '$12,100',
      pricenumber: 12100,
      quantity: 1,
    },
    {
      name: 'RASA ZINFANDEL',
      image: '..//../assets/images/3.jpeg',
      flavours: 'Plum, blueberry, raspberry, cinnamon',
      price: '$12,200',
      pricenumber: 12200,
      quantity: 1,
    },
    {
      name: 'THE SOURCE MOSCATO',
      image: '..//../assets/images/4.jpeg',
      flavours: 'Expressive notes of citrus, lychee and peach',
      price: '$12,300',
      pricenumber: 12300,
      quantity: 1,
    },
    {
      name: 'THE SOURCE GRENACHE ROSÉ',
      image: '..//../assets/images/5.jpeg',
      flavours: 'Citrus, tropical fruits and white peach',
      price: '$12,400',
      pricenumber: 12400,
      quantity: 1,
    },
    {
      name: 'THE SOURCE CHENIN BLANC RESERVE',
      image: '..//../assets/images/6.jpeg',
      flavours: 'Great notes of pear, pineapple and citrus',
      price: '$12,500',
      pricenumber: 12500,
      quantity: 1,
    },
    {
      name: 'THE SOURCE SAUVIGNON BLANC RESERVE',
      image: '..//../assets/images/7.jpeg',
      flavours: 'Full of tropical and green fruit',
      price: '$12,600',
      pricenumber: 12600,
      quantity: 1,
    },
    {
      name: 'THE SOURCE CABERNET SAUVIGNON',
      image: '..//../assets/images/8.jpeg',
      flavours: 'Cherry, Blackberry, Plum, Chocolate',
      price: '$12,700',
      pricenumber: 12700,
      quantity: 1,
    },
    {
      name: 'THE SOURCE PINOT NOIR',
      image: '..//../assets/images/9.jpeg',
      flavours: 'Raspberry, Cherry, Vanilla',
      price: '$12,800',
      pricenumber: 12800,
      quantity: 1,
    },
    {
      name: 'DINDORI RESERVE VIOGNIER',
      image: '..//../assets/images/10.webp',
      flavours: 'Apricot, Peach, Lychee',
      price: '$12,900',
      pricenumber: 12900,
      quantity: 1,
    },
    {
      name: 'DINDORI RESERVE CHARDONNAY',
      image: '..//../assets/images/11.webp',
      flavours: 'Honey, Lemon, Tropical Fruit, Vanilla',
      price: '$13,000',
      pricenumber: 13000,
      quantity: 1,
    },
    {
      name: 'DINDORI RESERVE SHIRAZ',
      image: '..//../assets/images/12.webp',
      flavours: 'Smoky aromas, vanilla, cherry, red fruit with hints of spices',
      price: '$13,100',
      pricenumber: 13100,
      quantity: 1,
    },
    {
      name: 'TROPICAL ROSE',
      image: '..//../assets/images/13.webp',
      flavours:
        'Aromas of peach and passion fruit with hints of guava at the finish',
      price: '$13,100',
      pricenumber: 13100,
      quantity: 1,
    },
    {
      name: 'SULA BRUT',
      image: '..//../assets/images/14.webp',
      flavours: 'Aromas of apples & pears',
      price: '$13,100',
      pricenumber: 13100,
      quantity: 1,
    },
    {
      name: 'SULA SPARKLING SHIRAZ',
      image: '..//../assets/images/15.webp',
      flavours: 'Pomegranate, dark berries, spices,smoke',
      price: '$13,100',
      pricenumber: 13100,
      quantity: 1,
    },
    {
      name: 'SULA SECO',
      image: '..//../assets/images/16.webp',
      flavours:
        'Hints of ripe fruit, melon & passion fruit on the palate and a citrusy,lingering finish..',
      price: '$13,100',
      pricenumber: 13100,
      quantity: 1,
    },
    {
      name: 'SULA SECO ROSE',
      image: '..//../assets/images/17.jpg',
      flavours: 'A nose full of nectarine, watermelon and soft white fruit',
      price: '$13,100',
      pricenumber: 13100,
      quantity: 1,
    },
    {
      name: 'SULA ZINFADEL ROSE',
      image: '..//../assets/images/18.webp',
      flavours: 'Intense notes of citrus, cranberry & ripe fruits',
      price: '$13,100',
      pricenumber: 13100,
      quantity: 1,
    },
  ];
  showPrompt: boolean = false;
  promptMessage: string = '';

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    this.showPrompt = true;
    this.promptMessage = 'Added to Cart';

    setTimeout(() => {
      this.showPrompt = false;
    }, 2000); // Hide prompt after 2 seconds
  }

  decreaseQuantity(product: Product): void {
    if (product.quantity > 1) {
      product.quantity--;
    }
  }

  increaseQuantity(product: Product): void {
    product.quantity++;
  }
}
