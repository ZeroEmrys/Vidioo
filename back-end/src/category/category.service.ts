import { CATEGORY_MODEL_PROVIDER } from './../constants';
import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { CategoryInterface } from './interfaces/category.interface';
import { CategoryDto } from './dto/category.dto';

@Injectable()
export class CategoryService {
    constructor(
        @Inject(CATEGORY_MODEL_PROVIDER)
        private readonly categoryModel: Model<CategoryInterface>,
    ) { }

    public list(
        limit: any,
        offset: any,
        select: any = [],
        search: any = [],
        whereConditions: any = [],
        sortOrder: number,
        count: number | boolean,
    ): Promise<any> {
        const condition: any = {};
        if (select && select.length > 0) {
            condition.select = select;
        }
        condition.where = {};
        if (whereConditions && whereConditions.length > 0) {
            whereConditions.forEach((element: any) => {
                condition.where[element.name] = element.name;
            });
        }

        if (search && search.length > 0) {
            search.forEach((collection: any) => {
                const operator: string = collection.op;
                if (operator === 'where' && collection.value != undefined) {
                    condition.where[collection.name] = collection.value;
                }
                else if (operator === 'like' && collection.value != undefined) {
                    // condition.where[collection.name] = Like('%'+collection.value+'%');
                }

            });
        }

        return null;
    }
    public getCategory(category: any): Promise<any> {
        return this.categoryModel.find(category);
    }

    async getAllCategory(): Promise<CategoryInterface[]> {
        return await this.categoryModel.find().exec();
    }

    async create(categoryDTO: CategoryDto): Promise<CategoryInterface> {
        const categoryCreated = await new this.categoryModel(categoryDTO);
        console.log(' #CATEGORY ... create category ');
        return categoryCreated.save();
    }
}
