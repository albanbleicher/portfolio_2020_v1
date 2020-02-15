# La single page App

Vous devez créez une Single Page App.
L'effet escompté et de pouvoir changer de vue sans recharger la page.
Vous avez déjà appris a charger dynamiquement du code HTML et à le monter dans le DOM.
Ici nous allons charger du HTML, mais également son fichier de style CSS et son code JS associé.
Nous appelérons l'ensemble HTML/CSS/JS à charger/décharger dynamiquement un __composant__ composé d'une __vue__ (la partie HTML/CSS) et d'un __controlleur__ (la partie JS).

Vous avez à votre disposition :
- le fichier _index.html_, servant du vue principal
- son fichier de style _main.css_ associé
- la structure du code de chargement/changement de vues __main.js__
- 2 composants déjà implémentés :
   - une TODO liste ;
   - un jeu de morpion.

Chaque composant respecte le nommage de fichiers suivant :
- la vue HTML est nommé "template.html"
- le style associé est nommé "style.css"
- le controlleur JS associé est nommé "lib.js"

Observez bien les fichiers, notamment index.html et main.js.

__Vouc devez complété le fichier main.js selon les règles suivantes__

## 1. Fonction loadComponent(componentName)
### Paramètres :
- componentName : String : nom du composant
### Retour :
- Aucun
### Description :
Cette fonction récupère la vue HTML associée au composant _componentName_.

Si la requête réussie la fonction __monterComposantHTML__ est appelée, puis le script du composant est récupéré.

Si une des deux requête échoue, la fonction __demonterComposantHTML__ est appelée.

## 2. Fonction monterComposantHTML(donneesHTML, styleUrl)
### Paramètres :
- donneesHTML : String : données de la vue HTML
- styleUrl : String : url de la feuille de style associée à la vue
### Retour :
- Aucun
### Description :
Si la variable _emplacementComposant_ est nulle, la fonction __demonterComposantHTML__ est appelée.

la variable emplacementComposant est valuée avec un élément <div> créé en jQuery. Cet élément est monté dans l'élément <main> du DOM.

la classe css 'component' est ajouté à cette élément <div>, ainsi que les données de la vue

Un autre noeud est ajouté dans cet élément <div> : un noeud <link> contenant les informations nécessaire pour que le navigateur charge la feuille de style par lui-même (<link rel="..." type="..." href="...">).

Enfin, l'attribut __emplacementComposant__ de la variable globale __MYAPP__ (définie dans index.html) est valué avec la variable __emplacementComposant__.

## 3. Fonction demonterComposantHTML()
### Paramètres :
- aucun
### Retour :
- Aucun
### Description :
Si la variable __emplacementComposant__ n'est pas nulle, alors l'élément du DOM pointé par cette variable est retiré du DOM, puis la variable __emplacementComposant__ est valuée à _null_.
