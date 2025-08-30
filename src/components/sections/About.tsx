import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Rocket, Zap, BookOpen, Dumbbell, Music } from "lucide-react";

const About = () => {
  const skills = [
    "React",
    "TypeScript",
    "Node.js",
    "Python",
    "Next.js",
    "TailwindCSS",
    "PostgreSQL",
    "Docker",
    "AWS",
    "Git",
    "Figma",
    "Appwrite",
    "SQL",
    "JavaScript",
  ];

  const stats = [
    { icon: Zap, label: "Typing Speed", value: "85 WPM" },
    { icon: Dumbbell, label: "Bench Press PR", value: "225 lbs" },
    { icon: BookOpen, label: "Books This Year", value: "3" },
    { icon: Rocket, label: "Projects Completed", value: "5" },
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-4">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground">
              The curious mind behind the code
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Story */}
            <div
              className="space-y-6 scroll-reveal"
              style={{ animationDelay: "0.2s" }}
            >
              <h3 className="text-2xl font-poppins font-semibold text-primary mb-6">
                My Story
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a self-taught developer who fell in love with coding while
                  exploring ways to solve real-world problems. What started as
                  curiosity about how websites work turned into a passion for
                  building digital solutions that matter.
                </p>
                <p>
                  When I'm not coding, you'll find me reading about space
                  exploration, hitting the gym, or diving deep into science
                  documentaries. I believe the same curiosity that drives
                  scientific discovery fuels great software development.
                </p>
                <p>
                  My approach combines technical precision with creative
                  problem-solving, always asking "How can we make this better?"
                  Whether it's optimizing performance or crafting intuitive user
                  experiences, I'm driven by the challenge of turning complex
                  problems into elegant solutions.
                </p>
              </div>
            </div>

            {/* Skills & Tools */}
            <div
              className="space-y-6 scroll-reveal"
              style={{ animationDelay: "0.4s" }}
            >
              <h3 className="text-2xl font-poppins font-semibold text-primary mb-6">
                Skills & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-3 py-1 text-sm hover:bg-accent hover:text-accent-foreground hover:scale-105 transition-all duration-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="mt-8">
                <h4 className="text-lg font-poppins font-medium text-primary mb-4">
                  Quick Stats
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat) => (
                    <Card
                      key={stat.label}
                      className="p-4 hover:shadow-md hover:scale-105 transition-all duration-300"
                    >
                      <CardContent className="p-0">
                        <div className="flex items-center space-x-3">
                          <stat.icon className="h-5 w-5 text-accent" />
                          <div>
                            <p className="text-sm text-muted-foreground">
                              {stat.label}
                            </p>
                            <p className="font-medium text-primary">
                              {stat.value}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Philosophy */}
          <Card
            className="p-8 bg-gradient-to-r from-accent/5 to-blue-500/5 border-accent/20 scroll-reveal hover:shadow-lg transition-all duration-300"
            style={{ animationDelay: "0.6s" }}
          >
            <CardContent className="p-0 text-center">
              <Code className="h-8 w-8 text-accent mx-auto mb-4" />
              <blockquote className="text-lg font-medium text-primary mb-2">
                "The best way to predict the future is to invent it."
              </blockquote>
              <p className="text-muted-foreground">
                — Alan Kay (and my coding philosophy)
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
