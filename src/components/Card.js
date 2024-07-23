import React from 'react';
import './card.css';

export const Card = ({ title, content, onRemove }) => {
  

  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{content}</p>
      <button className="remove-button" onClick={onRemove}></button>
    </div>
  )
}
