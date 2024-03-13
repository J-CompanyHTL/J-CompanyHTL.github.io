document.getElementById('kontaktFormular').addEventListener('submit', function(event) {
    event.preventDefault(); // Verhindert das tatsächliche Senden des Formulars
    alert('Danke für deine Nachricht. Wir werden uns so schnell wie möglich bei dir melden!');
    // Hier kannst du Code hinzufügen, um das Formular z.B. an einen Server zu senden
});
