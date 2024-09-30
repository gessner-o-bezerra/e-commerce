
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
    const avgRating = this.calculateAverageRating();
    const ratingInfo = avgRating !== null ? `, Média de avaliações: ${avgRating.toFixed(1)} / 5` : '';
    return `Produto: ${this.name}, Valor: R$${this.value}${ratingInfo}`;
  }

  comment(comment: Comment, user: User): void {
    this.comments.push(comment);
    console.log(`${user.name} comentou: "${comment.content}" sobre o produto ${this.name}.`);
  }

  rate(rate: number, user: User): void {
    if (rate < 0 || rate > 5) {
      throw new Error('Avaliação inválida! A nota deve ser entre 0 e 5.');
    }
    const rating = new Rating(user.id, rate);
    this.ratings.push(rating);
    console.log(`${user.name} deu a nota ${rate} para o produto ${this.name}.`);
  }

  private calculateAverageRating(): number | null {
    if (this.ratings.length === 0) return null;
    const total = this.ratings.reduce((sum, rating) => sum + rating.rate, 0);
    return total / this.ratings.length;
  }
}
