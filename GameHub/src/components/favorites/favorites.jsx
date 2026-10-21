import styles from './favorites.module.css'

export function Favorites({
  favorites = [],
  onRemoveFavorite,
  onClearAll,
  onExploreCatalog,
}) {
  const handleScrollToCatalog = (e) => {
    e.preventDefault()
    if (onExploreCatalog) {
      onExploreCatalog()
    } else {
      const el = document.getElementById('catalogo')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className={styles.favoritesSection} id="favoritos" aria-label="Juegos Favoritos">
      <div className={styles.headerRow}>
        <div>
          <span className={styles.subtitle}>COLECCIÓN PERSONAL</span>
          <h2 className={styles.title}>
            <span>💚</span> Mis Videojuegos Favoritos
          </h2>
        </div>

        <div className={styles.counterBadge}>
          <span>Total Favoritos:</span>
          <span className={styles.counterNumber}>{favorites.length}</span>
        </div>

        {favorites.length > 0 && onClearAll && (
          <button
            type="button"
            className={styles.clearAllBtn}
            onClick={onClearAll}
            title="Vaciar toda la lista de favoritos"
          >
            Vaciar lista
          </button>
        )}
      </div>

      {favorites.length > 0 ? (
        <div className={styles.favoritesGrid}>
          {favorites.map((game) => (
            <article key={game.id} className={styles.favCard}>
              <div className={styles.favMedia}>
                <img src={game.image} alt={game.title} className={styles.favImg} />
                <span className={styles.favCategory}>{game.category}</span>
              </div>
              <div className={styles.favBody}>
                <div className={styles.favTitleRow}>
                  <h3 className={styles.favTitle}>{game.title}</h3>
                  <span className={styles.favRating}>★ {game.rating}</span>
                </div>
                <p className={styles.favDesc}>{game.description}</p>
                <div className={styles.favActions}>
                  <button
                    type="button"
                    className={styles.btnRemoveFav}
                    onClick={() => onRemoveFavorite && onRemoveFavorite(game)}
                  >
                    ✕ Quitar de Favoritos
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className={styles.emptyContainer}>
          <span className={styles.emptyHeart} aria-hidden="true">💚</span>
          <h3 className={styles.emptyTitle}>Aún no tienes favoritos guardados</h3>
          <p className={styles.emptyText}>
            Explora las 6 categorías de nuestro catálogo y haz clic en el icono de corazón
            de cualquier videojuego para guardarlo aquí.
          </p>
          <a
            href="#catalogo"
            className={styles.btnExplore}
            onClick={handleScrollToCatalog}
          >
            <span>Ir al Catálogo</span>
            <span>→</span>
          </a>
        </div>
      )}
    </section>
  )
}

export default Favorites
