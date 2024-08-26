// import {Customer, Product} from './type'

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
import mongoose, { mongo } from "mongoose"
import dotenv from 'dotenv'

dotenv.config()
const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URL || '');
        console.log('mongoDB 연결 완료')
    } catch (error) {
        console.error('mongoDB 연결 실패', error)
    }
}

export default connectDB;