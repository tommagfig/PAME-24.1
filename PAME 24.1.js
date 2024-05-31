class Pedido{ //Cria uma classe chamada Pedido.
    constructor (ID_unico, ID_do_cliente, status , data_do_pedido, avaliacao){ //Essa classe recebe esses atributos.
        this.ID_unico = ID_unico
        this.ID_do_cliente = ID_do_cliente
        this.ID_status = status
        this.data_do_pedido = data_do_pedido
        this.avaliacao = avaliacao 
    }
}

class Funcionario{ //Cria uma outra classe chamada Funcionario
    constructor (ID_unico, nome_de_usuario, cpf , email, senha){ //Essa classe recebe esses atributos.
        this.ID_unico = ID_unico
        this.nome_de_usuário = nome_de_usuario
        this.cpf = cpf
        this.email = email
        this.senha = senha
   }
   fazer_login(){ //Cria uma função dentro da classe que faz com que o usuário faça login.
        const readlineSync = require('readline-sync'); 
        this.nome_de_usuario = readlineSync.question('Usuário: '); //Pergunta o nome de usuário
        this.senha = readlineSync.question('Senha: '); //Pergunta a senha
   }

   fazer_cadasto(){ //Cria uma função que permite o usuário fazer cadastro
        const readlineSync = require('readline-sync');
        this.nome_de_usuario = readlineSync.question('Usuário: '); //Pede os dados desse usuário.
        this.cpf = readlineSync.question('CPF: ');
        this.email = readlineSync.question('Email: ');
        this.senha = readlineSync.question('Senha: ');
   }

   sair_do_programa(){ //Todos os dados ficam nulos.
        this.ID_unico = null
        this.nome_de_usuário = null
        this.cpf = null
        this.email = null
        this.senha = null
   }

   ver_meus_dados(){ //Função que permite que o usuário veja seus dados.
        console.log("ID único: ", this.ID_unico) //Mostra na tela os dados do usuário.
        console.log("Nome de usuário: ", this.nome_de_usuário)
        console.log("CPF: ", this.cpf) 
        console.log("Email: ", this.email) 
        console.log("Senha: ", this.senha)  
   }

   modificar_meus_dados(){ //Função que modifica os dados
        const readlineSync = require('readline-sync');
        console.log("Nome de usuário antigo: ", this.nome_de_usuário); //Mostra o dado antigo.
        this.nome_de_usuario = readlineSync.question('Novo nome de usuário: '); //Pede o novo dado.
        console.log("CPF antigo: ", this.cpf);
        this.cpf = readlineSync.question('Novo CPF: ');
        console.log("Email antigo: ", this.email) 
        this.email = readlineSync.question('email: ');
        console.log("Senha antiga: ", this.senha);
        this.senha = readlineSync.question('Nova senha: ');
   }

   ver_lista_pedidos(){ //Função que mostra a lista de pedidos em ordem cronológica.
        const lista_pedidos = []; //Cria uma lista vazia.
        for(const pedido of Pedido){ //Cria um loop usando "for" para adicionar cada pedido na lista.
            lista_pedidos.push(pedido);
        lista_pedidos.sort((a, b) => a[3] - b[3]); //Ordena de acaordo com a data do pedido.
        console.log(lista_pedidos) //Mostra a lista ordenada.
        }
   }

   ver_lista_produtos(){ //Faz o mesmo que a função "ver_lista_pedidos" mas para produtos.
        const lista_produtos = [];
        for(const produto of Produtos){
            lista_produtos.push(produto);
        lista_pedidos.sort((a, b) => a[1] - b[1]); //Ordena de acordo com a ordem alfabética.
        console.log(lista_produtos)
        }
    }

    ver_lista_clientes(){ //Faz o mesmo que a função "ver_lista_produtos", porém para os clientes.
        const lista_clientes = [];
        for(const cliente of Cliente){
            lista_clientes.push(cliente);
        lista_pedidos.sort((a, b) => a[1] - b[1]); //Ordena de acordo com a ordem alfabética.
        console.log(lista_clientes)
        }
   }

   mudar_status_pedido(){ //Muda o status do pedido.
        console.log("Antigo status: ", Pedido.status); //Mostra o antigo status.
        console.log("Opções: pendente, adiado, realizado, cancelado") //Mostra as opções
        Pedido.status = readlineSync.question('Nova status: '); //Pede o novo status.
   }

   adicionar_produto(){ //Adiciona um produto.
        const novo_produto = new Produtos(readlineSync.question('Quantidade no estoque: '), //Cria um novo produto com seus atributos.
        readlineSync.question('Nome: '), readlineSync.question('Data de validade: '),
        readlineSync.question('Preço: '), readlineSync.question('Descrição: '));
   }

