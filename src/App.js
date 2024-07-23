import { useState } from 'react';
import './App.css';
import { Card } from './components/Card';

function App() {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [cards, setCards] = useState([]);

  const onAdd = () => {
    const newCard = {
      id: cards.length + 1,
      title,
      content,
    };

    setCards([...cards, newCard]);
    setTitle('');
    setContent('');
  };

  const handleRemove = (id) => {
    setCards(cards.filter(card => card.id !== id));
  };

  return (
    <div className="App">
      <div class="form-section">
        <div className="form">
          <div className="form-group">
            <label>
              <span className="input-label-text">Title:</span>
              <input className="input" value={title} onChange={(e) => setTitle(e.target.value)} />
            </label>
          </div>
          <div class="form-group">
            <label>
              <span className="input-label-text">Contenido:</span>
              <input className="input" value={content} onChange={(e) => setContent(e.target.value)} />
            </label>
          </div>
        </div>
        <button onClick={onAdd} className="button">Agregar</button>
      </div>
      <div className="container">
        {
          cards.map(({ id, title, content }) => (
            <Card
              key={id}
              title={title}
              content={content}
              onRemove={() => handleRemove(id)}
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;
