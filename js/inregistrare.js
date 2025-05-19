document.getElementById("formInregistrare").addEventListener("submit", function(e) {
    e.preventDefault();

    // Simulăm trimiterea datelor
    document.getElementById("successMsg").style.display = "block";

    // Resetarea formularului după trimitere
    this.reset();
});