const fortunes = [
    "You will have a great surprise today.",
    "Fortune favors the brave.",
    "Your talents will be recognized and rewarded.",
    "Change is coming. Embrace it!",
    "Adventure awaits in unexpected places.",
    "A fresh start will put you on your way.",
    "Your future is as bright as you make it.",
    "Trust yourself. You know more than you think.",
    "Every day is a new life to a wise person.",
    "The secret to getting ahead is getting started."
  ];
  
  // 2. Select one fortune on page load on random through this formula
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  const selectedFortune = fortunes[randomIndex];
  
  // Display the selected fortune
  const fortuneText = document.getElementById("fortune-text");
  fortuneText.textContent = selectedFortune;
  
  // 3. Four different buttons
  const themes = {
    green: {
      backgroundColor: "#d4f8d4",
      fontColor: "#2f8132",
      borderColor: "2px dotted #3cb371", 
      fontSize: "1.3rem",
      fontFamily: "'Montserrat', sans-serif"
    },
    yellow: {
      backgroundColor: "#fffacd",
      fontColor: "#8b8000",
      borderColor: "2px outset #ffd700",
      fontSize: "1.5rem",
      fontFamily: "'Merriweather', serif"
    },
    orange: {
      backgroundColor: "#ffe0b3",
      fontColor: "#cc5200",
      borderColor: "2px dashed #ff8c00",
      fontSize: "1.8rem",
      fontFamily: "'Lobster', cursive"
    },
    blue: {
      backgroundColor: "#d8ecff",
      fontColor: "#1e3f5a",
      borderColor: "2px inset #1e90ff",
      fontSize: "2.1rem",
      fontFamily: "'Poppins', sans-serif"
    }
  };
  

  const fortuneContainer = document.getElementById("fortune-container");
  
  // Function to apply a theme when a button is clicked
  function applyTheme(themeName) {
    const theme = themes[themeName];
    fortuneContainer.style.backgroundColor = theme.backgroundColor;
    fortuneContainer.style.color = theme.fontColor;
    fortuneContainer.style.border = theme.borderColor;
    fortuneText.style.fontSize = theme.fontSize;
    fortuneText.style.fontFamily = theme.fontFamily;

  }