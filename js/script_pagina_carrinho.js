function addCarrinho(){
    var item = document.getElementById("nome1");
    var nome = '<li>' +item.innerHTML + '</li>';
    var produtos = document.getElementById("lista-produtos");
    var preco = document.getElementById ("preco1").innerHTML;
    var precoinicial = document.getElementById("total").innerHTML;
    document.getElementById("total").innerHTML = Number.parseFloat(preco) + Number.parseFloat(precoinicial);
    produtos.innerHTML = produtos.innerHTML + nome      
    abrircarro();
}

function addCarrinho2(){
    var item = document.getElementById("nome2");
    var nome = '<li>' +item.innerHTML + '</li>';
    var produtos = document.getElementById("lista-produtos");
    var preco = document.getElementById ("preco2").innerHTML;
    var precoinicial = document.getElementById("total").innerHTML;
    document.getElementById("total").innerHTML = Number.parseFloat(preco) + Number.parseFloat(precoinicial);
    produtos.innerHTML = produtos.innerHTML + nome      
    abrircarro();
}

function addCarrinho3(){
    var item = document.getElementById("nome3");
    var nome = '<li>' +item.innerHTML + '</li>';
    var produtos = document.getElementById("lista-produtos");
    var preco = document.getElementById ("preco3").innerHTML;
    var precoinicial = document.getElementById("total").innerHTML;
    document.getElementById("total").innerHTML = Number.parseFloat(preco) + Number.parseFloat(precoinicial);
    produtos.innerHTML = produtos.innerHTML + nome      
    abrircarro();
}

function addCarrinho4(){
    var item = document.getElementById("nome4");
    var nome = '<li>' +item.innerHTML + '</li>';
    var produtos = document.getElementById("lista-produtos");
    var preco = document.getElementById ("preco4").innerHTML;
    var precoinicial = document.getElementById("total").innerHTML;
    document.getElementById("total").innerHTML = Number.parseFloat(preco) + Number.parseFloat(precoinicial);
    produtos.innerHTML = produtos.innerHTML + nome      
    abrircarro();
}

function addCarrinho5(){
    var item = document.getElementById("nome5");
    var nome = '<li>' +item.innerHTML + '</li>';
    var produtos = document.getElementById("lista-produtos");
    var preco = document.getElementById ("preco5").innerHTML;
    var precoinicial = document.getElementById("total").innerHTML;
    document.getElementById("total").innerHTML = Number.parseFloat(preco) + Number.parseFloat(precoinicial);
    produtos.innerHTML = produtos.innerHTML + nome      
    abrircarro();
}

function addCarrinho6(){
    var item = document.getElementById("nome6");
    var nome = '<li>' +item.innerHTML + '</li>';
    var produtos = document.getElementById("lista-produtos");
    var preco = document.getElementById ("preco6").innerHTML;
    var precoinicial = document.getElementById("total").innerHTML;
    document.getElementById("total").innerHTML = Number.parseFloat(preco) + Number.parseFloat(precoinicial);
    produtos.innerHTML = produtos.innerHTML + nome      
    abrircarro();
}

function addCarrinho7(){
    var item = document.getElementById("nome7");
    var nome = '<li>' +item.innerHTML + '</li>';
    var produtos = document.getElementById("lista-produtos");
    var preco = document.getElementById ("preco7").innerHTML;
    var precoinicial = document.getElementById("total").innerHTML;
    document.getElementById("total").innerHTML = Number.parseFloat(preco) + Number.parseFloat(precoinicial);
    produtos.innerHTML = produtos.innerHTML + nome      
    abrircarro();
}


function addCarrinho8(){
    var item = document.getElementById("nome8");
    var nome = '<li>' +item.innerHTML + '</li>';
    var produtos = document.getElementById("lista-produtos");
    var preco = document.getElementById ("preco8").innerHTML;
    var precoinicial = document.getElementById("total").innerHTML;
    document.getElementById("total").innerHTML = Number.parseFloat(preco) + Number.parseFloat(precoinicial);
    produtos.innerHTML = produtos.innerHTML + nome      
    abrircarro();
}


function addCarrinho9(){
    var item = document.getElementById("nome9");
    var nome = '<li>' +item.innerHTML + '</li>';
    var produtos = document.getElementById("lista-produtos");
    var preco = document.getElementById ("preco9").innerHTML;
    var precoinicial = document.getElementById("total").innerHTML;
    document.getElementById("total").innerHTML = Number.parseFloat(preco) + Number.parseFloat(precoinicial);
    produtos.innerHTML = produtos.innerHTML + nome      
    abrircarro();
}

function addCarrinho10(){
    var item = document.getElementById("nome10");
    var nome = '<li>' +item.innerHTML + '</li>';
    var produtos = document.getElementById("lista-produtos");
    var preco = document.getElementById ("preco10").innerHTML;
    var precoinicial = document.getElementById("total").innerHTML;
    document.getElementById("total").innerHTML = Number.parseFloat(preco) + Number.parseFloat(precoinicial);
    produtos.innerHTML = produtos.innerHTML + nome      
    abrircarro();
}

function addCarrinho11(){
    var item = document.getElementById("nome11");
    var nome = '<li>' +item.innerHTML + '</li>';
    var produtos = document.getElementById("lista-produtos");
    var preco = document.getElementById ("preco11").innerHTML;
    var precoinicial = document.getElementById("total").innerHTML;
    document.getElementById("total").innerHTML = Number.parseFloat(preco) + Number.parseFloat(precoinicial);
    produtos.innerHTML = produtos.innerHTML + nome      
    abrircarro();
}

function addCarrinho12(){
    var item = document.getElementById("nome12");
    var nome = '<li>' +item.innerHTML + '</li>';
    var produtos = document.getElementById("lista-produtos");
    var preco = document.getElementById ("preco12").innerHTML;
    var precoinicial = document.getElementById("total").innerHTML;
    document.getElementById("total").innerHTML = Number.parseFloat(preco) + Number.parseFloat(precoinicial);
    produtos.innerHTML = produtos.innerHTML + nome      
    abrircarro();
}


function abrircarro(){
    var aparece = document.getElementById("carrinho");
    aparece.style.display = "block";
}

function fecharcarro(){
    var some = document.getElementById("carrinho");
    some.style.display = "none";
}


function finalizarCompra(){
    var produtos2 = document.getElementById("lista-produtos").innerHTML = '';
    document.getElementById("total").innerHTML = 0.00;
}















