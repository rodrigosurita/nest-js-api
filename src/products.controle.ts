import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { throws } from "assert";
import { timingSafeEqual } from "crypto";
import { Product } from './product.model';
import { ProductsService } from "./products.service";

@Controller('products')
export class ProductsController {

    constructor(private productsService: ProductsService){}

    @Get()
    getAll(): Product[]{
        return this.productsService.getAll();
    }

    @Get(':id')
    getOne(@Param() params): Product{
        return this.productsService.getOne(params.id)
    }

    @Post()
    create(@Body() product: Product) {
        this.productsService.create(product);
    }

    @Put()
    alter(@Body() product: Product): Product{
        return this.productsService.alter(product);
    }

    @Delete(':id')
    delete(@Param() params){
        this.productsService.delete(params.id);
    }

}