   editar_produto(){ //Edita os dados do produto.
    console.log("Antiga quantidade no estoque: ", Produtos.quantidade_no_estoque); //Mostra o dado antigo.
    Produtos.quantidade_no_estoque = readlineSync.question('Nova quantidade: '); // Pede o novo dado.
    console.log("Antigo nome: ", Produtos.nome)
    Produtos.nome = readlineSync.question('Novo nome: ');
    console.log("Antiga data de validade: ", Produtos.data_de_validade)
    Produtos.data_de_validade = readlineSync.question('Nova data de validade: ');
    console.log("Antigo preço: ", Produtos.preco)
    Produtos.preco = readlineSync.question('Novo preço: ');
    console.log("Antiga descrição: ", Produtos.descricao)
    Produtos.descricao = readlineSync.question('Nova descrição: ');
   }

   excluir_produto(){ //Exclui o produto
    delete(Produtos)
   }
}

class Cliente{ //Cria a classe Cliente e adiciona seus atributos
    constructor (ID_unico, nome, data_de_nascimento , cpf, email, senha){
        this.ID_unico = ID_unico
        this.nome = nome
        this.data_de_nascimento = data_de_nascimento
        this.cpf = cpf
        this.email = email
        this.senha = senha
   }

   fazer_login(){
        const readlineSync = require('readline-sync');
        this.nome= readlineSync.question('Nome: ');
        this.senha = readlineSync.question('Senha: ');
   }

   fazer_cadrasto(){
        const readlineSync = require('readline-sync');
        this.nome = readlineSync.question('Nome: ');
        this.cpf = readlineSync.question('CPF: ');
        this.data_de_nascimento = readlineSync.question('Data de nascimento: ');
        this.email = readlineSync.question('Email: ');
        this.senha = readlineSync.question('Senha: ');
   }
   sair_do_programa(){
        this.ID_unico = null;
        this.nome = null;
        this.data_de_nascimento = null;
        this.cpf = null;
        this.email = null;
        this.senha = null;
   }

   ver_meus_dados(){
        console.log("ID único: ", this.ID_unico)
        console.log("Nome: ", this.nome)
        console.log("Data de nascimento: ", this.data_de_nascimento)
        console.log("CPF: ", this.cpf) 
        console.log("Email: ", this.email) 
        console.log("Senha: ", this.senha)  
    }

    modificar_meus_dados(){
        const readlineSync = require('readline-sync');
        console.log("Nome antigo: ", this.nome);
        this.nome_de_usuario = readlineSync.question('Novo nome de usuário: ');
        console.log("CPF antigo: ", this.cpf);
        this.cpf = readlineSync.question('Novo CPF: ');
        console.log("Email antigo: ", this.email);
        this.email = readlineSync.question('email: ');
        console.log("Senha antiga: ", this.senha);
        this.senha = readlineSync.question('Nova senha: ');
   }

   ver_lista_produtos(){
        const lista_produtos = [];
        for(const produto of Produtos){
            lista_produtos.push(produto);
        lista_pedidos.sort((a, b) => a[1] - b[1]);
        console.log(lista_produtos)
        }
    }

    fazer_pedido(){ //Vria um novo pedido, com seus atributos.
        const novo_pedido = new Pedido(readlineSync.question('ID único: '),
        readlineSync.question('ID do cliente: '), "pendente", 
        readlineSync.question('Data do pedidido: '))
    }

    cancelar_pedido(){ //Muda o status do pedido para "cancelado".
        Pedido.status = "cancelado"
    }

    ver_meus_pedidos(){ //Mostra os pedidos do cliente.
        const meus_pedidos = [];
        for(const pedido of Pedido){
            if (Pedido.ID_do_cliente == Cliente.ID_unico){ //Adiciona o pedido na lista apenas se os ID do pedido e do cliente coinscindirem.
                lista_pedidos.push(pedido);
            }
        }  
        meus_pedidos.sort((a, b) => a[3] - b[3]); //Ordena os pedidos pela ordem cronológica
        console.log(meus_pedidos)
        
   }
    
   avaliar_pedido(){ //Pede uma nota de 1 a 10 para o pedido.
        Pedido.avaliacao = parseInt(readlineSync.question('Avalie o pedido(de 1 a 10): '))
   }

   visualizar_avaliacoes(){ //Mostra as avaliações do pedido.
        const avaliacoes = [];
        for(const avaliacao of Pedido.avaliacao){
            avaliacoes.push(avaliacao);
        }   
        console.log(avaliacoes)
    }
   
}

