import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and inventory management.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, team collaboration features, and advanced filtering options.",
      technologies: ["TypeScript", "React", "Socket.io", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather dashboard that provides detailed weather information, forecasts, and interactive maps using multiple weather APIs.",
      technologies: ["React", "Tailwind CSS", "Weather API", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section className="w-full max-w-3xl">
      <h2 className="text-2xl font-bold text-text-primary mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="bg-card border-card-border">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-text-primary">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-text-secondary mt-2">
                    {project.description}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-3">
                <Button size="sm" asChild>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
