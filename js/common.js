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
startGame()

    // Formularfelder leeren
    prenameField.value = "";
    nameField.value = "";
    emailField.value = "";
  } catch (error) {
    console.error("Fehler beim Speichern:", error);
    alert("Fehler beim Speichern der Daten.");
  }
});
function startGame(){
  // Throbber anzeigen
            throbberOverlay.classList.add('visible');

            // Simulieren einer Formularübermittlung (z.B. mit fetch oder setTimeout)
            setTimeout(() => {
                // Throbber ausblenden
                throbberOverlay.classList.remove('visible');

                // Glücksrad anzeigen
                rouletteWrapper.classList.add('visible');
                rouletteResult.classList.remove('visible'); // Ergebnis verstecken, falls vorher sichtbar
                winningMessageSpan.textContent = ''; // Nachricht zurücksetzen
                winningCodeParagraph.textContent = ''; // Code zurücksetzen

                // Zufällige Zahl für das Gewinnsegment (0-5 für Index)
                const winningIndex = Math.floor(Math.random() * prizes.length);
                
                const degreesPerSegment = 360 / prizes.length; // 60 Grad pro Segment


                const numSpins = 5;
                const targetDegree = (winningIndex * degreesPerSegment) + (degreesPerSegment / 2);
                const finalRotation = (360 * numSpins) + (90 - targetDegree); // 90 Grad ist die 12-Uhr-Position

                // Rotation anwenden
                rouletteWheel.style.transform = `rotate(${finalRotation}deg)`;

                // Ergebnis nach der Drehung anzeigen (muss mit der Transition-Dauer des Rades übereinstimmen)
                setTimeout(() => {
                    const wonPrize = prizes[winningIndex];
                    winningMessageSpan.textContent = `${wonPrize.name}!`;
                    
                    if (wonPrize.type !== "niete") {
                        winningCodeParagraph.textContent = `Dein Code: ${wonPrize.code}`;
                    } else {
                        winningCodeParagraph = "Versuch es bald wieder!";
                    }
                    
                    rouletteResult.classList.add('visible');
                }, 4000); // Nach 4 Sekunden, da die Drehung 4 Sekunden dauert (entspricht der CSS-Transition)
            }, 2000); // Simulierte 2 Sekunden Übermittlungszeit
        };

        closeRouletteButton.addEventListener('click', () => {
            rouletteWrapper.classList.remove('visible');
            // Reset des Glücksrads für die nächste Verwendung
            rouletteWheel.style.transform = `rotate(0deg)`; // Rad zurücksetzen
            rouletteResult.classList.remove('visible'); // Ergebnis verstecken
        })




            
