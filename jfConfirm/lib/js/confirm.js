/*! jfConfirm 0.0.2 | (c) Jefferson Miranda | www.jeffersonmiranda.com.br */

$(document).ready(function(){

    var table = function(input){
        var _text = "";
        for(var j in input){
            if(input[j].value !== undefined){
                _text += "<tr>";
                    _text += "<td>"+ input[j].id +"</td>";
                    _text += "<td>"+ input[j].value +"</td>";
                _text += "</tr>";
            }
        }
        return _text;
    };

    var layout = function(mensagem, input){
        $("body").append("<div id='confirmShadow'><div id='confirm'><h1>"+mensagem+"<h1/><p>Confirme a baixo as informações:</p><table>" + table(input) +"</table><div><a href='#' class='option'>Sim</a><a href='#' class='option'>Não</a></div></div></div>");

        $(".option")[0].focus();

        $(".option").click(function(){
            if($(this).text() === "Sim"){
                $("#formSuccess").submit();
                $("input").val("");
                $("#confirmShadow").remove();
                $("#confirm").remove();
                $("input")[0].focus();
            } else {
                input[0].focus();
                $("#confirmShadow").remove();
                $("#confirm").remove();
            }
        });
    };

    var confirma = function(){
        var input = $.merge($("input[type='text']"), $("select"));
        layout("Deseja realmente salvar?", input);
    };
    
    var required = function(){
        var retorno = "";
        var input = $("input[type='text']");
        for(var j in input){
            if(input[j].required === true && input[j].value === ""){
                retorno += input[j].id + "\n";
            }
        }
        if(retorno !== ""){
            alert("Existem campos obrigatórios que não forma preenchidos: \n" + retorno);
            return false;
        }
        return true;
    };

    $(".btn-laranja").click(function(){
        if(required()){
            confirma();
        }
    });
    
});
