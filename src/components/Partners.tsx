import { cn } from "@/lib/utils";

// Partner logos - using text-based logos for a clean, modern look
const partners = [
  { name: "Stripe", id: 1 },
  { name: "Vercel", id: 2 },
  { name: "Linear", id: 3 },
  { name: "Notion", id: 4 },
  { name: "Figma", id: 5 },
  { name: "Slack", id: 6 },
  { name: "Discord", id: 7 },
  { name: "GitHub", id: 8 },
];

const LogoItem = ({ name }: { name: string }) => (
  <div className="flex h-12 items-center justify-center px-8 md:px-12">
    <span className="text-xl md:text-2xl font-semibold tracking-tight text-muted-foreground/60 hover:text-foreground transition-colors duration-300 whitespace-nowrap select-none">
      {name}
    </span>
  </div>
);

export function Partners() {
  return (
    <section className="w-full py-12 md:py-16 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <p className="text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Trusted by industry leaders
        </p>
      </div>
      
      {/* Logo ticker container */}
      <div className="relative w-full">
        {/* Gradient masks for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling container */}
        <div 
          className={cn(
            "flex w-max animate-scroll-left",
            "hover:[animation-play-state:paused]"
          )}
        >
          {/* First set of logos */}
          {partners.map((partner) => (
            <LogoItem key={`first-${partner.id}`} name={partner.name} />
          ))}
          {/* Duplicate set for seamless loop */}
          {partners.map((partner) => (
            <LogoItem key={`second-${partner.id}`} name={partner.name} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;
