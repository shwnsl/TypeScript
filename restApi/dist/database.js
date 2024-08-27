"use strict";
// import {Customer, Product} from './type'
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const customers: Customer[] = [
//     {id:"1", name:'kim', address:'seoul', email: 'sdasd@sdfasd.com',description: '병신'},
//     {id:"2", name:'lee', address:'paris', email: 'sdasd@sdfasd.com',description: '쓰레기'},
//     {id:"3", name:'park', address:'madrid', email: 'sdasd@sdfasd.com',description: '호구'},
// ]
// const products: Product[] = [
//     {id:1, name: 'pr1', description: 'pr1', price: 2000},
//     {id:2, name: 'pr2', description: 'pr2', price: 3000},
//     {id:3, name: 'pr3', description: 'pr3', price: 4000},
// ]
// const dataBaseA = {
//     customers,
//     products
// }
// export default dataBaseA;
//mongoDB
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const connectDB = async () => {
    try {
        await mongoose_1.default.connect(process.env.MONGODB_URL || '');
        console.log('mongoDB 연결 완료');
    }
    catch (error) {
        console.error('mongoDB 연결 실패', error);
    }
};
exports.default = connectDB;
