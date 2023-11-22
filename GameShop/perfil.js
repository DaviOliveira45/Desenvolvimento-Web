document.addEventListener("DOMContentLoaded", function () {
    const abrirCarrinho = document.getElementById("sacoladesktop");

    function carrinho(){
        window.location.href = "carrinho.html";
    }

    abrirCarrinho.addEventListener("click", carrinho);
});

document.addEventListener("DOMContentLoaded", function () {
    const abrirCarrinho = document.getElementById("sacolamobile");

    function carrinho(){
        window.location.href = "carrinho.html";
    }

    abrirCarrinho.addEventListener("click", carrinho);
});

document.addEventListener("DOMContentLoaded", function() {
    const submenubotao = document.getElementById("submenubotao");
    const submenu = document.getElementById("submenu");
    const submenuFundo = document.getElementById("submenuFundo");


    submenubotao.addEventListener("click", function() {
        submenu.classList.add("ativo");
        submenuFundo.style.display = "block";
    });

    const fechar = document.createElement("span");
    fechar.textContent = "X";
    fechar.style.cursor = "pointer";
    fechar.style.position = "absolute";
    fechar.style.top = "2.2%";
    fechar.style.right = "0px";
    fechar.style.fontSize = "1em";
    fechar.style.fontFamily = "Metrophobic";
    submenu.appendChild(fechar);
    
    fechar.addEventListener("click", function() {
        submenu.classList.remove("ativo");
        submenuFundo.style.display = "none";
    });
});
