import express from 'express';

const app = express();

const porta = 3000;

const produtos = [
    {id: 1, nome: 'Salame de mexilhão grelhado a vapor'},
    {id: 2, nome: 'Carne de dragão de komodo imbuido a uma armadura medieval'},
    {id: 3, nome: 'Ps5 Feita a base de carvão vegetal'}
];

app.get('/produtos/id:', (req, res) => {
    const id = Number(req.params.id);

    const produto =  produtos.find(produto => produto.id === id);
    
    if(!produto){
        return res.statusCode(400).send('Produto não encontrado');
    }
    res.json(produto);
});

    app.listen(3000, () => {
        console.log(`Servidor Funcionando em http://localhost:${3000}`);
    });
