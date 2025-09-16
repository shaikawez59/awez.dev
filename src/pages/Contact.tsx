import Common from "@/components/Common";
import ContactSection from "@/components/ContactSection";

export default function Contact() {
  return (
    <div className="flex min-h-screen items-start justify-center bg-background px-4 py-8">
      <div className="flex flex-col items-center w-full">
        <Common />
        <ContactSection />
      </div>
    </div>
  );
}