function logar(){
    var email = document.getElementById("user");
    var senha = document.getElementById("senha");
    var variavel = document.getElementById("sucesso");

    if(email.value == "admin" && senha.value == "admin"){
            localStorage.setItem("acesso",true); 
            variavel.innerText = "Usuario aceito";           
            variavel.style.display = "block";
            variavel.style.color = "green"; 
            setTimeout(function(){
                window.location.href = "pagina_principal.html"; 
            },3000);        
        
    }
    else{
        variavel.innerText = "Usuario ou senha invalido";
        variavel.style.display = "block";
        variavel.style.color = "red";
    }
    



}
