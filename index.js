import express from 'express';


const app = express();
//configurar aplicação para receber os dados do form
app.use(express.urlencoded({ extended: true }));

const porta = 3000;
const host = '0.0.0.0';

var listaProduto = [];//Lista para armazenar alunos cadastrados


function cadastroProdutoView(req, resp) {
    resp.send(`
            <html>
                <head>
                    <title>Cadastro de Produtos</title>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
                    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #e3f2fd; /* Azul claro */
            color: #343a40;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }

        .container {
            max-width: 800px;
            background: #ffffff;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            border: 2px solid #1976d2; /* Azul escuro para borda */
            background-color: #eaf4fb; /* Azul bem claro dentro do formulário */
        }

        h1 {
            font-size: 2rem;
            color: #1976d2; /* Azul escuro */
            margin-bottom: 20px;
        }

        .form-label {
            font-weight: bold;
            color: #1976d2; /* Azul escuro */
        }

        .form-control, .form-select {
            border-radius: 5px;
            padding: 10px;
            border: 1px solid #1976d2; /* Azul escuro para inputs */
            background-color: #ffffff;
        }

        .input-group-text {
            background-color: #1976d2; /* Azul escuro */
            color: #ffffff;
            border-radius: 5px 0 0 5px;
            border-right: 0;
        }

        .btn-primary {
            background-color: #1976d2; /* Azul escuro */
            border-color: #1976d2;
            border-radius: 5px;
            padding: 10px 20px;
            font-size: 1rem;
        }

        .btn-primary:hover {
            background-color: #1565c0; /* Azul ainda mais escuro no hover */
            border-color: #1565c0;
        }
    </style>
                </head>
                <body>
                    <div class="container text-center   ">
                        <h1 class="mb-3">Cadastro de Produtos</h1>
                        <form method="POST" action="/cadastrarProduto" class="border p-3 row g-3" novalidate>
                            <div class="col-md-4">
                                <label for="nomeProduto" class="form-label">Nome Produto</label>
                                  <input type="text" class="form-control" id="nomeProduto" name="nomeProduto" placeholder="Digite seu nome">
                             </div>
                            <div class="col-md-4">
                                <label for="Categoria" class="form-label">Categoria</label>
                                    <input type="text" class="form-control" id="Categoria" name="Categoria" required>
                            </div>
                            <div class="col-md-4">
                                <label for="Código" class="form-label">Código</label>
                                <div class="input-group has-validation">
                                    <span class="input-group-text" id="inputGroupPrepend"></span>
                                    <input type="text" class="form-control" id="Código" name="Código" required>
                                </div>
                            </div>   
                             <div class="col-md-6">
                                 <label for="Modelo" class="form-label">Modelo</label>
                                    <input type="text" class="form-control" id="Modelo" name="Modelo" required>
                            </div>
                             <div class="col-md-3">
                                <label for="Cor" class="form-label">Cor</label>
                                <select class="form-select" id="Cor" name="Cor" required>
                                    <option selected disabled value="">Escolha...</option>
                                    <option value="red">Vermelho</option>
                                    <option value="green">Verde</option>
                                    <option value="blue">Azul</option>
                                    <option value="yellow">Amarelo</option>
                                    <option value="purple">Roxo</option>
                            </select>
                            </div>
                            <div class="col-md-3">
                                <label for="Cep" class="form-label">Cep</label>
                                <input type="text" class="form-control" id="Cep" name="Cep" required>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-primary" type="submit">Cadastrar</button>
                            </div>
                            </form>
                            </div>
                 <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
                </body>
            </html>
        
        
        `);

}

function menuView(res, resp) {
    resp.send(`
         <html>
                <head>
                    <title>Cadastro de Produtos</title>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
                </head>
                <body>
                    <nav class="navbar navbar-expand-lg bg-body-tertiary">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#">MENU</a>
                            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <a class="nav-link active" aria-current="page" href="/cadastrarProduto">cadastrar Produto</a>
                            </div>
                            </div>
                        </div>
                        </nav>
                        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
                    </body>
                        </html>
        `)
}

