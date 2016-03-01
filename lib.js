var objeto = new Array();
var nome = '';
var sobrenome = '';
var email = '';

var getNome = function(){
	return this.nome = document.getElementsByName('nome')[0].value;
}

var getSobrenome = function(){
	return this.sobrenome = document.getElementsByName('sobrenome')[0].value;
}

var getEmail = function(){
	return this.email = document.getElementsByName('email')[0].value;
}


var construtor = function(nome, sobrenome, email){
	var _nome = nome;
	var _sobrenome = sobrenome;
	var _email = email;

	return{
		nome: _nome,
		sobrenome: _sobrenome,
		email: _email
	}
}

var remover = function(email){

	for(ob in objeto){
		if(objeto[ob].email === email){
			return this.objeto.splice(objeto.indexOf(objeto[ob]), 1);
		}
	}
	
}

var limparCampos = function(){
	document.getElementsByName('nome')[0].value = '';
	document.getElementsByName('sobrenome')[0].value = '';
	document.getElementsByName('email')[0].value = '';
}

var buscarEmail = function(email){
	for(ob in objeto){
		if(objeto[ob].email === email) {
			console.log('Este Email ja existe!');
			return objeto[ob].email;
		}
	}
}

var adicionar = function(){

	try{
		if(!buscarEmail(this.email) && this.email !== ''){
			this.objeto.push(construtor(this.nome, this.sobrenome, this.email));
			limparCampos();
			console.log('Salvo com sucesso!');
			listar();
		} else {
			exit();
		}
	} catch(e){
		console.log('Não foi possivel salvar este registro!');
	}

}

var listar = function(){
	for(ob in objeto){
		console.log(objeto[ob]);
	}
}