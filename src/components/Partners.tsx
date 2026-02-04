import { cn } from "@/lib/utils";

// Partner logos with placeholder images
const partners = [
  { name: "Stripe", id: 1, logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/stripe.svg" },
  { name: "Vercel", id: 2, logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/vercel.svg" },
  { name: "Linear", id: 3, logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linear.svg" },
  { name: "Notion", id: 4, logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/notion.svg" },
  { name: "Figma", id: 5, logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/figma.svg" },
  { name: "Slack", id: 6, logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/slack.svg" },
  { name: "Discord", id: 7, logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/discord.svg" },
  { name: "GitHub", id: 8, logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg" },
];

const LogoItem = ({ name, logo }: { name: string; logo: string }) => (
  <div className="flex flex-col items-center justify-center px-8 md:px-12 gap-3 group">
    <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
      <img 
        src={logo} 
        alt={`${name} logo`}
        className="w-10 h-10 md:w-12 md:h-12 object-contain opacity-50 group-hover:opacity-100 transition-opacity duration-300 dark:invert"
      />
    </div>
    <span className="text-sm md:text-base font-medium tracking-tight text-muted-foreground/60 group-hover:text-foreground transition-colors duration-300 whitespace-nowrap select-none">
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
            <LogoItem key={`first-${partner.id}`} name={partner.name} logo={partner.logo} />
          ))}
          {/* Duplicate set for seamless loop */}
          {partners.map((partner) => (
            <LogoItem key={`second-${partner.id}`} name={partner.name} logo={partner.logo} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;
