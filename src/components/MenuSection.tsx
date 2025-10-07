import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import FoodCard from "./FoodCard";

const categories = ["All", "Coffee", "Pizza", "Burgers", "Sandwiches", "Pastries", "Desserts"];

const menuItems = [
  {
    id: 1,
    name: "Espresso Macchiato",
    category: "Coffee",
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=800&q=80",
    originalPrice: 5.99,
    discountedPrice: 4.79,
    discount: 20,
  },
  {
    id: 2,
    name: "Margherita Pizza",
    category: "Pizza",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80",
    originalPrice: 14.99,
    discountedPrice: 11.99,
    discount: 20,
  },
  {
    id: 3,
    name: "Classic Cheeseburger",
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
    originalPrice: 12.99,
    discountedPrice: 9.74,
    discount: 25,
  },
  {
    id: 4,
    name: "Club Sandwich",
    category: "Sandwiches",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&q=80",
    originalPrice: 9.99,
    discountedPrice: 7.99,
    discount: 20,
  },
  {
    id: 5,
    name: "Chocolate Croissant",
    category: "Pastries",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80",
    originalPrice: 4.99,
    discountedPrice: 3.74,
    discount: 25,
  },
  {
    id: 6,
    name: "Tiramisu",
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80",
    originalPrice: 7.99,
    discountedPrice: 5.99,
    discount: 25,
  },
  {
    id: 7,
    name: "Cappuccino",
    category: "Coffee",
    image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=800&q=80",
    originalPrice: 4.99,
    discountedPrice: 3.99,
    discount: 20,
  },
  {
    id: 8,
    name: "Pepperoni Pizza",
    category: "Pizza",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&q=80",
    originalPrice: 16.99,
    discountedPrice: 12.74,
    discount: 25,
  },
  {
    id: 9,
    name: "Veggie Burger",
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=800&q=80",
    originalPrice: 11.99,
    discountedPrice: 9.59,
    discount: 20,
  },
];

const MenuSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">Our Menu</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully crafted selection of food and beverages
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search menu items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 rounded-full border-border focus-visible:ring-accent"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-6 transition-all ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-md hover:shadow-lg"
                  : "hover:bg-secondary"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No items found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuSection;
