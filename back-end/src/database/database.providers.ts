import * as mongoose from 'mongoose';
import { DB_PROVIDER } from '../constants';

export const databaseProviders = [
    {
        provide: DB_PROVIDER,
        useFactory: async () => {
            (mongoose as any).Promise = global.Promise;
            try {

                const db = await mongoose.connect(
                    'mongodb+srv://Rica:vidio12345@vidio-cluster-vn7kz.mongodb.net/vidioo?retryWrites=true&w=majority'
                    , { useCreateIndex: true, useNewUrlParser: true, useFindAndModify: false }
                );
                console.log('VIDIOO Database is connected .......... ready to use ' );
                return db;
            } catch (e) {
                console.log('error : ', e);
                return null;
            }
        },
    },
];
