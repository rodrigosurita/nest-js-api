import { Injectable } from "@nestjs/common";
import { Product } from "./product.model";

@Injectable()
export class ProductsService {
    products: Product[] = [
        // new Product('B01', 'JS Book', 29.90),
        // new Product('B02', 'AI Book', 8.90),
        // new Product('B03', 'TS Book', 39.90)
    ];

    getAll(): Product[]{
        return this.products;
    }

    getOne(id: number): Product{
        return this.products[0];
    }

    create(product: Product) {
        this.products.push(product);
    }

    alter(product: Product): Product{
        return product;
    }

    delete(id: number) {
        this.products.pop();
    }
}