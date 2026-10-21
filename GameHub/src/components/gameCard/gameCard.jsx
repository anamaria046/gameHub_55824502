import styles from './gameCard.module.css'

export function GameCard({
  game,
  isFavorite = false,
  onToggleFavorite,
}) {
  if (!game) return null

  const handleFavoriteClick = (e) => {
    e.stopPropagation()
    if (onToggleFavorite) {
      onToggleFavorite(game)
    }
  }

  return (
    <article className={styles.card} aria-label={`Ficha de ${game.title}`}>
      {/* Contenedor de Imagen y Badges */}
      <div className={styles.mediaWrapper}>
        <img
          src={game.image}
          alt={game.title}
          className={styles.image}
          loading="lazy"
        />

        {/* Categoría del videojuego */}
        <span className={styles.categoryBadge}>{game.category}</span>

        {/* Botón flotante de favoritos con corazón */}
        <button
          type="button"
          className={`${styles.favIconBtn} ${isFavorite ? styles.favActive : ''}`}
          onClick={handleFavoriteClick}
          aria-label={
            isFavorite
              ? `Eliminar ${game.title} de favoritos`
              : `Añadir ${game.title} a favoritos`
          }
          title={isFavorite ? 'Quitar de favoritos' : 'Añadir a favoritos'}
        >
          <span aria-hidden="true">{isFavorite ? '💚' : '🤍'}</span>
        </button>
      </div>

      {/* Contenido descriptivo del juego */}
      <div className={styles.content}>
        <div className={styles.headerRow}>
          <h3 className={styles.title}>{game.title}</h3>
          <span className={styles.rating} title={`Calificación: ${game.rating} de 5 estrellas`}>
            ★ {game.rating}
          </span>
        </div>

        {/* Descripción orientada al usuario */}
        <p className={styles.description}>{game.description}</p>

        {/* Pie de la tarjeta con Modo y Botón de acción */}
        <div className={styles.footerRow}>
          <span className={styles.modeInfo}>{game.mode}</span>

          <button
            type="button"
            className={`${styles.btnFavoriteToggle} ${
              isFavorite ? styles.btnFavoriteToggleActive : ''
            }`}
            onClick={handleFavoriteClick}
          >
            <span aria-hidden="true">{isFavorite ? '✓' : '+'}</span>
            <span>{isFavorite ? 'En Favoritos' : 'Favorito'}</span>
          </button>
        </div>
      </div>
    </article>
  )
}

export default GameCard
