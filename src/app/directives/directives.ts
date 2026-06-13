import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  imports: [CommonModule],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {

  // Conditional Statements example
  isLoggedIn = true;
  userRole = 'editor';

  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }


  // Arrays for for loop directive:
  products = [
    { id: 1, name: 'Laptop', price: 999, isStock: true },
    { id: 2, name: 'Mouse', price: 25, isStock: true },
    { id: 3, name: 'Keyboard', price: 75, isStock: false },
    { id: 4, name: 'Monitor', price: 299, isStock: true },
    { id: 5, name: 'Headphone', price: 89, isStock: false },
  ];

  addProduct(){
    const newId = this.products.length + 1;
    this.products.push({  // add new item to array
      id: newId,
      name: `Product ${newId}`,
      price: Math.floor(Math.random() * 500) * 10,
      isStock: true
    });
  }

  removeProduct(id: number){ // filter last item
    this.products = this.products.filter(p => p.id != id);
  }

}
