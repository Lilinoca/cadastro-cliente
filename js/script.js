const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.querySelector("#nome").value;
	if (!/^[A-Za-z\s]+$/.test(nome)) {
	alert("Por favor, preencha o nome apenas com letras.");
	return;
}
	const sobrenome = document.querySelector("#sobrenome").value;
	if (!/^[A-Za-z\s]+$/.test(sobrenome)) {
	alert("Por favor, preencha o sobrenome apenas com letras.");
	return;
}
	const endereco = document.querySelector("#endereco").value;
	if (!/^[A-Za-z0-9\s]+$/.test(endereco)) {
	alert("Por favor, preencha o endereço apenas com letras e números.");
	return;
}
    const telefone = document.querySelector("#telefone").value;

    // expressão regular para validar telefone
    const regexTelefone = /^[0-9]+$/;

    if (!nome || !email || !telefone) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    if (!regexTelefone.test(telefone)) {
        alert("Por favor, preencha o telefone apenas com números.");
        return;
    }

    alert("Cliente cadastrado com sucesso!");

    formulario.reset();
});
