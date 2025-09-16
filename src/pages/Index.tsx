import Common from "@/components/Common";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  return (
    <div className="flex min-h-screen items-start justify-center bg-background px-4 py-8">
      <div className="flex flex-col items-center w-full">
        <Common />
        <AboutSection />
      </div>
    </div>
  );
};

export default Index;
