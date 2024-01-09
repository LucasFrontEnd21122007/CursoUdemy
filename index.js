document.addEventListener("DOMContentLoaded", function () {
    var horarioSelect = document.getElementById("horario");
    var mensagemDiv = document.getElementById("mensagem");

    horarioSelect.addEventListener("change", function () {
        var horarioSelecionado = horarioSelect.value;

        // Limpa mensagens anteriores
        mensagemDiv.innerHTML = "";

        // Executa lógica com base no horário escolhido
        switch (horarioSelecionado) {
            case "08:00":
                mensagemDiv.innerHTML = "Bom dia! Tenha um ótimo dia!";
                break;
            case "09:00":
                mensagemDiv.innerHTML = "Hora de começar o trabalho!";
                break;
            case "10:00":
                mensagemDiv.innerHTML = "Reunião importante às 10:00!";
                break;
            case "11:00":
                mensagemDiv.innerHTML = "Última hora antes do almoço!";
                break;
            default:
                mensagemDiv.innerHTML = "Mensagem padrão para outros horários.";
        }

        // Exibe a mensagem no console
        console.log(("Horário selecionado: " + horarioSelecionado))
    });
});
