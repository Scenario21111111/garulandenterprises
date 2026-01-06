const Footer = () => {
  return (
    <footer className="bg-navy py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="font-display text-lg text-primary-foreground/90 mb-2">
          "Quality you can trust. Supply you can rely on."
        </p>
        <p className="font-body text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} Garuland Enterprises. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
