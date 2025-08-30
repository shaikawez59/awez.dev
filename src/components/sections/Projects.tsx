import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Filter } from "lucide-react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Web Apps", "AI Tools", "Open Source", "Mobile"];

  const projects = [
    {
      title: "AI-Powered Task Manager",
      description:
        "Smart productivity app with natural language processing for task creation and intelligent scheduling.",
      image: "/placeholder.svg",
      category: "AI Tools",
      tech: ["React", "Python", "OpenAI API", "PostgreSQL"],
      problem: "Traditional task managers are clunky and time-consuming",
      process:
        "Built NLP pipeline for natural task input and AI-driven scheduling",
      solution:
        "Intuitive voice/text input with intelligent priority and time suggestions",
      impact: "40% reduction in task creation time for beta users",
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "SpaceX Launch Tracker",
      description:
        "Real-time dashboard tracking SpaceX missions with detailed analytics and countdown timers.",
      image: "/placeholder.svg",
      category: "Web Apps",
      tech: ["Next.js", "TypeScript", "SpaceX API", "Chart.js"],
      problem:
        "Scattered information about space launches across multiple sources",
      process:
        "Integrated multiple APIs and created unified data visualization",
      solution:
        "Centralized dashboard with real-time updates and rich analytics",
      impact: "10K+ monthly active users tracking launches",
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Open Source React Component Library",
      description:
        "Accessible, customizable UI components with comprehensive documentation and Storybook integration.",
      image: "/placeholder.svg",
      category: "Open Source",
      tech: ["React", "TypeScript", "Storybook", "Rollup"],
      problem: "Lack of accessible, well-documented React components",
      process:
        "Built with accessibility-first approach and comprehensive testing",
      solution: "Complete component library with 50+ components and themes",
      impact: "500+ GitHub stars, used by 50+ projects",
      github: "https://github.com",
      demo: "https://storybook.com",
    },
    {
      title: "Fitness Progress Tracker",
      description:
        "Mobile-first web app for tracking workouts, nutrition, and progress with data visualization.",
      image: "/placeholder.svg",
      category: "Web Apps",
      tech: ["React Native", "Node.js", "MongoDB", "Chart.js"],
      problem: "Existing fitness apps are overcomplicated or lack key features",
      process: "User research led to minimal, focused feature set",
      solution:
        "Simple tracking with powerful analytics and progress visualization",
      impact: "Personal use led to 15% improvement in workout consistency",
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Weather AI Assistant",
      description:
        "Conversational weather app that provides personalized recommendations based on conditions.",
      image: "/placeholder.svg",
      category: "AI Tools",
      tech: ["Vue.js", "Node.js", "OpenWeather API", "GPT-4"],
      problem: "Weather apps provide data but lack actionable insights",
      process: "Combined weather data with AI to generate personalized advice",
      solution:
        "Conversational interface that suggests activities and clothing",
      impact: "Featured in ProductHunt top 10 for the week",
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Code Snippet Manager",
      description:
        "Developer tool for organizing, searching, and sharing code snippets with team collaboration features.",
      image: "/placeholder.svg",
      category: "Web Apps",
      tech: ["Electron", "React", "SQLite", "Monaco Editor"],
      problem: "Developers waste time re-writing common code patterns",
      process: "Built desktop app with cloud sync and team sharing",
      solution: "Fast, searchable snippet library with syntax highlighting",
      impact: "Saved 2+ hours per week in personal development workflow",
      github: "https://github.com",
      demo: "https://demo.com",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              A showcase of solutions I've built to solve real problems
            </p>

            {/* Filter Buttons */}
            <div
              className="flex flex-wrap justify-center gap-2 scroll-reveal"
              style={{ animationDelay: "0.2s" }}
            >
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeFilter === category ? "default" : "outline"}
                  onClick={() => setActiveFilter(category)}
                  className={`transition-all duration-300 hover:scale-105 ${
                    activeFilter === category
                      ? "bg-accent text-accent-foreground"
                      : "hover:bg-accent/10"
                  }`}
                >
                  <Filter className="h-4 w-4 mr-2" />
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.title}
                className="project-card group scroll-reveal hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1 + 0.4}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                    <div className="flex space-x-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} on GitHub`}
                        className="text-muted-foreground hover:text-accent hover:scale-110 transition-all duration-300"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} demo`}
                        className="text-muted-foreground hover:text-accent hover:scale-110 transition-all duration-300"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-poppins text-primary group-hover:text-accent transition-smooth">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Mini Case Study */}
                  <div className="space-y-3 mb-4 text-sm">
                    <div>
                      <span className="font-medium text-primary">Problem:</span>
                      <span className="text-muted-foreground ml-2">
                        {project.problem}
                      </span>
                    </div>
                    <div>
                      <span className="font-medium text-primary">
                        Solution:
                      </span>
                      <span className="text-muted-foreground ml-2">
                        {project.solution}
                      </span>
                    </div>
                    <div>
                      <span className="font-medium text-primary">Impact:</span>
                      <span className="text-muted-foreground ml-2">
                        {project.impact}
                      </span>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs px-2 py-1 hover:bg-accent/10 hover:scale-105 transition-all duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More */}
          <div
            className="text-center mt-12 scroll-reveal"
            style={{ animationDelay: "0.8s" }}
          >
            <Button
              variant="outline"
              className="px-8 py-3 hover:scale-105 transition-all duration-300"
            >
              <a href="https://github.com/shaikawez59" target="_blank">
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
