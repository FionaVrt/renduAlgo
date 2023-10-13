// Création du tueur en série Jason
const jason = {
    nom: "Jason",
    pointsDeVie: 100,
    probabiliteMourir: 0.3,
    probabiliteInfligerDegats: 0.5,
    probabiliteMourirEnInfligeantDegats: 0.2
  };
  
  // Caractéristiques des survivants
  const caracteristiquesSurvivants = ["nerd", "sportif", "blonde"];
  const nomsSurvivants = ["Alice", "Bob", "Charlie", "Diana", "Eve"];
  const survivants = [];
  
  for (let i = 0; i < 5; i++) {
    const nomAleatoire = nomsSurvivants[Math.floor(Math.random() * nomsSurvivants.length)];
    const caractereAleatoire = caracteristiquesSurvivants[Math.floor(Math.random() * caracteristiquesSurvivants.length)];
    survivants.push({
      nom: nomAleatoire,
      caracteristique: caractereAleatoire,
      pointsDeVie: 100
    });
  }
  
  const morts = [];
  
  while (jason.pointsDeVie > 0 && survivants.length > 0) {
    // Jason attaque un survivant
    const survivantAttaque = survivants[Math.floor(Math.random() * survivants.length)];
  
    const probabiliteSurvivantMeurt = Math.random();
    const probabiliteSurvivantEsquive = Math.random();
    const probabiliteSurvivantInfligeDegats = Math.random();
  
    if (probabiliteSurvivantMeurt < jason.probabiliteMourir) {
      // Le survivant meurt
      morts.push(survivantAttaque.nom);
      const index = survivants.indexOf(survivantAttaque);
      if (index !== -1) {
        survivants.splice(index, 1);
      }
      console.log(`${jason.nom} a tué ${survivantAttaque.nom}`);
    } else if (probabiliteSurvivantEsquive < 0.5) {
      // Le survivant esquive et inflige 10 points de dégâts
      survivantAttaque.pointsDeVie -= 10;
      console.log(`${survivantAttaque.nom} a esquivé et a infligé 10 dmg à ${jason.nom}`);
    } else if (probabiliteSurvivantInfligeDegats < 0.2) {
      // Le survivant inflige 15 points de dégâts mais meurt
      jason.pointsDeVie -= 15;
      morts.push(survivantAttaque.nom);
      const index = survivants.indexOf(survivantAttaque);
      if (index !== -1) {
        survivants.splice(index, 1);
      }
      console.log(`${survivantAttaque.nom} a infligé 15 dmg à ${jason.nom} mais est mort.`);
    } else {
      // Le survivant inflige 10 points de dégâts
      jason.pointsDeVie -= 10;
      console.log(`${survivantAttaque.nom} a infligé 10 dmg à ${jason.nom}`);
    }
  }
  
  if (jason.pointsDeVie <= 0) {
    console.log(`${jason.nom} est mort.`);
  } else {
    console.log("Les survivants ont gagné mais RIP à", morts.join(", "));
  }
  