import styles from './hero.module.css'

export function Hero({
  favoritesCount = 0,
  onExplore,
  onOpenFavorites,
}) {
  const handleScrollTo = (id) => (e) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleExploreClick = (e) => {
    if (onExplore) {
      e.preventDefault()
      onExplore()
    } else {
      handleScrollTo('catalogo')(e)
    }
  }

  const handleFavoritesClick = (e) => {
    if (onOpenFavorites) {
      e.preventDefault()
      onOpenFavorites()
    } else {
      handleScrollTo('favoritos')(e)
    }
  }

  return (
    <section className={styles.heroSection} id="inicio">
      {/* Luz ambiental verde */}
      <div className={styles.glowAmbient} aria-hidden="true" />

      <div className={styles.container}>
        {/* Badge superior */}
        <div className={styles.badge}>
          <span className={styles.badgeIcon}>🎮</span>
          <span>EL PORTAL GAMER DEFINITIVO</span>
        </div>

        {/* Título principal con GamesPark destacado */}
        <h1 className={styles.title}>
          Tu próximo videojuego favorito está en{' '}
          <span className={styles.highlightGreen}>GamesPark</span>
        </h1>

        {/* Texto descriptivo de la página */}
        <p className={styles.description}>
          Sumérgete en nuestro catálogo organizado en 6 categorías exclusivas.
          Explora los títulos más destacados, guárdalos en tu lista personal de favoritos
          y vive la experiencia al máximo.
        </p>

        {/* Botones de Llamado a la Acción (CTA) */}
        <div className={styles.actions}>
          <a
            href="#catalogo"
            className={styles.btnPrimary}
            onClick={handleExploreClick}
          >
            <span>Explorar Catálogo</span>
            <span className={styles.btnArrow}>→</span>
          </a>

          <a
            href="#favoritos"
            className={styles.btnSecondary}
            onClick={handleFavoritesClick}
          >
            <span>💚 Mis Favoritos</span>
            <span className={styles.counterBadge}>{favoritesCount}</span>
          </a>
        </div>

        {/* Barra de métricas / datos gamer */}
        <div className={styles.statsStrip}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>6</span>
            <span className={styles.statLabel}>Categorías Épicas</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>+8.2k</span>
            <span className={styles.statLabel}>Jugadores Activos</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>4.9 ★</span>
            <span className={styles.statLabel}>Valoración Media</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
