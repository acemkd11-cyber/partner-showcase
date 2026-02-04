import Partners from "@/components/Partners";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <div className="text-center mb-16">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Welcome to Your App</h1>
        <p className="text-xl text-muted-foreground">Start building your amazing project here!</p>
      </div>
      
      {/* Partners Section */}
      <Partners />
    </div>
  );
};

export default Index;