class Produtos{ //Cria a classe Produtos com seus atributos.
    constructor (quantidade_no_estoque, nome, data_de_validade , preco, descricao){
        this.quantidade_no_estoque = quantidade_no_estoque
        this.nome = nome
        this.data_de_validade = data_de_validade
        this.preco = preco
        this.descricao = descricao
   }
}

class Sistema{ //Cria a classe sistema com seus atributos.
    constructor (funcionario, cliente) {
        this.funcionario = funcionario;
        this.cliente = cliente
    }
    inicio(){ //Pergunta se o usuário é cliente ou funcionário.
        const perg = readlineSync.question('Cliente ou Funcionário? ')
        if (perg == "Cliente"){ //Se a resposta for cliente, ele pode fazer login, fazer cadastro ou sair do programa.
            const perg2 = readlineSync.question('Fazer login, Fazer cadrasto ou Sair do programa: ')
            if (perg2 = "Fazer login"){
                Cliente.fazer_login
                this.cliente = "cliente"
            }
            else if (perg2 = "Fazer cadastro"){
                Cliente.fazer_cadasto
                this.cliente = "cliente"
            }
            else{
                Cliente.sair_do_programa
                this.cliente = null
            }   
        }
        else{ //Se a resposta não foi cliente, então o usuário é um funcionário, que vai ter as mesmas opções.
            const perg2 = readlineSync.question('Fazer login, Fazer cadrasto ou Sair do programa: ')
            if (perg2 = "Fazer login"){
                Funcionario.fazer_login
                this.funcionario = "funcionário"
            }
            else if (perg2 = "Fazer cadastro"){
                Funcionario.fazer_cadasto
                this.funcionário = "funcionário"
            }
            else{
                Funcionario.sair_do_programa
                this.funcionario = null
            }

        }

    }

    logado(){ //Após o usuário fazer login ou cadastro, ele pode escolher alguma dessas opções.
        if(this.funcionario != null){
            console.log("1.Ver Meus Dados\n", //Mostra as opções.
            "2.Modificar Meus Dados\n",
            "3.Ver Lista de Pedidos\n",
            "4.Ver Lista de Produtos\n",
            "5.Ver Lista de Clientes)\n",
            "6.Mudar status do pedido\n",
            "7.Adicionar Produto\n",
            "8.Editar Produto\n",
            "9.Excluir Produto")

            const escolha = parseInt(readlineSync.question("Digite o número escolhido: ")) //Pergunta ao usuário qual das opções ele quer escolher.
            if (escolha = 1){
                Funcionario.ver_meus_dados // Se ele escolhe a opção de número 1, a função ver_meus_dados da classe Funcionário é chamada. E assim por diante.
            }
            else if (escolha = 2){
                Funcionario.modificar_meus_dados
            }
            else if (escolha = 3){
                Funcionario.ver_lista_produtos
            }
            else if (escolha = 4){
                Funcionario.modificar_meus_dados
            }
            else if (escolha = 5){
                Funcionario.ver_lista_clientes
            }
            else if (escolha = 6){
                Funcionario.mudar_status_pedido
            }
            else if (escolha = 7){
                Funcionario.adicionar_produto
            }
            else if (escolha = 8){
                Funcionario.editar_produto
            }
            else if (escolha = 9){
                Funcionario.excluir_produto
            }
        }

        else if (this.cliente != null){ //Ocorre o mesmo com os clientes.
            console.log("1.Ver meus Dados\n",
            "2.Modificar Meus Dados\n",
            "3.Ver Lista de Produtos\n",
            "4.Fazer pedido\n",
            "5.Cancelar pedido\n",
            "6.Ver meus pedidos\n",
            "7.Avaliar pedido\n",
            "8.Visualizar avaliações\n")

            const escolha = parseInt(readlineSync.question("Digite o número escolhido: "))
            if (escolha = 1){
                Cliente.ver_meus_dados
            }
            else if (escolha = 2){
                Cliente.modificar_meus_dados
            }
            else if (escolha = 3){
                Cliente.ver_lista_produtos
            }
            else if (escolha = 4){
                Cliente.fazer_pedido
            }
            else if (escolha = 5){
                Cliente.cancelar_pedido
            }
            else if (escolha = 6){
                Cliente.ver_meus_pedidos
            }
            else if (escolha = 7){
                Cliente.avaliar_pedido
            }
            else if (escolha = 8){
                Cliente.visualizar_avaliacoes
            }
        }
    }
}