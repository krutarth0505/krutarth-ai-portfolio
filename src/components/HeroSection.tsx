import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";
import profileImage from "@/assets/profile.jpeg";

const HeroSection = () => {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-[128px] animate-pulse-glow delay-500" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block mb-4 animate-fade-in-up">
              <span className="px-4 py-2 rounded-full glass-card text-primary text-sm font-medium">
                AIML Engineering Student
              </span>
            </div>
            
            <h1 className="font-syne text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up delay-100">
              Hi, I'm{" "}
              <span className="gradient-text glow-text">
                Krutarth Gosavi
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-in-up delay-200">
              Passionate about building intelligent systems that bridge the gap between 
              <span className="text-primary"> artificial intelligence</span> and 
              <span className="text-secondary"> real-world applications</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up delay-300">
              <Button
                variant="hero"
                size="lg"
                onClick={() => handleScroll("#experience")}
              >
                View Projects
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
              <Button
                variant="glass"
                size="lg"
                onClick={() => handleScroll("#contact")}
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative animate-fade-in-up delay-400">
            <div className="relative">
              {/* Glow Ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-secondary rounded-full blur-2xl opacity-50 animate-pulse-glow" />
              
              {/* Image Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 animate-float">
                <img
                  src={profileImage}
                  alt="Krutarth Gosavi"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse-glow" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-accent rounded-full animate-pulse-glow delay-300" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={() => handleScroll("#about")}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
