import { Coffee, Heart, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">About CaféDelight</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your neighborhood café serving premium coffee and delicious comfort food since 2020
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Quality */}
          <div className="text-center p-8 bg-card rounded-2xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:-translate-y-1">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Coffee className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Premium Quality</h3>
            <p className="text-muted-foreground">
              We source the finest ingredients and coffee beans to ensure every bite and sip is exceptional
            </p>
          </div>

          {/* Passion */}
          <div className="text-center p-8 bg-card rounded-2xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:-translate-y-1">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
              <Heart className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Made with Love</h3>
            <p className="text-muted-foreground">
              Every item is crafted with care and passion by our experienced team of baristas and chefs
            </p>
          </div>

          {/* Excellence */}
          <div className="text-center p-8 bg-card rounded-2xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:-translate-y-1">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Award Winning</h3>
            <p className="text-muted-foreground">
              Recognized locally for our outstanding service and delicious offerings
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
