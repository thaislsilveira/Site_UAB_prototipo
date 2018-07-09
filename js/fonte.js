var fonte = 15;
function aumentar(){
	fonte++;
	// Ele pega o elemento ID do texto e altera o style
	document.getElementById("texto").style.fontSize = fonte+"px";
}

function diminuir(){
	fonte--;
	document.getElementById("texto").style.fontSize = fonte+"px";
}

function normal(){
	fonte = 15;
	document.getElementById("texto").style.fontSize = fonte+"px";
}