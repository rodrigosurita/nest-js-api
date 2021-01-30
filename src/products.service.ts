import { Product } from "./product.model";

export class ProductsService {
    products: Product[] = [
        new Product('B01', 'JS Book', 29.90),
        new Product('B02', 'AI Book', 8.90),
        new Product('B03', 'TS Book', 39.90)
    ];
}