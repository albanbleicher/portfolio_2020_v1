<?php
// S'il y des données de postées
if ($_SERVER['REQUEST_METHOD']=='POST') {
 
  // (1) Code PHP pour traiter l'envoi de l'email
 
  // Récupération des variables et sécurisation des données
  $nom     = htmlentities($_POST['nom']); // htmlentities() convertit des caractères "spéciaux" en équivalent HTML
  $email   = htmlentities($_POST['mail']);
  $message = htmlentities($_POST['message']);
 
  // Variabl es concernant l'email
 
  $destinataire = 'albanbleicher@outlook.com'; // Adresse email du webmaster (à personnaliser)
  $sujet = '[albanbleicher.fr] Formulaire de contact'; // Titre de l'email
  $contenu = '<html>
  <head>
  <meta charset="UTF-8">
  <title>Titre du message</title></head><body>';
  $contenu .= '<p>Bonjour, vous avez reçu un message à partir de votre site web.</p>';
  $contenu .= '<p><strong>Nom</strong>: '.$nom.'</p>';
  $contenu .= '<p><strong>Email</strong>: '.$email.'</p>';
  $contenu .= '<p><strong>Message</strong>: '.$message.'</p>';
  $contenu .= '<a href="https://albanbleicher.fr">Voir le site</a>';
    
  $contenu .= '</body></html>'; // Contenu du message de 
$headers = 'From: Alban Bleicher - Portfolio<nepasrepondre@albanbleicher.fr>'."\r\n";
$headers .= 'Mime-Version: 1.0'."\r\n";
  $headers .= 'Content-type: text/html; charset=utf-8'."\r\n";
 
  // Envoyer l'email
  mail($destinataire, $sujet, $contenu, $headers); // Fonction principale qui envoi l'email
    echo '<div class="messageSent"><p>Message envoyé</p></div>'; // Afficher un message pour indiquer que le message a été envoyé
  // (2) Fin du code pour traiter l'envoi de l'email
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
   <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-140844178-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-140844178-1');
</script>

    <meta charset="UTF-8">
    <meta property="og:title" content="Alban Bleicher - Portfolio">
    <meta property="og:site_name" content="">
    <meta property="og:url" content="https://albanbleicher.fr">
    <meta property="og:description" content="Je m'appelle Alban Bleicher, et je suis étudiant en DUT Métiers du Multimédia et de l'Internet (MMI) à Laval.">
    <meta property="og:type" content="website">
    <meta property="og:image" content="https://albanbleicher.fr/img/socialthumb.png">
    <meta property="og:image:width" content="2880">
    <meta property="og:image:height" content="1400">
    
    <meta name="title" content="Alban Bleicher - Portfolio">
    <meta name="description" content="Je m'appelle Alban Bleicher, et je suis étudiant en DUT Métiers du Multimédia et de l'Internet (MMI) à Laval.">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@albanbleicher">
    <meta name="twitter:title" content="Alban Bleicher - Portfolio">
    <meta name="twitter:description" content="Je m'appelle Alban Bleicher, et je suis étudiant en DUT Métiers du Multimédia et de l'Internet (MMI) à Laval.">
    <meta name="twitter:image" content="https://albanbleicher.fr/img/socialthumb.png">
    <meta name="twitter:image:alt" content="Alban Bleicher - Portfolio">
    <link rel="stylesheet" href="style.css">
    <title>Alban Bleicher - Portfolio</title>
    <script src="https://unpkg.com/feather-icons"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="apple-touch-icon" sizes="76x76" href="img/favicons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="img/favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="img/favicons/favicon-16x16.png">
    <link rel="manifest" href="img/favicons/site.webmanifest">
    <link rel="mask-icon" href="img/favicons/safari-pinned-tab.svg" color="#5bbad5">
    <link rel="shortcut icon" href="img/favicons/favicon.ico">
    <meta name="apple-mobile-web-app-title" content="Alban Bleicher">
    <meta name="application-name" content="Alban Bleicher">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-config" content="img/favicons/browserconfig.xml">
    <meta name="theme-color" content="#ffffff">

    <script>
        function toggle_visibility(id) {
            var e = document.getElementById(id);
            var doc = document.getElementById('wrap');
            if (e.style.display == 'block')
                e.style.display = 'none',
             $("body").removeClass("modalOpen");
            else
                e.style.display = 'block',
            e.style.animation = 'displayModal 0.5s forwards',
                $("body").addClass("modalOpen");
            
        }
    </script>
</head>

<body id="wrap">
    <div class="img">
        <img class="portrait" src="img/photo.jpg" alt="Photo portrait réalisée par Esteban Cassagnol-Aubrespy">
        <p class="imgCredits">Photo portrait par <a href="https://www.instagram.com/exsteb/" target="_blank">Esteban Cassagnol-Aubrespy</a></p>
    </div>
    <div class="intro">
        <header>
            <nav>
                <ul>
                    <li><a href="#about">Présentation</a></li>
                    <li><a href="#work">Réalisations</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div class="content">
                <div class="titles">
                    <h1>Alban Bleicher</h1>
                    <p>Étudiant Métiers du Multimédia et de l'Internet</p>
                </div>
            </div>
        </header>
    </div>
    <div class="presentation" id="about">
        <div class="contentPresentation">
            <h2>Présentation</h2>
            <p>Je m’appelle Alban Bleicher, et je suis un breton de 18 ans en première année de DUT Métiers du Multimédia et de l’Internet.
                Après avoir obtenu mon baccalauréat Économique et Social option Informatique et Création Numérique mention Bien, j’ai voulu me tourner vers des études dans le domaine du numérique, pour lequel je montre un intérêt depuis le début du lycée.</p>
            <a href="https://docs.albanbleicher.fr/cv.pdf" target="_blank">Consulter / Télécharger mon CV</a>

            <div>
                <h2>Mes centres d'intérêts</h2>
            <ul>
                <li>Chant</li>
                <li>Webdesign</li>
                <li>Natation</li>
            </ul>
            <h2>Me retrouver</h2>
            <ul>
                <li><a href="https://linkedin.com/in/albanbleicher/" target="_blank">LinkedIn</a></li>
                <li><a href="https://www.behance.net/albchr" target="_blank">Behance</a></li>
                <li><a href="https://twitter.com/albanbleicher">Twitter</a></li>
            </ul>
            </div>
        </div>
    </div>
    <div class="wrapWhite">
        <div class="realisations" id="work">
            <h2>Réalisations</h2>
            <p class="realisationsIntro">Voici les différents projets sur lesquels j'ai travaillé jusqu'à aujourd'hui. En passant des projets personnels, projets entre amis, aux projets de cours, voici un aperçu de ce que je sais faire.</p>
            <div class="workGrid">
              <div class="workElement">
                    <img src="img/work/metroThumb.png" alt="Datavisualisation">
                    <div class="workInfo">
                        <h3>Datavisualisation</h3>
                        <p>Contexte : MMI</p>
                        <a onclick="toggle_visibility('metroModal');">Voir le projet</a>
                    </div>
                </div>
               <div class="workElement">
                    <img src="img/work/paoThumb.jpg" alt="PAO / Rédaction article">
                    <div class="workInfo">
                        <h3>PAO / Rédaction d'article</h3>
                        <p>Contexte : MMI</p>
                        <a onclick="toggle_visibility('paoModal');">Voir le projet</a>
                    </div>
                </div>
                <div class="workElement">
                    <img src="img/work/charte.png" alt="Charte Graphique">
                    <div class="workInfo">
                        <h3>Charte graphique</h3>
                        <p>Contexte : MMI</p>
                        <a onclick="toggle_visibility('charteModal');">Voir le projet</a>
                    </div>
                </div>
                <div class="workElement">
                    <img src="img/work/portfolio.png" alt="Portfolio">
                    <div class="workInfo">
                        <h3>Portfolio</h3>
                        <p>Contexte : MMI</p>
                        <a onclick="toggle_visibility('portfolioModal');">Voir le projet</a>
                    </div>
                </div>
                <div class="workElement">
                    <img src="img/work/autoportraitThumb.png" alt="Autoportrait">
                    <div class="workInfo">
                        <h3>Autoportrait</h3>
                        <p>Contexte : MMI</p>
                        <a onclick="toggle_visibility('autoportraitModal');">Voir le projet</a>
                    </div>
                </div>
                <div class="workElement">
                    <img src="img/work/deckapps.png" alt="Autoportrait">
                    <div class="workInfo">
                        <h3>Design d'application</h3>
                        <p>Contexte : MMI</p>
                        <a onclick="toggle_visibility('deckappsModal');">Voir le projet</a>
                    </div>
                </div>
                <div class="workElement">
                    <img src="img/work/snapcastThumb.png" alt="Autoportrait">
                    <div class="workInfo">
                        <h3>Design d'application</h3>
                        <p>Contexte : entre amis</p>
                        <a onclick="toggle_visibility('snapcastModal');">Voir le projet</a>
                    </div>
                </div>
                <div class="workElement">
                    <img src="img/work/you.jpg" alt="Autoportrait">
                    <div class="workInfo">
                        <h3>Template HTML</h3>
                        <p>Contexte : personnel</p>
                        <a onclick="toggle_visibility('youModal');">Voir le projet</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal" id="metroModal">
            <div class="modalHead">
                <a onclick="toggle_visibility('metroModal');">✕</a>
            </div>
            <div class="modalContent">
                <h2>Datavisualisation</h2> <br>
                <span class="date">30 mai 2019</span>

                <p>Cette datavisualisation a été réalisé dans le cadre du module d'infographie du deuxième semestre de ma formation MMI. Après quelques recherches sur les méthodes de datavisualisation, notamment via le réseau <b>Pinterest</b>, source inépuisable de contenu, j'ai choisi le sujet du métro parisien, en ayant déjà en tête des éléments de décorations. Quelques lignes de métro, et le panneau d'indication, voilà ma source de départ. Un travail de <b>recherche</b> a été effectué pour trouver les chiffres les plus pertinents.
                </p>
                <p>Le sujet nous demandait les éléments suivants : </p>
                <ul>
                    <li>Mettre en forme de manière originale des informations sur un sujet</li>
                    <li>Définir trois groupes de données (ici le réseau, la fréquentation, et un dernier 'divers')</li>
                </ul>
                <div class="imgModalWork">
                    <img src="img/work/metro-1920x.png" alt="Datavisualisation du métro de Paris" class="modalWork wide">
                </div>
            </div>
            <div class="modalFooter">
                <a href="https://www.behance.net/gallery/80952083/Infos-sur-le-mtro-parisien" target="_blank" class="buttonModal"> Voir le projet sur Behance →</a>
            </div>
        </div>
        <div class="modal" id="charteModal">
            <div class="modalHead">
                <a onclick="toggle_visibility('charteModal');">✕</a>
            </div>
            <div class="modalContent">
                <h2>Charte graphique</h2> <br>
                <span class="date">17 février 2019</span>

                <p>La création de cette charte graphique est le fruit d'un apprentissage et fait office d'un nouveau sujet dans le cadre du module d'infographie dispensé en première année de DUT MMI. Nous devions créer un ensemble d'outils graphique qui serviront au bon fonctionnement de la webradio du campus de Laval, "Le Studio". Ce projet à été réalisé sur <b>Affinity Designer</b> et <b>Adobe Photoshop</b>.
                </p>
                <p>Le sujet nous demandait un logo ainsi que des déclinaisons : </p>
                <ul>
                    <li>noir et blanc</li>
                    <li>au trait</li>
                </ul>
                <div class="imgModalWork">
                    <img src="img/work/studio/blanc.png" alt="Logo pour la webradio 'Le Studio'" class="modalWork">
                    <img src="img/work/studio/noir.png" alt="Logo pour la webradio 'Le Studio'" class="modalWork">
                    <img src="img/work/studio/trait.png" alt="Logo pour la webradio 'Le Studio'" class="modalWork">
                </div>
            </div>
            <div class="modalFooter">
                <a href="https://www.behance.net/gallery/76414613/LE-STUDIO" target="_blank" class="buttonModal"> Voir le projet complet sur Behance →</a>
            </div>
        </div>
             <div class="modal" id="paoModal">
            <div class="modalHead">
                <a onclick="toggle_visibility('paoModal');">✕</a>
            </div>
            <div class="modalContent">
                <h2>PAO / Rédaction d'article</h2> <br>
                <span class="date">5 avril 2019</span>

                <p>Dans le cadre du module d'apprentissage de la suite Adobe, nous avons du réalisé une mise en page d'un article de presse, précédement rédigé dans le module d'expression écrite et orale.
                </p>
                <p>Le sujet nous imposait des caractérisitques précises</p>
                <ul>
                    <li>Un article d'environ 6000 signes</li>
                    <li>Composer une page comme une couverture de magazine</li>
                    <li>Mettre en page notre article sur une double page</li>
                    <li>Réaliser une publicité en lien avec notre  article en dernière page</li>
                </ul>
                <div class="imgModalWork">
                    <img src="img/work/pao/1.jpg" alt="page 1" class="modalWork"><br>
                    <img src="img/work/pao/2.jpg" alt="page 2" class="modalWork">
                    <img src="img/work/pao/3.jpg" alt="page 3" class="modalWork"><br>
                    <img src="img/work/pao/4.jpg" alt="page 4" class="modalWork">
                </div>
            </div>
            <div class="modalFooter">
                <a href="https://docs.albanbleicher.fr/healthAWeek.pdf" target="_blank" class="buttonModal"> Voir ce projet (.pdf) →</a>
            </div>
        </div>
        <div class="modal" id="portfolioModal">
            <div class="modalHead">
                <a onclick="toggle_visibility('portfolioModal');">✕</a>
            </div>
            <div class="modalContent">
                <h2>Portfolio</h2> <br>
                <span class="date">7 janvier 2019</span>

                <p>Dans le cadre du module d'intégration web enseigné en première année de DUT MMI, nous devions réaliser un portfolio en HTML/CSS. Ce travail passait tout d'abord par la conception d'une maquette, avec le logiciel <b>Affinity Designer</b>, afin de définir précisement nos besoins. Par la suite, nous avons 'intégrer' cette maquette en reproduisant au fur et à mesure les différents éléments grâce aux cours du premier semestre.
                </p>
                <p>Le sujet nous demandait des parties précises</p>
                <ul>
                    <li>Une présentation</li>
                    <li>Un portrait chinois</li>
                    <li>Nos compétences</li>
                    <li>Nos réalisations</li>
                    <li>Un formulaire de contact</li>
                </ul>
                <div class="imgModalWork">
                    <img src="img/work/portfolio/1.png" alt="Capture d'écran du portfolio réalisé pour le DUT MMI" class="modalWork">
                    <img src="img/work/portfolio/2.png" alt="Capture d'écran du portfolio réalisé pour le DUT MMI" class="modalWork">
                    <img src="img/work/portfolio/3.png" alt="Capture d'écran du portfolio réalisé pour le DUT MMI" class="modalWork">
                    <img src="img/work/portfolio/4.png" alt="Capture d'écran du portfolio réalisé pour le DUT MMI" class="modalWork">
                    <img src="img/work/portfolio/5.png" alt="Capture d'écran du portfolio réalisé pour le DUT MMI" class="modalWork">
                </div>
            </div>
            <div class="modalFooter">
                <a href="/portfolioMMI" target="_blank" class="buttonModal"> Voir ce projet →</a>
            </div>
        </div>
        <div class="modal" id="autoportraitModal">
            <div class="modalHead">
                <a onclick="toggle_visibility('autoportraitModal');">✕</a>
            </div>
            <div class="modalContent">
                <h2>Autoportrait</h2> <br>
                <span class="date">10 décembre 2019</span>

                <p>Dans le cadre du module d'environnement logiciel, nous avons été initiés au logiciel <b>Adobe Photoshop</b>. Pour ce projet, nous devions réaliser un autoportrait comprenant différents éléments.
                </p>
                <ul>
                    <li>Minimum trois traits de caractères</li>
                    <li>Inclure une typographie</li>
                    <li>Réaliser un masque d'écrêtage</li>
                    <li>Utiliser l'outil tampon</li>
                </ul>
                <div class="imgModalWork">
                    <img src="img/work/autoportrait.png" alt="Autoportrait Photoshop" class="modalWork">
                </div>
            </div>

        </div>
        <div class="modal" id="youModal">
            <div class="modalHead">
                <a onclick="toggle_visibility('youModal');">✕</a>
            </div>
            <div class="modalContent">
                <h2>Template HTML</h2><br>
                <span class="date">août 2017</span>

                <p>Depuis bientôt trois ans, je montre un intérêt particulier pour le webdesign. Avant de suivre les enseignements du DUT MMI, je m'initiais déjà de monn côté aux langages HTML et CSS, notamment par la création de templates, format que je trouvais agréable et libre.</p>
                <div class="imgModalWork">
                    <img src="img/work/you.jpg" id="youImg" alt="Template You" class="modalWork">
                </div>
            </div>
            <div class="modalFooter">
                <a href="/you" target="_blank" class="buttonModal"> Voir le projet →</a>
            </div>
        </div>
        <div class="modal" id="deckappsModal">
            <div class="modalHead">
                <a onclick="toggle_visibility('deckappsModal');">✕</a>
            </div>
            <div class="modalContent">
                <h2>Design d'application</h2><br>
                <span class="date">décembre 2018</span>

                <p>Dans le cadre du module de principes de la mercatique, et d'écriture du multimédia, nous devions travailler par groupe sur un produit ou un service. Avec mes camarades, nos avons pensé Deckapps, une application pour organiser des soirées simplement. Nous nous sommes tous répartis les tâches, et je me suis occupé du site internet et des maquettes de l'application pour les présentations en cours. Les maquettes ont été réalisées sous <b>Adobe XD</b>.</p>
                <div class="imgModalWork">
                    <img id="deckappsImg" src="img/work/deckapps/phones.png" alt="Multitudes de téléphones montrant l'interface de Deckapps" class="modalWork">
                </div>
            </div>
            <div class="modalFooter">
                <a href="https://xd.adobe.com/view/fc7da9e6-6699-4f7b-61d0-a0f3f121097a-8a4c/" target="_blank" class="buttonModal"> Voir le projet complet et interactif →</a>
            </div>
        </div>
        <div class="modal" id="snapcastModal">
            <div class="modalHead">
                <a onclick="toggle_visibility('snapcastModal');">✕</a>
            </div>
            <div class="modalContent">
                <h2>Design d'application</h2><br>
                <span class="date">23 janvier 2018</span>

                <p>Snapcast est un projet réalisé entre amis lors de notre dernière année de lycée. Un de mes amis anime des soirées et avait besoin d'une application pour que les invités de la soirée puisse envoyer des photos depuis leur téléphone, sur un diaporama projeté dans une salle.
                    Un autre de mes amis s'est occupé de la partie programmation, et quant à moi, je me suis occupé de la partie design. Sur le logiciel/site web <b>Figma</b>, (équivalent d'<b>Adobe XD</b>) j'ai réalisé les deux interfaces nécéssaires au bon fonctionnement de l'application, puis je les ai intégré enn HTML/CSS.
                </p>
                <div class="imgModalWork">
                    <img src="img/work/snapcast.jpg" alt="Snapcast" class="modalWork">
                    <img src="img/work/snapcast2.jpg" alt="Snapcast" class="modalWork">
                </div>
            </div>
            <div class="modalFooter">
                <a href=" https://www.figma.com/file/aQqTEuh5b0pLiYAJ147EBDcU/Snapcast?node-id=0%3A1" target="_blank" class="buttonModal"> Voir le projet complet →</a>
            </div>
        </div>
        <div class="contact" id="contact">

            <h2>Contact</h2>
            <p>Voici un formulaire pour me joindre. Vous pouvez aussi utiliser <a href="mailto:contact@albanbleicher.fr">contact@albanbleicher.fr</a>. Je suis actuellement en recherche d'<b>alternance</b> dans le domaine du <b>webdesign</b> et/ou de l'<b>infographie.</b></p>
            <form action="index.php#contact" method="post">
                <label for="nom">Comment vous appellez-vous?</label>
                <input type="text" name="nom" placeholder="Entrez votre nom">
                <label for="mail">Comment puis-je vous joindre?</label>
                <input type="email" id="mail" name="mail" placeholder="Entrez votre mail">
                <label for="message">Message</label>
                <textarea name="message" id="message" cols="30" rows="10" placeholder="Tapez votre message"></textarea>
                <button type="submit">Envoyer</button>
            </form>
        </div>
        <div class="footer">
            <p>Alban Bleicher - Étudiant Métiers du Mulimédia et de l'Internet</p>
            <p>Auray - Vannes - Rennes - Laval</p>
            <p><a class="lk" href="https://linkedin.com/in/albanbleicher/" target="_blank"><i data-feather="linkedin"></i></a></p>
            <p class="creditsPhoto">Photo portrait par <a href="https://www.instagram.com/exsteb/" target="_blank">Esteban Cassagnol-Aubrespy</a></p>
        </div>
    </div>
    <script>
        feather.replace()
    </script>
</body>

</html>