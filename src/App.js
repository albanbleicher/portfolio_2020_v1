import React, { Component, Fragment } from 'react';
import './App.css';
import Projet from './components/Projet'
import Modal from './components/Modal'
import {
  apdc,
  webdoc,
  health_a_week,
  slash,
  digitalHapiness,
  right_arrow,
  left_arrow,
  up_arrow,
  down_arrow,
} from './images'
class App extends Component {
  state = {
    objectData : [
      {
        titre:'Découvrir l\'autisme',
        img: webdoc[0],
        date:'En cours',
        contexte:'MMI',
        type:'Webdocumentaire',
        largeDesc:'Dans le cadre du module d\'infographie et de développement web, nous devions réaliser un webdocumentaire sur le sujet de notre choix. A travers mon webdocumentaire, vous pourrez découvrir les mots-clés concernants l\'autisme, mais  aussi des témoignages et des vidéos explicatives, afin d\'informer de manière interactive.',
        modalScreenshots: webdoc,
        linkModal:false
      },
      {
        titre:'A portée d\'Choeur',
        img: apdc[0],
        date:'20 SEPT 2019',
        contexte:'asso',
        type:'thème & site Wordpress',
        largeDesc:'En tant que membre de l\'équipe communication de l\'association A Portée d\'Chœur, j\'ai proposé mes services afin de moderniser le site de l\'association. Le site fonctionne via le CMS Wordpress. J\'ai donc réalisé un thème compatible avec le CMS. Ce thème comprend une page d\'accueil, un modèle d\'article, un modèle de page et un modèle de formulaire de recherche. Le tout à été réaliser en HTML, CSS et Javascript.',
        modalScreenshots: apdc,
        linkModal:'http://apdc-auray.com/asso'

      },
      {
        titre:'Slash',
        img: slash[0],
        date: '22 juin 2019',
        contexte:'MMI',
        type:'Web application',
        largeDesc:'Dans le cadre des projets tuteurés de première année de DUT MMI, nous devions créer un site pour présenter les alternatives à la voiture. Nous avons créer avec mon groupe,  Slash. C\'est un site proposant des vidéos explicatives, un simulateur de trajets et de gains coût/énergie, ainsi qu\'un espace communautaire. Sur ce projet, mon principal rôle était l\'intégration web et la gestion des accès aux espaces membre. J\'ai notamment utlisé Adobe XD, puis ensuite développé en HTML, CSS, jQuery et PHP.',
        modalScreenshots: slash,
        linkModal:false
      },
      {
        titre:'Health a week',
        img: health_a_week[0],
        date:'3 AVR 2019',
        contexte:'MMI',
        type:'Rédaction d\'article & PAO',
        largeDesc:'Ce projet à été réalisé dans le cadre du module  de théories de l\'information et de la communicatio, et du module de publication assistée par ordinateur, où nous devions mettre en page un article que nous avions rédigé',
        modalScreenshots: health_a_week,
        linkModal:'https://albanbleicher.fr/files/healthAWeek.pdf'
      },
      {
        titre:'Digital happiness',
        img: digitalHapiness,
        date:'20 DÉC 2018',
        contexte:'MMI',
        type:'Autoportrait graphique',
        largeDesc:'En tant que membre de l\'équipe communication de l\'association A Portée d\'Chœur, j\'ai proposé mes services afin de moderniser le site de l\'association. Le site fonctionne via le CMS Wordpress. J\'ai donc réalisé un thème compatible avec le CMS. Ce thème comprend une page d\'accueil, un modèle d\'article, un modèle de page et un modèle de formulaire de recherche. Le tout à été réaliser en HTML, CSS et Javascript.',
        modalScreenshots: [digitalHapiness],
        linkModal:false
      }
    ],
    i:0
  }
   componentWillMount = () => {
      document.addEventListener("keydown", this.closeModalEsc, false);
    }
  handleClickNext = () => {
    if(this.state.i === this.state.objectData.length-1) {
      this.setState({
        i:0})

    } else {
      this.setState({...this.state.i++})
    }
  }

// faire une seule fx click avec paramètre

  handleClickPrev = () => {
    if(this.state.i === 0) {
      this.setState({
        i:this.state.objectData.length-1})
    } else {
      this.setState({...this.state.i--})
    }

  }
  openModal = () => {
    var modal = document.getElementById('projectModal')
    modal.classList.add('show');
    modal.style.display = 'flex';
modal.classList.remove('hide');
  }
  closeModal = () => {
    var modal = document.getElementById('projectModal')
    modal.classList.add('hide');
    modal.style.display = 'none';
modal.classList.remove('show');
  }
  closeModalEsc = (e) => {
    var modal = document.getElementById('projectModal')
    console.log(e);
    if(e.keyCode ===27) {
      modal.classList.add('hide');
      modal.style.display = 'none';
  modal.classList.remove('show');
    }
  }
  render()
  { return (
    <Fragment>
    <main>
    <div className='project-vue'>
    <img className='upArrow' src={up_arrow} alt='left_arrow' onClick={this.handleClickPrev} />
    <img className='leftArrow' src={left_arrow} alt='left_arrow' onClick={this.handleClickPrev} />

    {
      this.state.objectData.map((projet, i) => {
      return (
        <Projet
        titre={projet.titre}
        img={projet.img}
        date={projet.date}
        contexte={projet.contexte}
        type={projet.type}
        largeDesc={projet.largeDesc}
        openModal={this.openModal}
        hidden={i !== this.state.i ? true : false}
        />
      )
    })}
    <img className='downArrow' src={down_arrow} alt='right_arrow' onClick={this.handleClickNext} />
    <img className='rightArrow' src={right_arrow} alt='right_arrow' onClick={this.handleClickNext} />

    </div>
    </main>
    <Modal
    titre={this.state.objectData[this.state.i].titre}
    img={this.state.objectData[this.state.i].img}
    date={this.state.objectData[this.state.i].date}
    contexte={this.state.objectData[this.state.i].contexte}
    type={this.state.objectData[this.state.i].type}
    largeDesc={this.state.objectData[this.state.i].largeDesc}
    modalScreenshots={this.state.objectData[this.state.i].modalScreenshots}
    linkModal={this.state.objectData[this.state.i].linkModal}
    closeModal={this.closeModal}

    />
    </Fragment>

  );
}
}

export default App;
