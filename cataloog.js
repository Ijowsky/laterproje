// Полный каталог венков
const wreaths = [
  {
    id: 1,
    name: "Венок-сердце с белыми розами",
    price: 4500,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=400&auto=format&fit=crop",
    category: "Элитные",
    rating: 5,
    description: "Изысканный венок в форме сердца из белых роз с зеленой атласной лентой",
  },
  {
    id: 2,
    name: "Венок с серебряной лентой",
    price: 3800,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=400&auto=format&fit=crop",
    category: "Классические",
    rating: 5,
    description: "Торжественный венок с красными розами, белыми цветами и серебряной лентой",
  },
  {
    id: 3,
    name: "Венок с ирисами и розами",
    price: 4200,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=400&auto=format&fit=crop",
    category: "Элитные",
    rating: 5,
    description: "Элегантный венок с белыми розами и фиолетовыми ирисами в серебряном обрамлении",
  },
  {
    id: 4,
    name: "Венок с синими гвоздиками",
    price: 2800,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=400&auto=format&fit=crop",
    category: "Традиционные",
    rating: 4,
    description: "Классический венок с синими гвоздиками и белой лентой",
  },
  {
    id: 5,
    name: "Венок с красными розами и хризантемами",
    price: 3600,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=400&auto=format&fit=crop",
    category: "Классические",
    rating: 5,
    description: "Яркий венок с красными розами, белыми хризантемами и красной лентой",
  },
  {
    id: 6,
    name: "Венок с желтыми цветами",
    price: 3400,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=400&auto=format&fit=crop",
    category: "Сезонные",
    rating: 4,
    description: "Солнечный венок с желтыми и красными цветами в красном обрамлении",
  },
  {
    id: 7,
    name: "Венок с фиолетовыми гвоздиками",
    price: 4000,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=400&auto=format&fit=crop",
    category: "Элитные",
    rating: 5,
    description: "Роскошный венок с фиолетовыми гвоздиками и белыми лилиями",
  },
  {
    id: 8,
    name: "Венок-сердце с черной лентой",
    price: 5200,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=400&auto=format&fit=crop",
    category: "Элитные",
    rating: 5,
    description: "Траурный венок в форме сердца с красными гвоздиками и черной лентой",
  },
  {
    id: 9,
    name: "Венок-сердце с красными гвоздиками",
    price: 4800,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=400&auto=format&fit=crop",
    category: "Традиционные",
    rating: 5,
    description: "Классический венок-сердце с белыми розами и красными гвоздиками",
  },
  {
    id: 10,
    name: "Венок-сердце с красными розами",
    price: 5500,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=400&auto=format&fit=crop",
    category: "Элитные",
    rating: 5,
    description: "Роскошный венок-сердце с красными розами и белыми цветами в красном обрамлении",
  },
  {
    id: 11,
    name: "Классический венок с белыми лилиями",
    price: 3900,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=400&auto=format&fit=crop",
    category: "Классические",
    rating: 5,
    description: "Элегантный венок с белыми лилиями и зеленой листвой",
  },
  {
    id: 12,
    name: "Венок-сердце с белыми гвоздиками",
    price: 4300,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=400&auto=format&fit=crop",
    category: "Традиционные",
    rating: 5,
    description: "Нежный венок-сердце с белыми гвоздиками в красном обрамлении",
  },
  {
    id: 13,
    name: "Овальный венок 'Память'",
    price: 4900,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=400&auto=format&fit=crop",
    category: "Классические",
    rating: 5,
    description: "Элегантный овальный венок с белыми хризантемами и красными цветами в бордовом обрамлении",
  },
  {
    id: 14,
    name: "Овальный венок 'Солнечный'",
    price: 5300,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=400&auto=format&fit=crop",
    category: "Сезонные",
    rating: 5,
    description: "Яркий овальный венок с желтыми и красными гвоздиками в красном атласном обрамлении",
  },
  {
    id: 15,
    name: "Овальный венок 'Торжественный'",
    price: 6100,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=400&auto=format&fit=crop",
    category: "Элитные",
    rating: 5,
    description: "Роскошный овальный венок с красными гвоздиками и белыми лилиями в золотом обрамлении",
  },
  {
    id: 16,
    name: "Овальный венок 'Классика'",
    price: 5700,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=400&auto=format&fit=crop",
    category: "Классические",
    rating: 5,
    description: "Изысканный овальный венок с красными розами и белыми гвоздиками в золотом обрамлении",
  },
  {
    id: 17,
    name: "Овальный венок 'Роскошь'",
    price: 7200,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=400&auto=format&fit=crop",
    category: "Элитные",
    rating: 5,
    description: "Премиальный овальный венок с множеством красных роз и белыми цветами в золотом обрамлении",
  },
  {
    id: 18,
    name: "Овальный венок 'Золотой'",
    price: 6500,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=400&auto=format&fit=crop",
    category: "Элитные",
    rating: 5,
    description: "Роскошный овальный венок с желтыми розами и белыми каллами в золотом обрамлении",
  },
  {
    id: 19,
    name: "Овальный венок 'Весенний'",
    price: 5800,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=400&auto=format&fit=crop",
    category: "Сезонные",
    rating: 5,
    description: "Свежий овальный венок с белыми и желтыми цветами в зеленом атласном обрамлении",
  },
  {
    id: 20,
    name: "Овальный венок 'Контраст'",
    price: 5600,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=400&auto=format&fit=crop",
    category: "Элитные",
    rating: 5,
    description: "Стильный овальный венок с розовыми и желтыми розами в серебряном обрамлении",
  },
]

