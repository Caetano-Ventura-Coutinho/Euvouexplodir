function nextPage(){
    window.location.href = "deucerto.html"
} 
function moveButton(){  
    var x = Math.random() * (window.innerWidth - document.getElementById('botaonao').offsetWidth) - 15;
    var y = Math.random() * (window.innerHeight - document.getElementById('botaonao').offsetHeight) - 48;
    document.getElementById('botaonao').style.left = `${x}px`;
    document.getElementById('botaonao').style.top = `${y}px`;}

