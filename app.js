var menu_aberto = 0;

$("#botao-menu-bobile").on("click", function(e) {

    if(menu_aberto == 0) {
        menuAberto();
    }else {
        menuFechado();
    }

});

function menuAberto() {
    $("#link-menu-mobile").show("2500");
    menu_aberto = 1;
}

function menuFechado() {
    $("#link-menu-mobile").hide("2500");
    menu_aberto = 0;
}

$("#enviar").on("click", function(e) {

    var valor_input_nome = $("#nome").val();
    var valor_input_email = $("#email").val();
    var valor_input_telefone = $("#telefone").val();
    var valor_input_mensagem = $("#mensagem").val();

    if(valor_input_nome == "") {

        nomeVazio();

    }

    if(valor_input_email == "") {

        emailVazio();

    }
    
    if(valor_input_nome != "" && valor_input_email != "") {
    
        emailVazio();
        var vereificar_email_valido = emailVerificado(valor_input_email);

        if(vereificar_email_valido == true) {

            carregandoEnvio();
            emailPreenchido();

            setTimeout(function() {

                emailValido();
                $("#nome").val("");
                $("#email").val("");
                $("#telefone").val("");
                $("#mensagem").val("");

            }, 2000);
            
        }

    }

});

$("#nome").on("focus", function(e) {
    $("#nome").removeClass("border border-danger");
    $("#nome").removeClass("border border-success");
    $("#erro2").addClass("d-none");
    $("#sucesso").addClass("d-none");
});

$("#email").on("focus", function(e) {
    $("#email").removeClass("border border-danger");
    $("#email").removeClass("border border-success");
    $("#erro").addClass("d-none");
    $("#sucesso").addClass("d-none");
});

$("#telefone").on("focus", function(e) {
    $("#telefone").removeClass("border border-success");
    $("#sucesso").addClass("d-none");
});

$("#mensagem").on("focus", function(e) {
    $("#mensagem").removeClass("border border-success");
    $("#sucesso").addClass("d-none");
});

function nomeVazio() {
    $("#nome").addClass("border border-danger");
    $("#erro2").removeClass("d-none");
};

function emailVazio() {
    $("#email").addClass("border border-danger");
    $("#erro").removeClass("d-none");
};

function emailPreenchido() {
    $("#email").removeClass("border border-danger");
    $("#erro").addClass("d-none");
};

function emailValido() {
    $("#nome").addClass("border border-success");
    $("#email").addClass("border border-success");
    $("#telefone").addClass("border border-success");
    $("#mensagem").addClass("border border-success");
    $("#sucesso").removeClass("d-none");
    $("#enviar").removeClass("d-none");
    $("#carregando").addClass("d-none");
}

function carregandoEnvio() {
    $("#enviar").addClass("d-none");
    $("#carregando").removeClass("d-none");
}

function emailVerificado(valor_input_email) {
    if(valor_input_email.includes ("@") == true && valor_input_email.includes (".") == true) {
        return true;
    }else {
        return false;
    }
}