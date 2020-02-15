(function(){
   'use strict';
   $(document).ready(function(){
      //variable commune d'emplacement du composant dans le DOM
      var emplacementComposant = null;

      function monterComposantHTML(donneesHTML, styleUrl){
          if(MYAPP.emplacementComposant !=null) {
              demonterComposantHTML();
          }
          emplacementComposant = $('<div></div>');
          $('main').append(emplacementComposant);
          emplacementComposant.addClass('component');
          emplacementComposant.append('<link rel="stylesheet" type="text/css" href='+styleUrl+'>');
          emplacementComposant.append(donneesHTML);
          MYAPP.emplacementComposant = emplacementComposant;


         //TODO
      }

      function demonterComposantHTML(){
                emplacementComposant.remove();
             emplacementComposant=null;
      }

      function loadComponent(componentName){
         //TODO
          var url = componentName+"/template.html";
          var styleUrl = componentName+"/style.css";
          $.ajax(url, {
                    method: 'GET',
                    dataType: 'html'
                })
                .done(function success(e) {
                   monterComposantHTML(e,styleUrl);


                      $.getScript(componentName+"/lib.js")
                      .done(function success(ev) {

                        })
                      .fail(function error(ev) {
                          console.log('erreuur');
                      })

          })
                .fail(function error(e) {
                    alert('erreur');
                })
      }

      //Mise en place des listeners sur les boutons composants
      $("header button[component]").click((ev) => {
         let componentName = $(ev.target).attr("component");
         loadComponent(componentName);
      });
   });
}());
