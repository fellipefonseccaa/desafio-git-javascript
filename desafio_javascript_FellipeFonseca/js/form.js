window.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const button = document.getElementById("send-button");
    const message = document.getElementById("form-message");

    button.addEventListener("mouseenter", function () {
        button.style.transform = "scale(1.04)";
    });

    button.addEventListener("mouseleave", function () {
        button.style.transform = "scale(1)";
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const cpf = document.getElementById("cpf").value.trim();
        const sobrenome = document.getElementById("sobrenome").value.trim();
        const telefone = document.getElementById("telefone").value.trim();
        const contato = document.getElementById("tipo-contato").value;

        if (!nome || !email || !cpf || !sobrenome || !telefone || !contato) {
            message.textContent = "Confira os campos antes de enviar.";
            return;
        }

        message.textContent = "Formulário enviado.";
        form.reset();
    });
});
