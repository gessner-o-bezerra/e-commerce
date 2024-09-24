import { commentDataBase } from './dataBase/commentDataBase';
import { productDataBase } from './dataBase/productDataBase';
import { userDataBase } from './dataBase/userDataBase';
import { Comment } from './models/Comment';
import { Product } from './models/Product';
import { User } from './models/User';

const user1 = new User("1", "Maria", "maria123", "maria@example.com");
const user2 = new User("2", "João", "joao456", "joao@example.com");
userDataBase.push(user1, user2);

const product1 = new Product("1", "Notebook", 3500);
const product2 = new Product("2", "Smartphone", 2500);
productDataBase.push(product1, product2);

user1.addToCart(product1);
user1.addToCart(product2);

console.log(user1.showProducts());

user1.removeFromCart(product1);
console.log(user1.showProducts());

const comment1 = new Comment("1", "Ótimo produto!");
product1.comment(comment1, user1);
commentDataBase.push(comment1);

const comment2 = new Comment("2", "Muito caro!");
product2.comment(comment2, user2);
commentDataBase.push(comment2);

product1.rate(5, user1);
product2.rate(3, user2);
