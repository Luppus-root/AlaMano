import React, { useState } from 'react';
import { mockProviders, categories } from './data/mockProviders';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import ProviderCard from './components/ProviderCard';
import ProviderDetail from './components/ProviderDetail';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const filteredProviders = mockProviders.filter(provider => {
    const matchesSearch = provider.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         provider.keywords.some(keyword => 
                           keyword.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = !selectedCategory || provider.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFavorite = (providerId) => {
    if (favorites.includes(providerId)) {
      setFavorites(favorites.filter(id => id !== providerId));
    } else {
      setFavorites([...favorites, providerId]);
    }
  };

  return (
    <div className="app">
      <Header />
      
      {!selectedProvider ? (
        <>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <CategoryFilter 
            categories={categories} 
            selectedCategory={selectedCategory} 
            setSelectedCategory={setSelectedCategory} 
          />
          
          <div className="providers-list">
            {filteredProviders.map(provider => (
              <ProviderCard 
                key={provider.id} 
                provider={provider} 
                isFavorite={favorites.includes(provider.id)}
                onToggleFavorite={toggleFavorite}
                onSelectProvider={setSelectedProvider}
              />
            ))}
          </div>
        </>
      ) : (
        <ProviderDetail 
          provider={selectedProvider} 
          onBack={() => setSelectedProvider(null)}
          isFavorite={favorites.includes(selectedProvider.id)}
          onToggleFavorite={toggleFavorite}
        />
      )}
    </div>
  );
}

export default App;