function cadastrarProduto(req, resp) {
    const nomeProduto = req.body.nomeProduto;
    const Categoria = req.body.Categoria;
    const Código = req.body.Código;
    const Modelo = req.body.Modelo;
    const Cor = req.body.Cor;
    const Cep = req.body.Cep;

   

    if (nomeProduto && Categoria && Código && Modelo && Cor && Cep) {

        const Produto = { nomeProduto, Categoria, Código, Modelo, Cor, Cep };

        listaProduto.push(Produto);
        resp.write(`
        <html>
            <head>
                <title>Lista de Produtos</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
                <meta charset="utf-8">
            </head>    
            <body>
                     <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col"> nomeProduto</th>
                                <th scope="col"> Categoria</th>
                                <th scope="col"> Código</th>
                                <th scope="col"> Modelo</th>
                                <th scope="col"> Cor</th>
                                <th scope="col"> Cep</th>
                            </tr>
                            </thead>
                            <tbody>`);
        //para cada produto, devemos criar uma linha na tabela
        for (var i = 0; i < listaProduto.length; i++) {
            resp.write(`<tr>
                                                <td>${listaProduto[i].nomeProduto}</td>
                                                <td>${listaProduto[i].Categoria}</td>
                                                <td>${listaProduto[i].Código}</td>
                                                <td>${listaProduto[i].Modelo}</td>
                                                <td>${listaProduto[i].Cor}</td>
                                                <td>${listaProduto[i].Cep}</td>
                                                
                                            </tr>
                                    `)
        }
        resp.write(`</tbody>
                     </table>
                     <a class="btn btn-primary" href="/cadastrarProduto">Continuar Cadastrando</a>
                     <a class="btn btn-secondary" href="/">Voltar para o Menu</a>
                 <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
            </body>
        </html> 
        `);
    }//fim do if de validação

    else{
        resp.write(`
            <html>
                <head>
                    <title>Cadastro de Produtos</title>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
                    <meta charset="utf-8">
                    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #e3f2fd; /* Azul claro */
            color: #343a40;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }

        .container {
            max-width: 800px;
            background: #ffffff;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            border: 2px solid #1976d2; /* Azul escuro para borda */
            background-color: #eaf4fb; /* Azul bem claro dentro do formulário */
        }

        h1 {
            font-size: 2rem;
            color: #1976d2; /* Azul escuro */
            margin-bottom: 20px;
        }

        .form-label {
            font-weight: bold;
            color: #1976d2; /* Azul escuro */
        }

        .form-control, .form-select {
            border-radius: 5px;
            padding: 10px;
            border: 1px solid #1976d2; /* Azul escuro para inputs */
            background-color: #ffffff;
        }

        .input-group-text {
            background-color: #1976d2; /* Azul escuro */
            color: #ffffff;
            border-radius: 5px 0 0 5px;
            border-right: 0;
        }

        .btn-primary {
            background-color: #1976d2; /* Azul escuro */
            border-color: #1976d2;
            border-radius: 5px;
            padding: 10px 20px;
            font-size: 1rem;
        }

        .btn-primary:hover {
            background-color: #1565c0; /* Azul ainda mais escuro no hover */
            border-color: #1565c0;
        }
    </style>
                </head>
                <body>
                    <div class="container text-center   ">
                        <h1 class="mb-3">Cadastro de Produtos</h1>
                        <form method="POST" action="/cadastrarProduto" class="border p-3 row g-3" novalidate>
                            <div class="col-md-4">
                                <label for="nomeProduto" class="form-label">Nome Produto</label>
                                  <input type="text" class="form-control" id="nomeProduto" name="nomeProduto" placeholder="Digite seu nome" valeu="${nomeProduto}">
            `);
            if(!nomeProduto){
                resp.write(`
                    <div>
                        <span><p>Nome obrigatório</p></span>
                    `)
            }
            resp.write(`
                <div class="col-md-4">
                                <label for="Categoria" class="form-label">Categoria</label>
                                    <input type="text" class="form-control" id="Categoria" name="Categoria" value="${Categoria}>
                            `)
            if(!Categoria){
                resp.write(`
                    <div>
                        <span><p>Categoria obrigatória</p></span>
                    `)
            }
            resp.write(`
                    <div class="col-md-4">
                                <label for="Código" class="form-label">Código</label>
                                <div class="input-group has-validation">
                                    <span class="input-group-text" id="inputGroupPrepend"></span>
                                    <input type="text" class="form-control" id="Código" name="Código" valeu=${Código}>                        
                `)
            if(!Código){
                resp.write(`
                        <div>
                        <span><p>Código obrigatório</p></span>
                    `)
            }
            resp.write(`
                        <div class="col-md-6">
                                 <label for="Modelo" class="form-label">Modelo</label>
                                    <input type="text" class="form-control" id="Modelo" name="Modelo" value=${Modelo}>
                            `)
            if(!Modelo){
                resp.write(`
                        <div>
                        <span><p>Modelo obrigatório</p></span>
                    `)
            }
            resp.write(`
                        <div class="col-md-3">
                                <label for="Cor" class="form-label">Cor</label>
                                <select class="form-select" id="Cor" name="Cor"> value=${Cor}`)
                                const cores = [
                                    { nome: "Vermelho", valor: "red" },
                                    { nome: "Verde", valor: "green" },
                                    { nome: "Azul", valor: "blue" },
                                    { nome: "Amarelo", valor: "yellow" },
                                    { nome: "Roxo", valor: "purple" }
                                ];
                                
                                for (let cor of cores) {
                                    if (Cor !== cor.nome) {
                                        resp.write(`<option selected value="${cor.valor}">${cor.nome}</option>`);
                                    } else {
                                        resp.write(`<option value="${cor.valor}">${cor.nome}</option>`);
                                    }
                                }
            resp.write(`</select>
                
                <div class="col-md-3">
                                <label for="Cep" class="form-label">Cep</label>
                                <input type="text" class="form-control" id="Cep" name="Cep" value=${Cep}>
                            `)
            if(!Cep){
                resp.write(`</div>
                    <div>
                    <span><p>CEP obrigatório</p></span>
                `)
            }
            resp.write(`</div>
                            <div class="col-12">
                                <button class="btn btn-primary" type="submit">Cadastrar</button>
                            </div>
                            </form>
                            </div>
                 <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
                </body>
            </html>`)                   

    }//else da validação

    resp.end();//será enviada a resposta
}

app.get('/', menuView);
app.get('/cadastrarProduto', cadastroProdutoView);

app.post('/cadastrarProduto', cadastrarProduto);

app.listen(porta, host, () => {
    console.log(`Servidor iniciado e em execução no endereço http//${host}:${porta}`);
});

//Iniciando Atividade2PPI