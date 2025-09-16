import Common from "@/components/Common";
import BlogSection from "@/components/BlogSection";

export default function Blogs() {
  return (
    <div className="flex min-h-screen items-start justify-center bg-background px-4 py-8">
      <div className="flex flex-col items-center w-full">
        <Common />
        <BlogSection />
      </div>
    </div>
  );
}