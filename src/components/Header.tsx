import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, User } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-sage-green to-fresh-green rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">GreenHands</h1>
              <p className="text-xs text-muted-foreground">Empowering Communities</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#products" className="text-foreground hover:text-primary transition-colors">
              Products
            </a>
            <a href="#stories" className="text-foreground hover:text-primary transition-colors">
              Stories
            </a>
            <a href="#impact" className="text-foreground hover:text-primary transition-colors">
              Our Impact
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <User className="w-4 h-4 mr-2" />
              Sign In
            </Button>
            <Button variant="hero" size="sm">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;