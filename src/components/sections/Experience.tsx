import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'TechStart Inc.',
      role: 'Senior Frontend Developer',
      duration: '2023 - Present',
      location: 'Remote',
      type: 'Full-time',
      description: [
        'Led frontend development for 3 major product features, increasing user engagement by 35%',
        'Mentored 2 junior developers and established code review best practices for the team'
      ],
      tech: ['React', 'TypeScript', 'Next.js', 'TailwindCSS', 'GraphQL']
    },
    {
      company: 'Digital Solutions Co.',
      role: 'Full Stack Developer',
      duration: '2022 - 2023',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: [
        'Built and maintained 5+ client web applications using modern JavaScript frameworks',
        'Optimized application performance resulting in 50% faster load times across all projects'
      ],
      tech: ['Vue.js', 'Node.js', 'PostgreSQL', 'AWS', 'Docker']
    },
    {
      company: 'Freelance',
      role: 'Web Developer',
      duration: '2021 - 2022',
      location: 'Remote',
      type: 'Contract',
      description: [
        'Delivered 15+ custom websites for small businesses and startups',
        'Specialized in e-commerce solutions and performance optimization'
      ],
      tech: ['WordPress', 'Shopify', 'React', 'PHP', 'MySQL']
    },
    {
      company: 'CodeBootcamp Academy',
      role: 'Teaching Assistant',
      duration: '2021',
      location: 'Online',
      type: 'Part-time',
      description: [
        'Assisted 50+ students in learning full-stack web development fundamentals',
        'Created supplementary learning materials and coding exercises'
      ],
      tech: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'Git']
    }
  ];

  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-4">
              Experience
            </h2>
            <p className="text-lg text-muted-foreground">
              My journey in the tech industry
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-accent rounded-full border-4 border-background hidden md:block"></div>
                  
                  {/* Content */}
                  <Card className="md:ml-16 hover:shadow-lg transition-smooth">
                    <CardContent className="p-6">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                        <div className="mb-2 sm:mb-0">
                          <h3 className="text-xl font-poppins font-semibold text-primary">
                            {exp.role}
                          </h3>
                          <div className="flex items-center text-accent font-medium mb-2">
                            <Building className="h-4 w-4 mr-2" />
                            {exp.company}
                          </div>
                        </div>
                        <div className="flex flex-col sm:items-end space-y-1">
                          <Badge variant="secondary" className="w-fit">
                            {exp.type}
                          </Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-3 w-3 mr-1" />
                            {exp.duration}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="h-3 w-3 mr-1" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-muted-foreground flex items-start">
                            <span className="text-accent mr-3 mt-1.5 text-xs">●</span>
                            {item}
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech) => (
                          <Badge 
                            key={tech} 
                            variant="outline" 
                            className="text-xs hover:bg-accent/10 transition-smooth"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <Card className="p-8 bg-gradient-to-r from-accent/5 to-blue-500/5 border-accent/20">
              <CardContent className="p-0">
                <h3 className="text-xl font-poppins font-semibold text-primary mb-2">
                  Interested in working together?
                </h3>
                <p className="text-muted-foreground mb-4">
                  I'm always open to discussing new opportunities and interesting projects.
                </p>
                <a 
                  href="mailto:hello@example.com"
                  className="inline-flex items-center text-accent hover:text-accent/80 font-medium transition-smooth"
                >
                  Get in touch →
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;