import React from 'react';
import Card from './Card'
import './List.css';

export default function List(props) {
  
  List.defaultProps = {
    key: '',
    id: '',
    title: '',
    items: {},
    content: ''
  }
  
  return (
    <section className='List'>
      <header className='List-header'>
        <h2>{props.header}</h2>
      </header>
      <div className='List-cards'>
        {props.cards.map((card) =>
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            items={props.items}
            content={card.content}
            deleteCallback={props.deleteCallback}
          />
        )}
        <button
          type='button'
          className='List-add-button'
          onClick={props.randomCallback}
        >
          + Add Random Card
        </button>
      </div>
    </section>
  )

  

}
