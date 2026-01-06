import heroImage from "@/assets/hero-sesame.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Premium golden sesame seeds"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 max-w-4xl mx-auto leading-tight">
          Premium Sesame Seeds – Freshly Hauled and Ready for Market
        </h1>
        <p className="font-body text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8 leading-relaxed">
          Naturally grown, carefully handled, and delivered with integrity. 
          Garuland Enterprises supplies quality sesame seeds for wholesalers, 
          processors, and exporters across East Africa and beyond.
        </p>
        <a
          href="#contact"
          className="inline-block bg-secondary text-secondary-foreground font-body font-semibold px-8 py-4 rounded-md hover:bg-gold-dark transition-colors shadow-lg"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
