const submitButton = document.getElementById("submit");
const prenameField = document.getElementById("prename");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");

submitButton.addEventListener("click", async (event) => {
  event.preventDefault();

  // Optional: einfache Validierung
  if (!prenameField.value || !nameField.value || !emailField.value) {
    alert("Bitte alle Pflichtfelder ausfüllen!");
    return;
  }

  try {
    await databaseClient.insertInto("form", {
      prename: prenameField.value,
      name: nameField.value,
      email: emailField.value,
    });

    alert("Daten erfolgreich gespeichert!");

    // Formularfelder leeren
    prenameField.value = "";
    nameField.value = "";
    emailField.value = "";
  } catch (error) {
    console.error("Fehler beim Speichern:", error);
    alert("Fehler beim Speichern der Daten.");
  }
});
