"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const livro_1 = __importDefault(require("./models/livro"));
const app = (0, express_1.default)();
const PORT = 3000;
const URL = 'mongodb://localhost:27017/crud_livros';
// Middleware
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.static('public'));
app.use(express_1.default.json());
// Conectar ao MongoDB
mongoose_1.default.connect(URL)
    .then(() => console.log('MongoDB Conectado'))
    .catch(err => console.log('Erro ao conectar ao MongoDB:', err));
// Rota para cadastrar um livro
app.post('/livros', async (req, res) => {
    try {
        const novoLivro = new livro_1.default({
            titulo: req.body.titulo,
            autor: req.body.autor,
            ano: req.body.ano
        });
        const livroSalvo = await novoLivro.save();
        res.status(201).json(livroSalvo); // Certifique-se de retornar o livro cadastrado
    }
    catch (error) {
        res.status(500).json({ message: 'Erro ao cadastrar livro', error });
    }
});
// Rota para listar todos os livros
app.get('/livros', async (req, res) => {
    try {
        const livros = await livro_1.default.find();
        res.json(livros);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao buscar livros' });
    }
});
//Rota para atualizar um livro
app.put("livros/:id", async (req, res) => {
    const { id } = req.params;
    const { titulo, autor, ano } = req.body;
    try {
        const livroAtualizado = await livro_1.default.findByIdAndUpdate(id, { titulo, autor, ano }, { new: true });
        if (!livroAtualizado) {
            return res.status(404).json({ error: "Livro não encontrado " });
        }
        res.json(livroAtualizado);
    }
    catch (error) {
        res.status(400).json({ error: "Erro ao atualizar livro" });
    }
});
// Rota para deletar um livro
app.delete('/livros/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const livroDeletado = await livro_1.default.findByIdAndDelete(id);
        if (!livroDeletado) {
            return res.status(404).json({ error: 'Livro não encontrado' });
        }
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao deletar livro' });
    }
});
//# sourceMappingURL=index.js.map