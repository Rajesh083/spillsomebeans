export type DietaryTag = 'vegetarian' | 'vegan' | 'gluten-free' | 'dairy-free' | 'nut-free'

export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  dietaryTags: DietaryTag[]
  image?: string
}

export interface MenuCategory {
  id: string
  name: string
  description: string
  items: MenuItem[]
}

export const menuData: MenuCategory[] = [
  {
    id: 'appetizers',
    name: 'Appetizers',
    description: 'Start your meal with our delicious selection of starters',
    items: [
      {
        id: 'bruschetta',
        name: 'Bruschetta Trio',
        description: 'Toasted bread with tomato, basil, and olive oil. Choose from classic, olive spread, or white bean.',
        price: 8.99,
        dietaryTags: ['vegetarian', 'vegan'],
      },
      {
        id: 'caprese',
        name: 'Caprese Skewers',
        description: 'Fresh mozzarella, cherry tomatoes, and basil with balsamic glaze',
        price: 9.99,
        dietaryTags: ['vegetarian', 'gluten-free'],
      },
      {
        id: 'calamari',
        name: 'Crispy Calamari',
        description: 'Tender squid rings, lightly fried and served with marinara sauce',
        price: 10.99,
        dietaryTags: [],
      },
      {
        id: 'flatbread',
        name: 'Herb Flatbread',
        description: 'Crispy flatbread with rosemary, garlic, and sea salt',
        price: 7.99,
        dietaryTags: ['vegetarian', 'dairy-free'],
      },
      {
        id: 'stuffed-mushrooms',
        name: 'Stuffed Mushrooms',
        description: 'Button mushrooms filled with herb cream cheese and breadcrumbs',
        price: 8.99,
        dietaryTags: ['vegetarian'],
      },
    ],
  },
  {
    id: 'salads',
    name: 'Fresh Salads',
    description: 'Crisp, vibrant salads made with the freshest seasonal ingredients',
    items: [
      {
        id: 'caesar',
        name: 'Classic Caesar Salad',
        description: 'Romaine lettuce, parmesan, croutons, and house-made Caesar dressing',
        price: 11.99,
        dietaryTags: ['vegetarian'],
      },
      {
        id: 'greek',
        name: 'Greek Salad',
        description: 'Mixed greens, feta cheese, olives, tomatoes, and red onions with olive oil vinaigrette',
        price: 12.99,
        dietaryTags: ['vegetarian', 'gluten-free', 'nut-free'],
      },
      {
        id: 'quinoa',
        name: 'Superfood Quinoa Salad',
        description: 'Quinoa, kale, roasted beets, pumpkin seeds, and lemon tahini dressing',
        price: 13.99,
        dietaryTags: ['vegetarian', 'vegan', 'gluten-free'],
      },
      {
        id: 'harvest',
        name: 'Harvest Salad',
        description: 'Mixed greens, roasted squash, cranberries, walnuts, and goat cheese with vinaigrette',
        price: 12.99,
        dietaryTags: ['vegetarian'],
      },
      {
        id: 'shrimp-salad',
        name: 'Grilled Shrimp Salad',
        description: 'Butter lettuce, avocado, mango, crispy shallots, and cilantro lime dressing',
        price: 14.99,
        dietaryTags: ['dairy-free', 'gluten-free', 'nut-free'],
      },
    ],
  },
  {
    id: 'mains',
    name: 'Main Courses',
    description: 'Hearty, satisfying entrees crafted with care',
    items: [
      {
        id: 'grilled-salmon',
        name: 'Pan-Seared Salmon',
        description: 'Atlantic salmon fillet with herb butter, served with roasted vegetables and fingerling potatoes',
        price: 22.99,
        dietaryTags: ['gluten-free', 'dairy-free'],
      },
      {
        id: 'ribeye',
        name: 'Grilled Ribeye Steak',
        description: '12 oz premium ribeye with compound butter, seasonal vegetables, and truffle mashed potatoes',
        price: 28.99,
        dietaryTags: ['gluten-free'],
      },
      {
        id: 'pasta-primavera',
        name: 'Pasta Primavera',
        description: 'Fresh seasonal vegetables tossed with al dente pasta and light garlic olive oil',
        price: 14.99,
        dietaryTags: ['vegetarian', 'dairy-free'],
      },
      {
        id: 'risotto-mushroom',
        name: 'Mushroom Risotto',
        description: 'Creamy Arborio rice with mixed mushrooms, white wine, parmesan, and black truffle oil',
        price: 16.99,
        dietaryTags: ['vegetarian', 'gluten-free'],
      },
      {
        id: 'chicken-piccata',
        name: 'Chicken Piccata',
        description: 'Tender chicken breast with capers, lemon butter sauce, and garlic spinach',
        price: 18.99,
        dietaryTags: ['gluten-free', 'dairy-free'],
      },
      {
        id: 'vegetable-stir-fry',
        name: 'Vegetable Stir-Fry',
        description: 'Seasonal vegetables in a light soy ginger sauce, served over jasmine rice',
        price: 13.99,
        dietaryTags: ['vegetarian', 'vegan', 'dairy-free'],
      },
    ],
  },
  {
    id: 'desserts',
    name: 'Desserts',
    description: 'Sweet endings to complete your dining experience',
    items: [
      {
        id: 'tiramisu',
        name: 'Traditional Tiramisu',
        description: 'Layers of coffee-soaked ladyfingers and mascarpone cream, dusted with cocoa',
        price: 7.99,
        dietaryTags: ['vegetarian'],
      },
      {
        id: 'panna-cotta',
        name: 'Vanilla Panna Cotta',
        description: 'Silky smooth vanilla cream with fresh berry compote and mint garnish',
        price: 7.99,
        dietaryTags: ['vegetarian', 'gluten-free'],
      },
      {
        id: 'chocolate-cake',
        name: 'Decadent Chocolate Cake',
        description: 'Rich dark chocolate cake with chocolate ganache and fresh raspberries',
        price: 8.99,
        dietaryTags: ['vegetarian'],
      },
      {
        id: 'lemon-tart',
        name: 'Lemon Tart',
        description: 'Crispy pastry shell filled with silky lemon curd and topped with Italian meringue',
        price: 7.99,
        dietaryTags: ['vegetarian'],
      },
      {
        id: 'fruit-sorbet',
        name: 'Seasonal Fruit Sorbet',
        description: 'Refreshing house-made sorbet in rotating seasonal flavors',
        price: 6.99,
        dietaryTags: ['vegan', 'gluten-free', 'dairy-free'],
      },
    ],
  },
  {
    id: 'beverages',
    name: 'Beverages',
    description: 'Quench your thirst with our selection of drinks',
    items: [
      {
        id: 'fresh-juice',
        name: 'Fresh Pressed Juice',
        description: 'Seasonal fresh-pressed juices - ask your server for today\'s selections',
        price: 5.99,
        dietaryTags: ['vegan', 'gluten-free', 'dairy-free'],
      },
      {
        id: 'smoothie',
        name: 'Green Smoothie',
        description: 'Spinach, mango, banana, coconut milk, and chia seeds',
        price: 6.99,
        dietaryTags: ['vegetarian', 'vegan', 'gluten-free'],
      },
      {
        id: 'iced-tea',
        name: 'Iced Tea Selection',
        description: 'Choice of regular, herbal, or specialty flavored iced teas',
        price: 3.99,
        dietaryTags: ['vegan', 'gluten-free', 'dairy-free'],
      },
      {
        id: 'espresso',
        name: 'Espresso Drinks',
        description: 'Cappuccino, latte, macchiato, or americano made with premium espresso',
        price: 4.99,
        dietaryTags: ['vegetarian'],
      },
      {
        id: 'wine-selection',
        name: 'Wine Selection',
        description: 'Curated selection of red, white, and rosé wines by the glass or bottle',
        price: 8.99,
        dietaryTags: ['vegan', 'gluten-free', 'dairy-free'],
      },
    ],
  },
]

export const dietaryTagColors: Record<DietaryTag, string> = {
  vegetarian: 'bg-green-100 text-green-800',
  vegan: 'bg-emerald-100 text-emerald-800',
  'gluten-free': 'bg-amber-100 text-amber-800',
  'dairy-free': 'bg-blue-100 text-blue-800',
  'nut-free': 'bg-purple-100 text-purple-800',
}
