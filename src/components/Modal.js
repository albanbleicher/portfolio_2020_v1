import React, { Fragment } from 'react'

const Modal = (props) =>  {
  return (
    <Fragment>
<div id='projectModal' className='overlay'>
  <div className='modal'>
  <div className='modalHead'>
    <a className='modalClose'>Fermer</a>
  </div>
  <div className='modalContent'>
    <div className='contentHead'>
      <h2>{props.titre}</h2>
      <p className='sub'>{props.date}, {props.contexte}</p>
    </div>
    <div className='contentWrap'><p>{props.largeDesc}</p>
    <div className='gallery'>

    </div>
    </div>
    <div className='modalFooter'>
      <a href='#' className='btnSeeProject'>Voir le projet</a>
    </div>
  </div>
  </div>
</div>

</Fragment>
)
}
export default Modal
