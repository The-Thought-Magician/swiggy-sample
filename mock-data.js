// Mock Data for Swiggy Companion App
const mockData = {
  restaurants: [
    {
      id: 1,
      name: "Biryani Blues",
      location: "Koramangala",
      cuisines: ["Biryani", "North Indian", "Mughlai"],
      rating: 4.5,
      avgCost: 350,
      deliveryEta: "25-30 mins",
      tags: ["Bestseller", "Premium"],
      image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=400&h=300&fit=crop",
      description: "Authentic Hyderabadi biryanis with aromatic basmati rice and tender meat"
    },
    {
      id: 2,
      name: "Green Bowl",
      location: "Indiranagar",
      cuisines: ["Healthy", "Salads", "Continental"],
      rating: 4.2,
      avgCost: 250,
      deliveryEta: "20-25 mins",
      tags: ["Healthy", "Veg"],
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
      description: "Fresh, healthy meals with organic ingredients and customizable bowls"
    },
    {
      id: 3,
      name: "Spice Route",
      location: "BTM Layout",
      cuisines: ["South Indian", "Kerala", "Tamil"],
      rating: 4.7,
      avgCost: 200,
      deliveryEta: "15-20 mins",
      tags: ["Authentic", "Spicy"],
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop",
      description: "Traditional South Indian flavors with authentic spices and preparations"
    },
    {
      id: 4,
      name: "Pizza Corner",
      location: "Koramangala",
      cuisines: ["Italian", "Continental", "Fast Food"],
      rating: 4.1,
      avgCost: 400,
      deliveryEta: "30-35 mins",
      tags: ["Comfort Food", "Late Night"],
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop",
      description: "Authentic wood-fired pizzas with fresh toppings and gooey cheese"
    },
    {
      id: 5,
      name: "Taco Bell",
      location: "Indiranagar",
      cuisines: ["Mexican", "Fast Food", "Tex-Mex"],
      rating: 3.9,
      avgCost: 300,
      deliveryEta: "25-30 mins",
      tags: ["Quick Bites", "Spicy"],
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
      description: "Mexican-inspired quick bites with bold flavors and fresh ingredients"
    }
  ],

  dishes: [
    {
      id: 1,
      restaurantId: 1,
      name: "Hyderabadi Chicken Biryani",
      description: "Aromatic basmati rice cooked with tender chicken and traditional spices",
      price: 380,
      rating: 4.6,
      veg: false,
      tags: ["Bestseller", "Spicy", "Premium"],
      availability: true,
      image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      restaurantId: 2,
      name: "Mediterranean Bowl",
      description: "Fresh greens with quinoa, feta cheese, olives and tahini dressing",
      price: 280,
      rating: 4.3,
      veg: true,
      tags: ["Healthy", "Protein Rich", "Mediterranean"],
      availability: true,
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      restaurantId: 3,
      name: "Masala Dosa",
      description: "Crispy dosa filled with spiced potato curry, served with chutneys and sambar",
      price: 120,
      rating: 4.8,
      veg: true,
      tags: ["Traditional", "South Indian", "Crispy"],
      availability: true,
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      restaurantId: 1,
      name: "Mutton Biryani",
      description: "Tender mutton pieces slow-cooked with fragrant basmati rice",
      price: 450,
      rating: 4.5,
      veg: false,
      tags: ["Premium", "Spicy", "Slow Cooked"],
      availability: true,
      image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      restaurantId: 4,
      name: "Margherita Pizza",
      description: "Classic pizza with fresh mozzarella, tomato sauce, and basil",
      price: 320,
      rating: 4.2,
      veg: true,
      tags: ["Classic", "Cheesy", "Italian"],
      availability: true,
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      restaurantId: 5,
      name: "Crunchwrap Supreme",
      description: "Crispy tortilla wrap with seasoned beef, lettuce, tomatoes, and sauce",
      price: 250,
      rating: 4.0,
      veg: false,
      tags: ["Crunchy", "Spicy", "Mexican"],
      availability: true,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop"
    },
    {
      id: 7,
      restaurantId: 2,
      name: "Quinoa Power Bowl",
      description: "Nutritious quinoa bowl with roasted vegetables, nuts, and tahini dressing",
      price: 320,
      rating: 4.4,
      veg: true,
      tags: ["Healthy", "Protein Rich", "Gluten Free"],
      availability: true,
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
    },
    {
      id: 8,
      restaurantId: 3,
      name: "Idli Sambar",
      description: "Soft steamed rice cakes served with lentil curry and coconut chutney",
      price: 80,
      rating: 4.6,
      veg: true,
      tags: ["Traditional", "South Indian", "Light"],
      availability: true,
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop"
    }
  ],

  user: {
    id: 1,
    name: "Raj Kumar",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    preferences: {
      cuisines: ["North Indian", "South Indian", "Chinese"],
      dietary: ["Non-Veg"],
      spiceLevel: 3,
      budget: [100, 500]
    },
    favorites: {
      restaurants: [1, 3],
      items: [1, 3]
    },
    history: [
      { id: 1, type: "dish", timestamp: "2024-01-15T10:30:00Z" },
      { id: 2, type: "dish", timestamp: "2024-01-14T19:45:00Z" }
    ],
    badges: [1, 2],
    stats: {
      totalOrders: 47,
      favoritesCount: 12,
      badgesEarned: 2
    }
  },

  badges: [
    {
      id: 1,
      areaId: "koramangala",
      name: "Koramangala Explorer",
      description: "Tried 5 different restaurants in Koramangala",
      icon: "🏆",
      criteria: {
        requiredRestaurants: ["Biryani Blues", "Cafe Coffee Day", "Toit", "Social", "Hard Rock Cafe"],
        threshold: 5
      },
      progress: { completed: 5, total: 5 },
      earned: true
    },
    {
      id: 2,
      areaId: "indiranagar",
      name: "Health Conscious",
      description: "Ordered 10 healthy meals",
      icon: "🥗",
      criteria: {
        requiredRestaurants: [],
        threshold: 10
      },
      progress: { completed: 10, total: 10 },
      earned: true
    },
    {
      id: 3,
      areaId: "btm",
      name: "BTM Foodie",
      description: "Explore 3 restaurants in BTM Layout",
      icon: "🍽️",
      criteria: {
        requiredRestaurants: ["Spice Route", "MTR", "Vidyarthi Bhavan"],
        threshold: 3
      },
      progress: { completed: 1, total: 3 },
      earned: false
    },
    {
      id: 4,
      areaId: "bangalore",
      name: "Biryani Master",
      description: "Try biryanis from 5 different places",
      icon: "🍚",
      criteria: {
        requiredRestaurants: ["Biryani Blues", "Paradise Biryani", "Meghana Foods", "Nagarjuna", "Empire Restaurant"],
        threshold: 5
      },
      progress: { completed: 2, total: 5 },
      earned: false
    },
    {
      id: 5,
      areaId: "bangalore",
      name: "Night Owl",
      description: "Order food after 11 PM - 5 times",
      icon: "🦉",
      criteria: {
        requiredRestaurants: [],
        threshold: 5
      },
      progress: { completed: 3, total: 5 },
      earned: false
    },
    {
      id: 6,
      areaId: "bangalore",
      name: "Weekend Warrior",
      description: "Order food every weekend for a month",
      icon: "🏅",
      criteria: {
        requiredRestaurants: [],
        threshold: 8
      },
      progress: { completed: 6, total: 8 },
      earned: false
    },
    {
      id: 7,
      areaId: "bangalore",
      name: "Spice Lover",
      description: "Order spicy dishes 10 times",
      icon: "🌶️",
      criteria: {
        requiredRestaurants: [],
        threshold: 10
      },
      progress: { completed: 7, total: 10 },
      earned: false
    },
    {
      id: 8,
      areaId: "koramangala",
      name: "Dessert Specialist",
      description: "Try desserts from 3 places in Koramangala",
      icon: "🍰",
      criteria: {
        requiredRestaurants: ["Corner House", "Naturals", "Baskin Robbins"],
        threshold: 3
      },
      progress: { completed: 0, total: 3 },
      earned: false
    }
  ],

  reviews: [
    {
      id: 1,
      restaurantId: 1,
      source: "Google",
      excerpt: "Amazing biryani! The flavors are authentic and the portion size is generous.",
      rating: 5,
      author: "Priya S.",
      url: "#"
    },
    {
      id: 2,
      restaurantId: 2,
      source: "Google",
      excerpt: "Great healthy options. Fresh ingredients and good presentation.",
      rating: 4,
      author: "Amit K.",
      url: "#"
    },
    {
      id: 3,
      restaurantId: 3,
      source: "Google",
      excerpt: "Best dosa in the area! Crispy and served hot with delicious chutneys.",
      rating: 5,
      author: "Lakshmi R.",
      url: "#"
    }
  ],

  chatMessages: [
    {
      id: 1,
      type: "user",
      content: "Show me spicy biryani options under ₹400",
      timestamp: "2024-01-15T12:30:00Z"
    },
    {
      id: 2,
      type: "ai",
      content: "I found some great spicy biryani options for you! Here are the top recommendations:",
      timestamp: "2024-01-15T12:30:02Z",
      recommendations: [1, 4]
    },
    {
      id: 3,
      type: "user",
      content: "What about healthy options?",
      timestamp: "2024-01-15T12:32:00Z"
    },
    {
      id: 4,
      type: "ai",
      content: "Here are some healthy meal options that align with your preferences:",
      timestamp: "2024-01-15T12:32:02Z",
      recommendations: [2]
    }
  ],

  areas: [
    {
      id: "koramangala",
      name: "Koramangala",
      restaurants: ["Biryani Blues", "Cafe Coffee Day", "Toit", "Social", "Hard Rock Cafe"],
      description: "Trendy area with diverse dining options"
    },
    {
      id: "indiranagar",
      name: "Indiranagar",
      restaurants: ["Green Bowl", "Smoke House Deli", "Barbeque Nation"],
      description: "Upscale neighborhood with premium restaurants"
    },
    {
      id: "btm",
      name: "BTM Layout",
      restaurants: ["Spice Route", "MTR", "Vidyarthi Bhavan"],
      description: "Traditional South Indian food hub"
    }
  ]
};

