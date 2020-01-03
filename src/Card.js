import React from 'react';
import './Card.css';

export default function Card(props) {
  
  Card.defaultProps = {
    key: '',
    id: '',
    title: '',
    items: {},
    content: ''
  }

  return (
    <div className='Card'>
      <button
        type='button'
        onClick={() => props.deleteCallback(props.id)}
      >
        delete
      </button>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  )
}
