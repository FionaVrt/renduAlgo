// Définition du personnage
const personnage = {
    prenom: "John",
    santeMentale: 10,
  };
  
  // Liste de musiques
  const musiques = ["Musique1", "Musique2", "Musique3", "Musique4", "Anissa - Wejdene"];
  
  // Définition du trajet
  const trajet = {
    radio: musiques[Math.floor(Math.random() * musiques.length)], // Musique aléatoire au début
    feuxRougesRestants: 30,
    changementsDeTaxi: 0,
  };
  
  // Boucle pour simuler le trajet
  while (trajet.feuxRougesRestants > 0 && personnage.santeMentale > 0) {
    console.log(`Musique : ${trajet.radio}, Feux restants : ${trajet.feuxRougesRestants}`);
  
    if (trajet.radio === "Anissa - Wejdene") {
      personnage.santeMentale -= 1; // Réduit la santé mentale si la musique est Anissa - Wejdene
      trajet.changementsDeTaxi += 1; // Change de taxi
    }
  
    trajet.radio = musiques[Math.floor(Math.random() * musiques.length)]; // Changer de musique
  
    trajet.feuxRougesRestants -= 1; // Passage d'un feu rouge
  }
  
  // Vérifier comment le trajet s'est terminé
  if (trajet.feuxRougesRestants === 0) {
    console.log(`John est bien arrivé après ${trajet.changementsDeTaxi} changements de taxi.`);
  } else {
    console.log("Explosion");
  }
  