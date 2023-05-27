var button = document.getElementById("no-btn");
button.addEventListener("mouseover", function(){
    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;
    var buttonHeight = button.offsetHeight;
    var buttonWidth = button.offsetWidth;
    var newBottom = Math.random() * (windowHeight - buttonHeight);
    var newLeft = Math.random() * (windowWidth - buttonWidth);
    button.classList.add("moving");
    button.style.bottom = newBottom + "px";
    button.style.left = newLeft + "px";
})

document.getElementById("yes-btn").addEventListener("click", () => {
  alert(
    "Tem certeza disso?"
  );
  alert("Não tem volta não ein");
  alert(
    "Ok então, claro que não vai acabar aqui, eu pretendo conversar com você sobre isso pessoalmente o mais rapido possivel você chegando até aqui ou não, bjss"
  );

});