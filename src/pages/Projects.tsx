import Common from "@/components/Common";
import ProjectSection from "@/components/ProjectSection";

export default function Projects() {
  return (
    <div className="flex min-h-screen items-start justify-center bg-background px-4 py-8">
      <div className="flex flex-col items-center w-full">
        <Common />
        <ProjectSection />
      </div>
    </div>
  );
}