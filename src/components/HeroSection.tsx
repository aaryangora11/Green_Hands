import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Heart, Users } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <div className="flex items-center space-x-2 mb-6">
            <div className="flex items-center space-x-1">
              <Heart className="w-5 h-5 text-impact-orange" />
              <Leaf className="w-5 h-5 text-nature-green" />
              <Users className="w-5 h-5 text-sage-green" />
            </div>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Sustainable • Empowering • Meaningful
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Handcrafted with
            <span className="text-impact-orange"> Purpose</span>,
            Made with <span className="text-nature-green">Love</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Every product tells a story of resilience, sustainability, and hope. 
            Support marginalized communities while choosing eco-friendly, 
            handmade paper products that make a difference.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" className="group">
              Shop Products
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Learn About Our Mission
            </Button>
          </div>

          {/* Impact Stats */}
          <div className="mt-12 grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Artisans Supported</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-nature-green mb-1">10K+</div>
              <div className="text-sm text-muted-foreground">Products Sold</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-impact-orange mb-1">2M+</div>
              <div className="text-sm text-muted-foreground">Papers Recycled</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;