import React, { Fragment } from 'react'




const Projet = (props) =>  {
  return (
    <Fragment>
    
    <div id='project'>
      <img src={props.img} alt='Aperçu projet' className='project-snap' />
      <div className='project-info'>
        <h3>{props.date}, {props.contexte}</h3>
        <h2>{props.titre}</h2>
        <h4>{props.type}</h4>
        <a href='#' className='see-project'>Voir le projet</a>
      </div>
    </div>

  </Fragment>
  )
}
export default Projet
