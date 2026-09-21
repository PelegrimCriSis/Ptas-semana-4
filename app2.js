import express from 'express';

const app = express();

const produtos = [
    { id: 1, nome: 'Picanha', categoria: 'alimento' },
    { id: 2, nome: 'Teclado', categoria: 'eletronico' },
    { id: 3, nome: 'Mouse', categoria: 'eletronico' },
    { id: 4, nome: 'Arroz', categoria: 'alimento' }
];

app.get('/produtos/:id', (req, res) => {

    const id = Number(req.params.id);

    const produto = produtos.find(produto => produto.id === id);

    if (!produto) {
        return res.status(404).send('Produto não encontrado');
    }

    res.json(produto);
});

app.get('/produtos', (req, res) => {

    const categoria = req.query.categoria;

    const resultado = produtos.filter(produto =>
        produto.categoria === categoria
    );

    res.json(resultado);
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
}); 