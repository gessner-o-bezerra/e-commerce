
import { Comment } from './Comment';
import { Rating } from './Rating';
import { User } from './User';

export class Product {
  id: string;
  name: string;
  value: number;
  comments: Comment[] = [];
  ratings: Rating[] = [];

  constructor(id: string, name: string, value: number) {
    this.id = id;
    this.name = name;
    this.value = value;
  }

  show(): string {
    return `${this.name} custa R$${this.value}`;
  }

  showDetails(): string {
    return `Produto: ${this.name}, Valor: R$${this.value}`;
  }

  comment(comment: Comment, user: User): void {
    this.comments.push(comment);
    console.log(`${user.name} comentou: "${comment.content}" sobre o produto ${this.name}.`);
  }

  rate(rate: number, user: User): void {
    const rating = new Rating(user.id, rate);
    this.ratings.push(rating);
    console.log(`${user.name} deu a nota ${rate} para o produto ${this.name}.`);
  }
}
