import React from 'react';
import '../Styles/Title.scss'

function Title(props) {
  const {title} = props;
  return ( 
  <h1 className="title">{title}</h1>
  )
}

export default Title;