// Helper functions
const mockAPI = {
  getRestaurants: () => mockData.restaurants,
  getDishes: () => mockData.dishes,
  getRestaurantById: (id) => mockData.restaurants.find(r => r.id === parseInt(id)),
  getDishById: (id) => mockData.dishes.find(d => d.id === parseInt(id)),
  getDishesByRestaurant: (restaurantId) => mockData.dishes.filter(d => d.restaurantId === parseInt(restaurantId)),
  getUser: () => mockData.user,
  getBadges: () => mockData.badges,
  getReviews: (restaurantId) => mockData.reviews.filter(r => r.restaurantId === parseInt(restaurantId)),
  getChatMessages: () => mockData.chatMessages,
  getFavoriteRestaurants: () => {
    const user = mockData.user;
    return mockData.restaurants.filter(r => user.favorites.restaurants.includes(r.id));
  },
  getFavoriteDishes: () => {
    const user = mockData.user;
    return mockData.dishes.filter(d => user.favorites.items.includes(d.id));
  },
  searchDishes: (query, filters = {}) => {
    let results = mockData.dishes;

    if (query) {
      results = results.filter(dish =>
        dish.name.toLowerCase().includes(query.toLowerCase()) ||
        dish.description.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (filters.veg !== undefined) {
      results = results.filter(dish => dish.veg === filters.veg);
    }

    if (filters.maxPrice) {
      results = results.filter(dish => dish.price <= filters.maxPrice);
    }

    if (filters.minRating) {
      results = results.filter(dish => dish.rating >= filters.minRating);
    }

    return results;
  }
};

// Make it available globally
if (typeof window !== 'undefined') {
  window.mockData = mockData;
  window.mockAPI = mockAPI;
}