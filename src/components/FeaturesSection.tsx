import { Leaf, Package, Truck, Handshake } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Naturally Grown",
    description: "Our sesame seeds are cultivated using traditional methods, ensuring natural purity and optimal oil content.",
  },
  {
    icon: Package,
    title: "Consistent Quality",
    description: "Well-dried and properly stored seeds that meet the highest standards for local and international markets.",
  },
  {
    icon: Truck,
    title: "Reliable Supply",
    description: "From source to delivery, we ensure proper handling and dependable quantities for your business needs.",
  },
  {
    icon: Handshake,
    title: "Honest Business",
    description: "Built on trust and integrity, we maintain transparent practices with all our trade partners.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-cream-dark">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-center text-foreground mb-4">
          Why Choose Garuland
        </h2>
        <p className="font-body text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          We serve wholesalers, processors, retailers, and exporters with reliable supply and honest business practices.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
