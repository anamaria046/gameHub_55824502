import { useMemo } from 'react'
import GameCard from '../gameCard/gameCard'
import { gamesData as defaultGames } from '../../data/gamesData'
import styles from './catalog.module.css'

export function Catalog({
  games = defaultGames,
  selectedCategory = 'Todos',
  favorites = [],
  onToggleFavorite,
  onResetCategory,
}) {
  // Filtrado de videojuegos según la categoría seleccionada
  const filteredGames = useMemo(() => {
    if (selectedCategory === 'Todos') {
      return games
    }
    return games.filter((game) => game.category === selectedCategory)
  }, [games, selectedCategory])

  return (
    <section className={styles.catalogSection} id="catalogo">
      <div className={styles.headerRow}>
        <div>
          <span className={styles.subtitle}>CATÁLOGO OFICIAL</span>
          <h2 className={styles.title}>
            {selectedCategory === 'Todos'
              ? 'Títulos Disponibles'
              : `Juegos de ${selectedCategory}`}
          </h2>
        </div>

        <div className={styles.counterInfo}>
          Mostrando{' '}
          <span className={styles.counterHighlight}>{filteredGames.length}</span>{' '}
          de <span className={styles.counterHighlight}>{games.length}</span> videojuegos
        </div>
      </div>

      {/* Grid de Videojuegos */}
      {filteredGames.length > 0 ? (
        <div className={styles.gamesGrid}>
          {filteredGames.map((game) => {
            const isFav = favorites.some((fav) => fav.id === game.id)

            return (
              <GameCard
                key={game.id}
                game={game}
                isFavorite={isFav}
                onToggleFavorite={onToggleFavorite}
              />
            )
          })}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <span className={styles.emptyIcon}>🎮</span>
          <h3 className={styles.emptyTitle}>No hay juegos en esta categoría</h3>
          <p className={styles.emptyText}>
            No encontramos títulos disponibles para &quot;{selectedCategory}&quot;.
          </p>
          {onResetCategory && (
            <button
              type="button"
              className={styles.btnResetFilter}
              onClick={() => onResetCategory('Todos')}
            >
              Ver todos los juegos
            </button>
          )}
        </div>
      )}
    </section>
  )
}

export default Catalog
