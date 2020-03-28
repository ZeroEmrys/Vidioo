import { Controller, Get, Param, Res, Body, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDto } from './dto/category.dto';

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) { }

    @Get('list/category-list') async findAllCategory(
        @Param('limit') limit: number,
        @Param('offset') offset: number,
        @Param('keyword') keyword: string,
        @Param('sortOrder') sortOrder: number,
        @Param('status') status: number,
        @Param('count') count: number | boolean,
        @Res() response: any,
    ): Promise<any> {
        console.log(' ============================= ');
        return null;
    }

    @Get('/list')
    async getAllCategory(){
        return await this.categoryService.getAllCategory();
    }

    @Post()
    async createCategory(@Body() categoryDTO: CategoryDto) {
        console.log("#CATEGORY controller : " + categoryDTO);
        return this.categoryService.create(categoryDTO);
    }
}
