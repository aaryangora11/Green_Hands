import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Quote, ArrowRight } from "lucide-react";
import artisanImage from "@/assets/artisan-story.jpg";

const stories = [
  {
    id: 1,
    name: "Maria Rodriguez",
    role: "War Widow & Artisan",
    image: artisanImage,
    quote: "Creating these paper products has given me hope and a way to support my family with dignity. Every notebook I make carries my story of resilience.",
    products: "Journals & Notebooks",
    yearsActive: "3 years",
    impact: "Supported 2 children through education"
  },
  {
    id: 2,
    name: "James Mitchell",
    role: "Ex-Military Veteran",
    image: artisanImage,
    quote: "This craft has become my therapy. Working with my hands helps me find peace, and knowing my work helps others gives me purpose.",
    products: "Decorative Items",
    yearsActive: "2 years", 
    impact: "Built confidence and financial independence"
  },
  {
    id: 3,
    name: "Community Workshop",
    role: "Inclusive Learning Space",
    image: artisanImage,
    quote: "Our workshop brings together individuals with different abilities, creating beautiful art while building friendships and skills.",
    products: "Collaborative Pieces",
    yearsActive: "5 years",
    impact: "Empowered 50+ individuals with disabilities"
  }
];

const ArtisanStories = () => {
  return (
    <section id="stories" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Our Heroes
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Stories of
            <span className="text-impact-orange"> Resilience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Behind every product is a person with a story of strength, creativity, 
            and determination. Meet the artisans who craft beauty from recycled materials.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <Card key={story.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img 
                  src={story.image} 
                  alt={story.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{story.name}</h3>
                  <p className="text-sm opacity-90">{story.role}</p>
                </div>
              </div>

              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-impact-orange mb-4" />
                
                <blockquote className="text-muted-foreground mb-6 italic leading-relaxed">
                  "{story.quote}"
                </blockquote>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-foreground">Specializes in:</span>
                    <span className="text-sm text-muted-foreground">{story.products}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-foreground">Active since:</span>
                    <span className="text-sm text-muted-foreground">{story.yearsActive}</span>
                  </div>
                  <div className="pt-2 border-t">
                    <p className="text-sm font-medium text-nature-green">{story.impact}</p>
                  </div>
                </div>

                <Button variant="outline" className="w-full group">
                  View Products
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            Read More Stories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ArtisanStories;