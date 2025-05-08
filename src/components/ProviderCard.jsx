import React from 'react';

function ProviderCard({ provider, isFavorite, onToggleFavorite, onSelectProvider }) {
  return (
    <div className="provider-card" onClick={() => onSelectProvider(provider)}>
      <div className="provider-image">
        <img src={provider.image} alt={provider.name} />
      </div>
      <div className="provider-info">
        <h3>{provider.name}</h3>
        <p className="category">{provider.category}</p>
        <div className="rating">
          <span>★ {provider.rating}</span>
          <span>({provider.reviews} reseñas)</span>
        </div>
        <button 
          className={`favorite-btn ${isFavorite ? 'active' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(provider.id);
          }}
        >
          {isFavorite ? '★ Favorito' : '☆ Agregar a favoritos'}
        </button>
      </div>
    </div>
  );
}

export default ProviderCard;