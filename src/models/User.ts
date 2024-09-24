import { Product } from './Product';




export class User {
  id: string;
  name: string;
  username: string;
  email: string;
  private cart: Product[] = [];

  constructor(id: string, name: string, username: string, email: string) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
  }

  addToCart(product: Product): void {
    this.cart.push(product);
    console.log(`${product.name} foi adicionado ao carrinho de ${this.name}.`);
  }

  removeFromCart(product: Product): void {
    const index = this.cart.indexOf(product);
    if (index > -1) {
      this.cart.splice(index, 1);
      console.log(`${product.name} foi removido do carrinho de ${this.name}.`);
    } else {
      console.log(`${product.name} não está no carrinho.`);
    }
  }

  showProducts(): string {
    return this.cart.length > 0
      ? this.cart.map((p) => p.name).join(", ")
      : "Carrinho vazio";
  }
}
