import styles from './categories.module.css'

export const DEFAULT_CATEGORIES = [
  { id: 'todos', name: 'Todos', icon: '🎮', count: 6 },
  { id: 'accion', name: 'Acción', icon: '⚡', count: 1 },
  { id: 'aventura', name: 'Aventura', icon: '🧭', count: 1 },
  { id: 'estrategia', name: 'Estrategia', icon: '♟️', count: 1 },
  { id: 'carreras', name: 'Carreras', icon: '🏁', count: 1 },
  { id: 'rpg', name: 'RPG', icon: '⚔️', count: 1 },
  { id: 'casuales', name: 'Casuales', icon: '☁️', count: 1 },
]

export function Categories({
  selectedCategory = 'Todos',
  onSelectCategory,
  categories = DEFAULT_CATEGORIES,
}) {
  const handleCategoryClick = (categoryName) => {
    if (onSelectCategory) {
      onSelectCategory(categoryName)
    }

    // Scroll suave opcional al catálogo para ver los juegos filtrados
    const catalogElement = document.getElementById('catalogo')
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className={styles.categoriesSection} id="categorias" aria-label="Categorías de Videojuegos">
      <div className={styles.sectionHeader}>
        <span className={styles.subtitle}>EXPLORA POR GÉNERO</span>
        <h2 className={styles.title}>Nuestras 6 Categorías</h2>
        <p className={styles.description}>
          Filtra y encuentra rápidamente los videojuegos de GamesPark según tu estilo de juego favorito.
        </p>
      </div>

      {/* Filtro unificado de categorías */}
      <div className={styles.filterContainer} role="tablist" aria-label="Filtro por categoría">
        {categories.map((category) => {
          const isActive = selectedCategory === category.name

          return (
            <button
              key={category.id || category.name}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`${styles.pill} ${isActive ? styles.pillActive : ''}`}
              onClick={() => handleCategoryClick(category.name)}
            >
              <span className={styles.pillIcon} aria-hidden="true">
                {category.icon}
              </span>
              <span>{category.name}</span>
              <span className={styles.pillCount}>
                {category.count}
              </span>
            </button>
          )
        })}
      </div>

      {/* Indicador de categoría activa */}
      <div className={styles.activeInfo}>
        Mostrando:{' '}
        <span className={styles.activeHighlight}>
          {selectedCategory === 'Todos' ? 'Todos los videojuegos' : `Categoría: ${selectedCategory}`}
        </span>
      </div>
    </section>
  )
}

export default Categories