// Переменные для фильтрации
let filteredWreaths = [...wreaths]

// DOM элементы
const searchInput = document.getElementById("searchInput")
const categoryFilter = document.getElementById("categoryFilter")
const priceFilter = document.getElementById("priceFilter")
const catalogGrid = document.getElementById("catalogGrid")
const resultsCount = document.getElementById("resultsCount")

// Генерация звезд для рейтинга
function generateStars(rating) {
  let stars = ""
  for (let i = 0; i < rating; i++) {
    stars += '<i class="fas fa-star"></i>'
  }
  return stars
}

// Рендер карточки товара
function renderProductCard(wreath) {
  return `
    <div class="product-card">
      <div class="product-image">
        <img src="${wreath.image}" alt="${wreath.name}" loading="lazy" 
             onerror="this.src='/placeholder.svg?height=250&width=300'">
      </div>
      <div class="product-content">
        <span class="product-category">${wreath.category}</span>
        <h4 class="product-title">${wreath.name}</h4>
        <p class="product-description">${wreath.description}</p>
        <div class="product-rating">
          ${generateStars(wreath.rating)}
          <span>(${wreath.rating})</span>
        </div>
        <div class="product-price">${wreath.price} ₽</div>
      </div>
    </div>
  `
}

// Инициализация каталога
document.addEventListener("DOMContentLoaded", () => {
  console.log("🛍️ Инициализация каталога...")

  // Отображаем венки
  renderWreaths(filteredWreaths)
  updateResultsCount()

  console.log(`✅ Загружено ${wreaths.length} венков в каталог`)

  // Добавляем обработчики событий
  if (searchInput) searchInput.addEventListener("input", filterWreaths)
  if (categoryFilter) categoryFilter.addEventListener("change", filterWreaths)
  if (priceFilter) priceFilter.addEventListener("change", filterWreaths)
})

// Функция фильтрации венков
function filterWreaths() {
  const searchTerm = searchInput ? searchInput.value.toLowerCase() : ""
  const selectedCategory = categoryFilter ? categoryFilter.value : "all"
  const selectedPriceRange = priceFilter ? priceFilter.value : "all"

  filteredWreaths = wreaths.filter((wreath) => {
    const matchesSearch =
      wreath.name.toLowerCase().includes(searchTerm) || wreath.description.toLowerCase().includes(searchTerm)
    const matchesCategory = selectedCategory === "all" || wreath.category === selectedCategory

    let matchesPrice = true
    if (selectedPriceRange === "low") {
      matchesPrice = wreath.price < 3000
    } else if (selectedPriceRange === "medium") {
      matchesPrice = wreath.price >= 3000 && wreath.price < 5000
    } else if (selectedPriceRange === "high") {
      matchesPrice = wreath.price >= 5000
    }

    return matchesSearch && matchesCategory && matchesPrice
  })

  renderWreaths(filteredWreaths)
  updateResultsCount()

  console.log(`🔍 Фильтрация: найдено ${filteredWreaths.length} венков`)
}

// Функция рендеринга венков
function renderWreaths(wreathsToRender) {
  if (!catalogGrid) return

  if (wreathsToRender.length === 0) {
    catalogGrid.innerHTML = `
      <div class="no-results">
        <h3>По вашему запросу ничего не найдено</h3>
        <p>Попробуйте изменить параметры поиска или посмотрите все венки</p>
        <button class="btn btn-primary" onclick="resetFilters()">Сбросить фильтры</button>
      </div>
    `
    return
  }

  catalogGrid.innerHTML = wreathsToRender.map((wreath) => renderProductCard(wreath)).join("")

  // Повторно наблюдаем за новыми элементами для анимации
  const newCards = catalogGrid.querySelectorAll(".product-card")
  newCards.forEach((card, index) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(30px)"
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease"

    setTimeout(() => {
      card.style.opacity = "1"
      card.style.transform = "translateY(0)"
    }, index * 50)
  })
}

// Обновление счетчика результатов
function updateResultsCount() {
  if (!resultsCount) return

  const count = filteredWreaths.length
  let text = `Найдено ${count}`

  if (count === 1) {
    text += " венок"
  } else if (count >= 2 && count <= 4) {
    text += " венка"
  } else {
    text += " венков"
  }

  resultsCount.textContent = text
}

// Функция сброса фильтров
function resetFilters() {
  if (searchInput) searchInput.value = ""
  if (categoryFilter) categoryFilter.value = "all"
  if (priceFilter) priceFilter.value = "all"
  filterWreaths()
  console.log("🔄 Фильтры сброшены")
}
