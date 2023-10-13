// Fonction pour simuler un duel
function duel() {
    return Math.random() < 0.5; // 50% de chance pour chaque joueur de gagner
  }
  
  // Fonction pour amorcer le spike
  function amorcerSpike(equipe) {
    if (equipe === "Attaquant") {
      return Math.random() < 0.4;
    } else {
      return Math.random() < 0.6;
    }
  }
  
  // Tableau des équipes et des joueurs
  const equipes = ["Attaquant", "Défenseur"];
  const joueurs = ["Omen", "Phoenix", "Jett", "Fade", "Chamber"];
  
  let manchesAttaquant = 0;
  let manchesDefenseur = 0;
  
  while (manchesAttaquant < 13 && manchesDefenseur < 13) {
    const equipe = equipes[Math.floor(Math.random() * 2)];
    const joueur = joueurs[Math.floor(Math.random() * joueurs.length)];
  
    console.log(`${joueur} de l'équipe ${equipe} tue son adversaire.`);
  
    if (amorcerSpike(equipe)) {
      console.log("Le joueur amorce le spike.");
      const gagnant = duel() ? equipe : (equipe === "Attaquant" ? "Défenseur" : "Attaquant");
      console.log(`Le ${gagnant} remporte le duel.`);
      gagnant === "Attaquant" ? manchesAttaquant++ : manchesDefenseur++;
    } else {
      console.log("Le spike n'est pas amorcé.");
      const gagnant = duel() ? equipe : (equipe === "Attaquant" ? "Défenseur" : "Attaquant");
      console.log(`Le ${gagnant} remporte le duel.`);
      gagnant === "Attaquant" ? manchesAttaquant++ : manchesDefenseur++;
    }
  }
  
  if (manchesAttaquant === 13) {
    console.log("Les attaquants ont remporté la partie !");
  } else {
    console.log("Les défenseurs ont remporté la partie !");
  }