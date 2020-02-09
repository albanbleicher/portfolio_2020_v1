import React, { Fragment } from 'react'
import Animate from 'animate.css-react'
import 'animate.css/animate.css'
const Modal = (props) =>  {
  const modalScreens = props.modalScreenshots
  const renderModalLink = ()  => {

    if(props.linkModal!=false){
            return <a href={props.linkModal} target='_blank' >Voir le site</a>
          }

  }
  return (
    <Animate enter="flipInX" durationChange={1000} >
    <Fragment>
<div id='projectModal' className='overlay'>
  <div className='modal'>
  <div className='modalHead'>
    <a className='modalClose' onClick={props.closeModal}>Fermer (esc)</a>
  </div>
  <div className='modalContent'>
    <div className='contentHead'>
      <h2>{props.titre}</h2>
      <p className='sub'>{props.date}, {props.contexte}</p>
    </div>
    <div className='contentWrap'><div className='modalText' >
    <p>{props.largeDesc}</p>
    </div>
    {renderModalLink()}

    <div className='gallery'>
    {modalScreens.map((value) => {
        return <img src={value}/>
      })}

    </div>
    </div>
  </div>
  </div>
</div>

</Fragment>
    </Animate>
)
}
export default Modal
