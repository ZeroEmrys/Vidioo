import { CategorySchema } from './schemas/category.schema';
import { CATEGORY_MODEL_PROVIDER, DB_PROVIDER } from './../constants';
import { Connection } from 'mongoose';

export const categoryProviders = [
    {
        provide: CATEGORY_MODEL_PROVIDER,
        useFactory: (connection: Connection) => connection.model('category', CategorySchema),
        inject: [DB_PROVIDER],
    },
];
