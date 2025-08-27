import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-fashion.jpg';

const Hero = () => {
  return (
    <section className="fashion-hero relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px] py-12 lg:py-20">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="elegant-text text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Elevate Your
                <span className="block text-luxury">Style</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                Discover our curated collection of premium fashion pieces that blend timeless elegance with contemporary design.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="luxury">
                Shop Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button variant="outline" size="lg">
                View Lookbook
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="elegant-text text-2xl font-bold">500+</div>
                <div className="text-sm text-muted-foreground">Premium Brands</div>
              </div>
              
              <div className="h-8 w-px bg-border"></div>
              
              <div className="text-center">
                <div className="elegant-text text-2xl font-bold">10k+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              
              <div className="h-8 w-px bg-border"></div>
              
              <div className="text-center">
                <div className="elegant-text text-2xl font-bold">24/7</div>
                <div className="text-sm text-muted-foreground">Customer Support</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Fashion Hero"
                className="w-full h-[500px] lg:h-[600px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-luxury/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;