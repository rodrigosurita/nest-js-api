import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { throws } from "assert";
import { timingSafeEqual } from "crypto";
import { Product } from './product.model';

@Controller('products')
export class ProductsController {
    products: Product[] = [
        new Product('B01', 'JS Book', 29.90),
        new Product('B02', 'AI Book', 8.90),
        new Product('B03', 'TS Book', 39.90)
    ];

    @Get()
    getAll(): Product[]{
        return this.products;
    }

    @Get(':id')
    getOne(@Param() params): Product{
        return this.products[0];
    }

    @Post()
    create(@Body() product: Product) {
        product.id = 100;
        this.products.push(product);
    }

    @Put()
    alter(@Body() product: Product): Product{
        return product;
    }

    @Delete(':id')
    delete(@Param() params){
        this.products.pop();
    }

}