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
import left_arrow from './assets/images/left_arrow.svg'
import right_arrow from './assets/images/right_arrow.svg'
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
        largeDesc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        modalScreenshots: [img_apdc, img_pao]

      },
      {
        titre:'Découvrir l\'autisme',
        img: img_webdoc,
        date:'6 JAN 2020',
        contexte:'MMI',
        type:'Webdocumentaire'
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
  render()
  { return (
    <Fragment>
    <main  id='area'>
    <div className='project-vue'>
    <img className='upArrow' src={up_arrow} alt='left_arrow' onClick={this.handleClickPrev} />
    <img className='rightArrow' src={left_arrow} alt='left_arrow' onClick={this.handleClickPrev} />

    <Projet
    titre={this.state.objectData[this.state.i].titre}
    img={this.state.objectData[this.state.i].img}
    date={this.state.objectData[this.state.i].date}
    contexte={this.state.objectData[this.state.i].contexte}
    type={this.state.objectData[this.state.i].type}
    largeDesc={this.state.objectData[this.state.i].largeDesc}
    />

    <img className='downArrow' src={down_arrow} alt='right_arrow' onClick={this.handleClickNext} />
    <img className='leftArrow' src={right_arrow} alt='left_arrow' onClick={this.handleClickPrev} />

    </div>
    </main>
    <Modal
    titre={this.state.objectData[this.state.i].titre}
    img={this.state.objectData[this.state.i].img}
    date={this.state.objectData[this.state.i].date}
    contexte={this.state.objectData[this.state.i].contexte}
    type={this.state.objectData[this.state.i].type}
    largeDesc={this.state.objectData[this.state.i].largeDesc}
    />
    </Fragment>

  );
}
}

export default App;
