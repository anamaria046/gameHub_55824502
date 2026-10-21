import styles from './Footer.module.css'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className={styles.footer} id="contacto">
      <div className={styles.footerGlow} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Columna de Marca */}
          <div className={styles.brandCol}>
            <a href="#inicio" className={styles.brand} onClick={scrollToTop}>
              Games<span className={styles.brandGreen}>Park</span>
            </a>
            <p className={styles.tagline}>
              Tu plataforma definitiva para explorar los mejores videojuegos por categorías y
              gestionar tu colección de favoritos en un entorno gaming inmersivo.
            </p>
            <div className={styles.gamerBadge}>
              <span>⚡</span>
              <span>Comunidad Gamer Activa</span>
            </div>
          </div>

          {/* Columna de Navegación */}
          <div className={styles.linksCol}>
            <h4>Navegación</h4>
            <ul className={styles.linksList}>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#categorias">6 Categorías</a></li>
              <li><a href="#catalogo">Catálogo</a></li>
              <li><a href="#favoritos">Mis Favoritos</a></li>
            </ul>
          </div>

          {/* Columna de Créditos */}
          <div className={styles.creditsCol}>
            <h4>Créditos del Proyecto</h4>
            <p className={styles.creditsText}>
              Desarrollado para el proyecto <span className={styles.creditsHighlight}>GameHub</span>.
            </p>
            <p className={styles.creditsText}>
              Diseñado con arquitectura de componentes React, estilos modulares y una paleta visual en tonos verdes esmeralda.
            </p>
            <div className={styles.techPills}>
              <span className={styles.pill}>React 19</span>
              <span className={styles.pill}>Vite</span>
              <span className={styles.pill}>CSS Modules</span>
            </div>
          </div>
        </div>

        {/* Barra inferior de derechos y volver arriba */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} GamesPark. Todos los derechos reservados.
          </p>
          <button type="button" className={styles.backToTop} onClick={scrollToTop}>
            Volver arriba ↑
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer