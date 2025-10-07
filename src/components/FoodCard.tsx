import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";

interface FoodItem {
  id: number;
  name: string;
  category: string;
  image: string;
  originalPrice: number;
  discountedPrice: number;
  discount: number;
}

interface FoodCardProps {
  item: FoodItem;
}

const FoodCard = ({ item }: FoodCardProps) => {
  const handleOrder = () => {
    toast.success(`${item.name} added to cart!`, {
      description: `Price: $${item.discountedPrice.toFixed(2)}`,
    });
  };

  return (
    <div className="group relative bg-card rounded-2xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:-translate-y-1">
      {/* Discount Badge */}
      <Badge className="absolute top-4 right-4 z-10 bg-accent text-accent-foreground font-semibold px-3 py-1 shadow-lg">
        {item.discount}% OFF
      </Badge>

      {/* Image */}
      <div className="relative h-56 overflow-hidden bg-muted">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-3">
          <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
            {item.name}
          </h3>
          <p className="text-sm text-muted-foreground">{item.category}</p>
        </div>

        {/* Pricing */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl font-bold text-primary">
            ${item.discountedPrice.toFixed(2)}
          </span>
          <span className="text-sm text-muted-foreground line-through">
            ${item.originalPrice.toFixed(2)}
          </span>
        </div>

        {/* Order Button */}
        <Button
          onClick={handleOrder}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full shadow-md hover:shadow-lg transition-all group/btn"
        >
          <ShoppingCart className="h-4 w-4 mr-2 transition-transform group-hover/btn:scale-110" />
          Order Now
        </Button>
      </div>
    </div>
  );
};

export default FoodCard;
