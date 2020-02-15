(function(){
   'use strict';

   //Vérification de l'existante de la constante globale MYAPP
   if(typeof(MYAPP) === 'undefined'){
      console.error("Impossible de charger la librairie du composant. la variable globale MYAPP est inconnue.");
      return;
   }
   //Récupération du composant jQuery monté dans le DOM et vérification de son existance
   const TODOLIST_COMPOSANT = MYAPP.emplacementComposant;
   if(!TODOLIST_COMPOSANT){
      console.error("Impossible de récupérer le DOM du composant");
      console.log(MYAPP);
      return;
   }

   //pré-calcul de constantes (améliore les perf !)
   const TEMPLATE_TODO_ITEM = $('<li class="item"><span></span>&nbsp;<a class="close" href>X</a></li>');
   const TODO_LISTE = TODOLIST_COMPOSANT.find('.list > ul');
   const TEXTE_SAISI = TODOLIST_COMPOSANT.find('.saisie > input');

   //Mise en place des listener d'évènement du composant
   //Listener du bouton d'ajout
   console.log("mise en place du listener de clic");
   TODOLIST_COMPOSANT.find('.saisie > button.add').click(function(){
      //Récupération du text saisi
      let text = TEXTE_SAISI.val();
      console.log("Text saisie: " + text);
      //Si pas de texte, quitte la fonction sans rien faire
      if(text === null || text.length === 0){
         return;
      }
      //Créer un clone du template
      let nouvelItem = TEMPLATE_TODO_ITEM.clone();
      //Met à jour le texte dans le nouvel item
      nouvelItem.find('> span').text(text);
      //Monte l'item dans la liste
      TODO_LISTE.append(nouvelItem);
   });

   //Listener par délégation des liens de suppression d'item (élément de classe close)
   TODO_LISTE.on('click', '.close', function(ev){
      //Evite le changement vers une autre page
      ev.preventDefault();
      //l'élement ciblé est .close, on récupère donc le parent le plus proche qui soit un li de classe item
      //Ce parent le plus proche est le premier élément de la selection (au cas où l'on soit dans une liste de liste)
      let li_parent = $(this).parents('li.item').first();
      li_parent.remove();
   })
}());
