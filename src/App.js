import React, { Component, Fragment } from 'react';
import logo from './logo.svg'
import './App.css';
import Animate from 'animate.css-react'
import 'animate.css/animate.css'
import Projet from './components/Projet'
import Modal from './components/Modal'
import img_apdc from './assets/images/projects/apdc.png'
import img_webdoc from './assets/images/projects/webdoc.png'
import img_pao from './assets/images/projects/pao.png'
import img_studio from './assets/images/projects/studio.png'
import img_portrait from './assets/images/projects/autoportrait.png'
import img_metro from './assets/images/projects/metro.png'
import img_deckapps from './assets/images/projects/deckapps.png'
import right_arrow from './assets/images/right_arrow.svg'
import left_arrow from './assets/images/left_arrow.svg'
import up_arrow from './assets/images/up_arrow.svg'
import down_arrow from './assets/images/down_arrow.svg'

class App extends Component {
  state = {
    objectData : [
      {
        titre:'A portée d\'Choeur',
        img: img_apdc,
        date:'20 SEPT 2019',
        contexte:'asso',
        type:'thème & site Wordpress',
        largeDesc:'En tant que membre de l\'équipe communication de l\'association A Portée d\'Chœur, j\'ai proposé mes services afin de moderniser le site de l\'association. Le site fonctionne via le CMS Wordpress. J\'ai donc réalisé un thème compatible avec le CMS. Ce thème comprend une page d\'accueil, un modèle d\'article, un modèle de page et un modèle de formulaire de recherche. Le tout à été réaliser en HTML, CSS et Javascript.',
        modalScreenshots: [img_apdc, img_pao],
        linkModal:'http://apdc-auray.com/asso'

      },
      {
        titre:'Découvrir l\'autisme',
        img: img_webdoc,
        date:'6 JAN 2020',
        contexte:'MMI',
        type:'Webdocumentaire',
        largeDesc:'Dans le cadre du module d\'infographie et de développement web, nous devions réaliser un webdocumentaire sur le sujet de notre choix.',
        modalScreenshots: [img_webdoc],
        linkModal:'hey'
      },
      {
        titre:'health a week',
        img: img_pao,
        date:'3 AVR 2019',
        contexte:'MMI',
        type:'Rédaction d\'article & PAO'
      },
      {
        titre:'Webradio Le Studio',
        img: img_studio,
        date:'5 MAI 2019',
        contexte:'MMI',
        type:'Charte graphique'
      },
      {
        titre:'Digital hapiness',
        img: img_portrait,
        date:'20 DÉC 2018',
        contexte:'MMI',
        type:'Autoportrait graphique'
      },
      {
        titre:'Métro parisien',
        img: img_metro,
        date:'25 AVR 2019',
        contexte:'MMI',
        type:'Datavisualisation'
      },
      {
        titre:'Deckapps',
        img: img_deckapps,
        date:'20 MARS 2019',
        contexte:'MMI',
        type:'Application'
      }
    ],
    i:0
  }

  handleClickNext = () => {
    if(this.state.i== this.state.objectData.length-1) {
      this.setState({
        i:0})

    } else {
      this.setState({...this.state.i++})
    }
  }

// faire une seule fx click avec paramètre

  handleClickPrev = () => {
    if(this.state.i== 0) {
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
  render()
  { return (
    <Fragment>
    <main  id='area'>
    <div className='project-vue'>
    <img className='upArrow' src={up_arrow} alt='left_arrow' onClick={this.handleClickPrev} />
    <img className='leftArrow' src={left_arrow} alt='left_arrow' onClick={this.handleClickPrev} />

    <Projet
    titre={this.state.objectData[this.state.i].titre}
    img={this.state.objectData[this.state.i].img}
    date={this.state.objectData[this.state.i].date}
    contexte={this.state.objectData[this.state.i].contexte}
    type={this.state.objectData[this.state.i].type}
    largeDesc={this.state.objectData[this.state.i].largeDesc}
    openModal={this.openModal}
    />

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
