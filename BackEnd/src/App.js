import 'dotenv/config.js'
import express from 'express'
import cors from 'cors'
import adicionarRotas from './Rotas.js';

import '../src/controller/utils/global.js'

const api = express();
api.use(express.json());
api.use(cors());

adicionarRotas(api);

const PORTA = process.env.PORTA;

api.listen(PORTA, () => console.log('Conectado ao Banco de Dados! Porta: ' + PORTA));