import { useState } from 'react'
import Nabvar from './components/nabvar/nabvar'
import Hero from './components/hero/hero'
import Categories from './components/categories/categories'
import Catalog from './components/catalog/catalog'
import Favorites from './components/favorites/favorites'
import Footer from './components/footer/footer'
import gamesData from './data/gamesData'
import './App.css'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  // Inicializamos con un favorito para que el usuario visualice la funcionalidad de inmediato
  const [favorites, setFavorites] = useState([gamesData[0]])
  const [user] = useState({
    name: 'Alex Gamer',
    status: 'En línea',
  })

  // Alternar favorito (agregar si no existe, remover si ya está)
  const handleToggleFavorite = (game) => {
    setFavorites((prevFavorites) => {
      const exists = prevFavorites.some((fav) => fav.id === game.id)
      if (exists) {
        return prevFavorites.filter((fav) => fav.id !== game.id)
      }
      return [...prevFavorites, game]
    })
  }

  // Remover un juego específico de favoritos
  const handleRemoveFavorite = (game) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((fav) => fav.id !== game.id)
    )
  }

  // Vaciar todos los favoritos
  const handleClearFavorites = () => {
    setFavorites([])
  }

  // Desplazamiento suave hacia cualquier sección
  const handleScrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="appWrapper">
      {/* 1. Encabezado / Navbar con GamesPark, usuario y contador de favoritos */}
      <Nabvar
        favoritesCount={favorites.length}
        userName={user.name}
        onOpenFavorites={() => handleScrollTo('favoritos')}
      />

      <main className="mainContent">
        {/* 2. Hero con título GamesPark, descripción y llamado a la acción (CTA) */}
        <Hero
          favoritesCount={favorites.length}
          onExplore={() => handleScrollTo('catalogo')}
          onOpenFavorites={() => handleScrollTo('favoritos')}
        />

        <div className="sectionDivider" />

        {/* 3. Filtro interactivo de 6 Categorías */}
        <Categories
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* 4. Catálogo de Videojuegos con los 6 juegos */}
        <Catalog
          games={gamesData}
          selectedCategory={selectedCategory}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
          onResetCategory={setSelectedCategory}
        />

        <div className="sectionDivider" />

        {/* 5. Lista de Favoritos del Usuario con contador dinámico */}
        <Favorites
          favorites={favorites}
          onRemoveFavorite={handleRemoveFavorite}
          onClearAll={handleClearFavorites}
          onExploreCatalog={() => handleScrollTo('catalogo')}
        />
      </main>

      {/* 6. Pie de Página y Créditos del Proyecto */}
      <Footer />
    </div>
  )
}

export default App
