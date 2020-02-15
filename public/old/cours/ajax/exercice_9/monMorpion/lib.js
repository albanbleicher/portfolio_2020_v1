(function(){
   'use strict';

   //Vérification de l'existante de la constante globale MYAPP
   if(typeof(MYAPP) === 'undefined'){
      console.error("Impossible de charger la librairie du composant. la variable globale MYAPP est inconnue.");
      return;
   }
   //Récupération du composant jQuery monté dans le DOM et vérification de son existance
   const MORPION_COMPOSANT = MYAPP.emplacementComposant;
   if(!MORPION_COMPOSANT){
      console.error("Impossible de récupérer le DOM du composant");
      console.log(MYAPP);
      return;
   }

   //Variables partagés : joueur courant, etat de la partie et gagnant le cas échéant
   const ETAT_PARTIE = {
      joueurCourant: 'X',
      partieFinie: false,
      gagnant: null
   };

   //Passe au joueur suivant
   function passerJoueurSuivant(){
      ETAT_PARTIE.joueurCourant = ETAT_PARTIE.joueurCourant === 'X' ? '0' : 'X';
   }

   //Retourne vrai si la case passée en paramètère a déjà un contenu (X ou O)
   function caseDejaMarquee(uneCase){
      let contenu = uneCase.text();
      return contenu !== null && contenu.length > 0;
   }

   //Rempli la case avec la valeur du joueur courant
   function marquerCase(uneCase){
      uneCase.text(ETAT_PARTIE.joueurCourant);
   }

   //retourne la valeur de la case ou null si elle n'en a pas
   function getMarqueCase(uneCase){
      let contenu = uneCase.text();
      if(contenu === null || contenu.length === 0){
         return null;
      }else{
         return contenu;
      }
   }

   //calcul et affichage du text de status de jeu
   function afficherStatus(){
      let text;
      if(ETAT_PARTIE.partieFinie){
         if(ETAT_PARTIE.gagnant === null){
            text = "Match null !";
         }else{
            text = ETAT_PARTIE.gagnant + " a gagné !";
         }
      }else{
         text = `À toi de jouer ${ETAT_PARTIE.joueurCourant} !`;
      }
      MORPION_COMPOSANT.find('.status').text(text);
   }

   //calcul si un des joueur a gagné, si il y a match null ou si la partie n'est pas finie
   function calculerEtatJeu(){
      //Récupère les valeurs des case
      let tabValeurs = Array(9).fill(null);
      MORPION_COMPOSANT.find('.case').each(function(idx){
         tabValeurs[idx] = getMarqueCase($(this));
      })
      //Regarde s'il y a une serie de 3 même valeur (X ou O) par ligne, colonne ou diagonale
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i]; //extraction des éléments de la séquences dans 3 variables différentes
        if (tabValeurs[a] && tabValeurs[a] === tabValeurs[b] && tabValeurs[a] === tabValeurs[c]) {
           //Gagnant trouvé
           ETAT_PARTIE.partieFinie = true;
           ETAT_PARTIE.gagnant = tabValeurs[a];
           return;
        }
      }
      //Pas de gagnant, on vérifie s'il existe au moins une case vide pour
      //statuer sur l'état de la partie
      if(!tabValeurs.some((val) => val === null)){
         ETAT_PARTIE.partieFinie = true;
      }
   }

   //Mise en place de l'écoute de click sur les case par délégation
   MORPION_COMPOSANT.on('click', '.case', function(){
      //Si partie finie, ne fait rien
      if(ETAT_PARTIE.partieFinie){
         return;
      }
      let laCase = $(this);
      //Si case déjà marquée, ne fait rien
      if(caseDejaMarquee(laCase)){
         return;
      }
      //Marque la case
      marquerCase(laCase);
      //calcule l'état du jeu
      calculerEtatJeu();
      //Met à jour le message de status de jeu
      afficherStatus();
      //passe au joeur suivant
      passerJoueurSuivant();
   });

   //Affichage du status initial
   afficherStatus();
}());
