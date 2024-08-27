"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const customer_1 = __importDefault(require("./models/customer"));
const uuid_1 = require("uuid");
const database_1 = __importDefault(require("./database"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const path_1 = __importDefault(require("path"));
(0, database_1.default)();
const sec = process.env.TOKEN_SECRET;
const generateAcessToken = (username) => {
    return jsonwebtoken_1.default.sign({ username }, sec, { expiresIn: '600s' });
};
//require('dotenv').config();
const app = (0, express_1.default)();
const PORT = 3000;
const router = (0, express_1.Router)();
app.use(body_parser_1.default.json());
//app.use(cors());
const corsOptions = {
    origin: '*',
    credential: true
};
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use(express_1.default.static(path_1.default.join(__dirname, '../dist')));
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, 'views', 'index.html'));
});
// auth
router.post('/api/v1/auth', (req, res) => {
    const token = generateAcessToken({ username: req.body.username });
    res.json(token);
});
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) {
        return res.status(401);
    }
    jsonwebtoken_1.default.verify(token, sec, (err, decoded) => {
        if (err) {
            return res.status(403).json({ msg: 'Forbidden', error: err.message });
        }
        req = decoded;
    });
    next();
};
app.use((0, cors_1.default)(corsOptions));
// app.get('/', (req, res) => {
//     res.send("hell yeah")
// })
// mongoose connect 
// mongoose.connect(process.env.MONGODB_URL || '')
// .then(() => console.log('mongoDB 연결 완료'))
// .catch(err => {
//     console.error('mongodb 연결 실패', err)
// })
const randomId = () => {
    return Math.floor(Math.random() * 1000);
};
router.get("/api/v1/customers", authenticateToken, async (req, res) => {
    try {
        const customers = await customer_1.default.find();
        res.json(customers);
    }
    catch (error) {
        console.error('정보 조회 실패', error);
        res.status(500).json({ error: '조회 중 오류 발생' });
    }
});
router.get("/api/v1/customers/:id", async (req, res) => {
    try {
        const customer = await customer_1.default.findOne({ id: req.params.id });
        if (!customer) {
            return res.sendStatus(404);
        }
        res.json(customer);
    }
    catch (error) {
        console.error('정보 조회 실패', error);
        res.status(500).json({ error: '조회 중 오류 발생' });
    }
});
router.post("/api/v1/customers", async (req, res) => {
    const customer = req.body;
    const newCustomer = new customer_1.default({
        id: (0, uuid_1.v4)(),
        name: customer.name,
        address: customer.address,
        email: customer.email
    });
    try {
        const savedCustomer = await newCustomer.save();
        res.status(201).json(savedCustomer);
    }
    catch (error) {
        console.error('정보 저장 실패', error);
        res.status(500).json({ error: 'DB에 정보 저장 실패' });
    }
});
router.put("/api/v1/customer/:id", async (req, res) => {
    try {
        const customer = await customer_1.default.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
        if (!customer) {
            return res.sendStatus(404);
        }
        res.json(customer);
    }
    catch (error) {
        console.error('정보 수정 실패', error);
        res.status(500).json({ error: '정보 수정 중 오류 발생' });
    }
});
router.delete("/api/v1/customers/:id", async (req, res) => {
    try {
        const result = await customer_1.default.findOneAndDelete({ id: req.params.id });
        if (!result) {
            return res.sendStatus(404);
        }
        res.status(200).json({ message: '고객 정보 삭제 완료' });
    }
    catch (error) {
        console.error('정보 삭제 실패', error);
        res.status(500).json({ error: '정보 삭제 중 오류 발생' });
    }
});
app.use(router);
app.listen({ port: PORT }, () => {
    console.log(`localhost:${PORT}에서 실행`);
});
