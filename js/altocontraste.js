function hasClass(element, classItem) {
	return (' ' + element.className + ' ').indexOf(' ' + classItem + ' ') > -1;
}

$(function() {

	var botaoContraste = document.getElementById("btn-alto-contraste");
		
		// Adiciona um listener no elemento pra executar uma função quando clicar
		botaoContraste.addEventListener('click', function () {
			// Pega o elemento com a classe 'body-class', no caso, o body
			var classes = document.getElementsByClassName('body-class');
			// Verifica se existe a classe 'alto-contraste' usando a função lá em cima
			var existingIndex = hasClass(classes[0], 'alto-contraste');
			// Se sim
		    if (existingIndex) {
				// Remove a classe 'alto-contraste
				document.body.classList.remove('alto-contraste');
				// Muda a imagem do logo para a original
				document.getElementById("logo-uab").setAttribute("src", "imagens/uab-logo.png");
		    } else {
				// Adiciona a classe 'alto-contraste'
				classes[0].className += " alto-contraste";
				// Muda a logo para a imagem em alto-contraste
				document.getElementById("logo-uab").setAttribute("src", "imagens/uab-logo-contraste.png");
		    }
		    return false;
		});
});
