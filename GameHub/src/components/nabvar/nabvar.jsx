import styles from './nabvar.module.css'

export function Nabvar({
  favoritesCount = 0,
  onOpenFavorites,
  userName = 'Alex Gamer',
}) {
  const handleScrollTo = (id) => (e) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
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
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Identidad visual / Logo GamesPark */}
        <a href="#inicio" className={styles.brand} onClick={handleScrollTo('inicio')}>
          <div className={styles.logoIcon}>
            <img
              src="/Console.png"
              alt="GamesPark Logo"
              className={styles.consoleImg}
              onError={(e) => {
                // Si la imagen no carga, mostramos el texto GP
                e.currentTarget.style.display = 'none'
              }}
            />
            <span aria-hidden="true">GP</span>
          </div>
          <span className={styles.brandName}>
            Games<span className={styles.accentGreen}>Park</span>
          </span>
        </a>

        {/* Menú de navegación */}
        <nav className={styles.navigation} aria-label="Navegación principal">
          <a
            href="#catalogo"
            className={styles.navLink}
            onClick={handleScrollTo('catalogo')}
          >
            Catálogo
          </a>
          <a
            href="#categorias"
            className={styles.navLink}
            onClick={handleScrollTo('categorias')}
          >
            Categorías
          </a>
          <a
            href="#favoritos"
            className={styles.navLink}
            onClick={handleFavoritesClick}
          >
            Mis Favoritos
          </a>
        </nav>

        {/* Controles de usuario y favoritos */}
        <div className={styles.controls}>
          {/* Botón de favoritos con contador interactivo */}
          <button
            className={styles.favoritesButton}
            onClick={handleFavoritesClick}
            aria-label={`Ver favoritos, actualmente tienes ${favoritesCount}`}
          >
            <span className={styles.heartIcon}>💚</span>
            <span>Favoritos</span>
            <span className={styles.favoritesCount} id="navbar-fav-count">
              {favoritesCount}
            </span>
          </button>

          {/* Perfil del usuario activo */}
          <div className={styles.userCard}>
            <div className={styles.userAvatar}>
              {userName
                .split(' ')
                .map((n) => n[0])
                .slice(0, 2)
                .join('')
                .toUpperCase()}
            </div>
            <div className={styles.userDetails}>
              <span className={styles.userName}>{userName}</span>
              <span className={styles.userStatus}>
                <span className={styles.statusDot} /> En línea
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Nabvar
