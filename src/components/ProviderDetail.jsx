import React from 'react';

function ProviderDetail({ provider, onBack, isFavorite, onToggleFavorite }) {
  return (
    <div className="provider-detail">
      <button className="back-btn" onClick={onBack}>← Volver a la lista</button>
      
      <div className="provider-header">
        <img src={provider.image} alt={provider.name} />
        <div>
          <h2>{provider.name}</h2>
          <p className="category">{provider.category}</p>
          <div className="rating">
            <span>★ {provider.rating}</span>
            <span>({provider.reviews} reseñas)</span>
          </div>
          <button 
            className={`favorite-btn ${isFavorite ? 'active' : ''}`}
            onClick={() => onToggleFavorite(provider.id)}
          >
            {isFavorite ? '★ Eliminar de favoritos' : '☆ Agregar a favoritos'}
          </button>
        </div>
      </div>
      
      <div className="provider-content">
        <section>
          <h3>Descripción</h3>
          <p>{provider.description}</p>
        </section>
        
        <section>
          <h3>Disponibilidad</h3>
          <p>{provider.availability}</p>
        </section>
        
        <section>
          <h3>Contacto</h3>
          <p>Teléfono: {provider.contact.phone}</p>
          <p>Email: {provider.contact.email}</p>
        </section>
        
        <section>
          <h3>Palabras clave</h3>
          <div className="keywords">
            {provider.keywords.map(keyword => (
              <span key={keyword} className="keyword-tag">{keyword}</span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProviderDetail;