import { useState } from "react";
import { MapPin, Phone, Mail, Building } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simple validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you as soon as possible.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-center text-foreground mb-4">
          Contact Us
        </h2>
        <p className="font-body text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Ready to discuss your sesame seed requirements? Get in touch with us today.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                Garuland Enterprises
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Building className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-foreground font-medium">Office Address</p>
                    <p className="font-body text-muted-foreground">
                      Magadi Road, Emmanuel House, First Floor
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-foreground font-medium">Postal Address</p>
                    <p className="font-body text-muted-foreground">
                      P.O. Box 125-00200, Nairobi, Kenya
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-foreground font-medium">Phone</p>
                    <a
                      href="tel:+254722632408"
                      className="font-body text-muted-foreground hover:text-primary transition-colors"
                    >
                      +254 722 632 408
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-foreground font-medium">Email</p>
                    <a
                      href="mailto:samtern@gmail.com"
                      className="font-body text-muted-foreground hover:text-primary transition-colors"
                    >
                      samtern@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
            <h3 className="font-display text-xl font-semibold text-foreground mb-6">
              Send us a message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block font-body text-sm font-medium text-foreground mb-2"
                >
                  Name <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Your full name"
                  maxLength={100}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-body text-sm font-medium text-foreground mb-2"
                >
                  Email <span className="text-destructive">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="your@email.com"
                  maxLength={255}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block font-body text-sm font-medium text-foreground mb-2"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="+254 700 000 000"
                  maxLength={20}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-body text-sm font-medium text-foreground mb-2"
                >
                  Message <span className="text-destructive">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder="Tell us about your requirements..."
                  maxLength={1000}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground font-body font-semibold px-6 py-3 rounded-md hover:bg-forest-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
