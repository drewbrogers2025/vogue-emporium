import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from './ProductCard';
import { useState } from 'react';
import handbagImage from '@/assets/product-handbag.jpg';
import jacketImage from '@/assets/product-jacket.jpg';
import sneakersImage from '@/assets/product-sneakers.jpg';

const FeaturedProducts = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const products = [
    {
      id: '1',
      name: 'Luxury Leather Handbag',
      price: 299,
      originalPrice: 399,
      image: handbagImage,
      badge: 'Best Seller',
    },
    {
      id: '2',
      name: 'Premium Black Leather Jacket',
      price: 449,
      image: jacketImage,
      badge: 'New',
    },
    {
      id: '3',
      name: 'Classic White Sneakers',
      price: 159,
      originalPrice: 199,
      image: sneakersImage,
      badge: 'Sale',
    },
    {
      id: '4',
      name: 'Luxury Leather Handbag',
      price: 299,
      originalPrice: 399,
      image: handbagImage,
      badge: 'Limited',
    },
    {
      id: '5',
      name: 'Premium Black Leather Jacket',
      price: 449,
      image: jacketImage,
    },
    {
      id: '6',
      name: 'Classic White Sneakers',
      price: 159,
      originalPrice: 199,
      image: sneakersImage,
    },
  ];

  const itemsPerPage = 3;
  const maxSlides = Math.ceil(products.length / itemsPerPage) - 1;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxSlides ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlides : prev - 1));
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="elegant-text text-3xl lg:text-4xl font-bold mb-4">
              Featured Products
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Handpicked pieces from our latest collection, crafted with attention to detail and designed to make you stand out.
            </p>
          </div>
          
          <div className="hidden md:flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              disabled={currentSlide >= maxSlides}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Products Carousel */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {Array.from({ length:Math.ceil(products.length / itemsPerPage) }).map((_, slideIndex) => (
              <div
                key={slideIndex}
                className="min-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {products
                  .slice(slideIndex * itemsPerPage, (slideIndex + 1) * itemsPerPage)
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center justify-center space-x-2 mt-8">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <div className="flex space-x-1">
            {Array.from({ length: maxSlides + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
          
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            disabled={currentSlide >= maxSlides}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View All Products
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;