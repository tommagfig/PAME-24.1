class Pedido{
    constructor (ID_unico, ID_do_cliente, status , data_do_pedido){
        this.ID_unico = ID_unico
        this.ID_do_cliente = ID_do_cliente
        this.ID_status = status
        this.data_do_pedido = data_do_pedido
    }
}

class Funcionario{
    constructor (ID_unico, nome_de_usuario, cpf , email, senha){
        this.ID_unico = ID_unico
        this.nome_de_usuário = nome_de_usuario
        this.cpf = cpf
        this.email = email
        this.senha = senha
   }
   fazer_login(){
    const readlineSync = require('readline-sync');
    this.nome_de_usuario = readlineSync.question('usuário: ');
    this.senha = readlineSync.question('senha: ');
   }

   fazer_cadrasto(){
    const readlineSync = require('readline-sync');
    this.nome_de_usuario = readlineSync.question('usuário: ');
    this.cpf = readlineSync.question('cpf: ');
    this.email = readlineSync.question('email: ');
    this.senha = readlineSync.question('senha: ');
   }
   sair_do_programa(){
        this.ID_unico = null
        this.nome_de_usuário = null
        this.cpf = null
        this.email = null
        this.senha = null
   }
}

class Cliente{
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
    this.nome= readlineSync.question('nome: ');
    this.senha = readlineSync.question('senha: ');
   }

   fazer_cadrasto(){
    const readlineSync = require('readline-sync');
    this.nome = readlineSync.question('nome: ');
    this.cpf = readlineSync.question('cpf: ');
    this.data_de_nascimento = readlineSync.question('data de nascimento: ');
    this.email = readlineSync.question('email: ');
    this.senha = readlineSync.question('senha: ');
   }
   sair_do_programa(){
        this.ID_unico = null;
        this.nome = null;
        this.data_de_nascimento = null;
        this.cpf = null;
        this.email = null;
        this.senha = null;
   }
}

class Produtos{
    constructor (quantidade_no_estoque, nome, data_de_validade , preco, descricao){
        this.quantidade_no_estoque = quantidade_no_estoque
        this.nome = nome
        this.data_de_validade = data_de_validade
        this.preco = preco
        this.descricao = descricao
   }
}

class Sistema{

}