import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller('products')
export class ProductsController {

    @Get()
    getAll(): string{
        return 'list all products';
    }

    @Get(':id')
    getOne(@Param() params): string{
        return `return data from product ${params.id}`;
    }

    @Post()
    create(@Body() product): string{
        console.log(product);
        
        return 'product created';
    }

    @Put()
    alter(@Body() product): string{
        console.log(product);
        
        return 'product updated';
    }

    @Delete(':id')
    delete(@Param() params): string{
        return `delete product ${params.id}`;
    }

}