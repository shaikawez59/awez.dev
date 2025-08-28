import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: 'Building Scalable React Applications: Lessons from the Trenches',
      summary: 'Five years of React development taught me these crucial patterns for building applications that grow with your team and user base.',
      category: 'Development',
      readTime: '8 min read',
      date: 'Dec 15, 2024',
      slug: 'scalable-react-applications'
    },
    {
      title: 'The Self-Taught Developer\'s Guide to Code Reviews',
      summary: 'How to give and receive effective code reviews when you\'ve learned programming outside traditional computer science education.',
      category: 'Career',
      readTime: '6 min read',
      date: 'Dec 8, 2024',
      slug: 'self-taught-code-reviews'
    },
    {
      title: 'Why I Switched from REST to GraphQL (And You Should Too)',
      summary: 'A practical comparison of REST and GraphQL based on real-world project experience, including performance metrics and developer experience.',
      category: 'Technology',
      readTime: '12 min read',
      date: 'Nov 28, 2024',
      slug: 'rest-to-graphql-migration'
    },
    {
      title: 'Space, Code, and Curiosity: What Astronomy Teaches Us About Programming',
      summary: 'How my fascination with space exploration influences my approach to software development and problem-solving.',
      category: 'Philosophy',
      readTime: '10 min read',
      date: 'Nov 20, 2024',
      slug: 'space-code-curiosity'
    },
    {
      title: 'Building My First AI-Powered App: A Technical Deep Dive',
      summary: 'From concept to deployment: the technical challenges, architecture decisions, and lessons learned building an AI-integrated web application.',
      category: 'AI/ML',
      readTime: '15 min read',
      date: 'Nov 12, 2024',
      slug: 'first-ai-app-deep-dive'
    },
    {
      title: 'The Art of Side Projects: Turning Ideas into Reality',
      summary: 'A framework for choosing, starting, and actually finishing side projects that advance your skills and career.',
      category: 'Productivity',
      readTime: '7 min read',
      date: 'Nov 5, 2024',
      slug: 'art-of-side-projects'
    }
  ];

  const categories = ['All', 'Development', 'Career', 'Technology', 'Philosophy', 'AI/ML', 'Productivity'];

  return (
    <section id="blog" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-4">
              Blog & Thoughts
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Sharing insights on development, technology, and the journey of continuous learning
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Badge 
                  key={category}
                  variant="outline" 
                  className="cursor-pointer hover:bg-accent hover:text-accent-foreground transition-smooth"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          {/* Featured Post */}
          <Card className="mb-12 overflow-hidden hover:shadow-xl transition-smooth">
            <CardContent className="p-0">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-accent/20 to-blue-500/20 p-8 flex items-center justify-center">
                  <Badge className="bg-accent text-accent-foreground text-sm px-3 py-1">
                    Featured Post
                  </Badge>
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                    <Badge variant="secondary">{posts[0].category}</Badge>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {posts[0].date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {posts[0].readTime}
                    </div>
                  </div>
                  <h3 className="text-2xl font-poppins font-semibold text-primary mb-3 hover:text-accent transition-smooth cursor-pointer">
                    {posts[0].title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {posts[0].summary}
                  </p>
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post, index) => (
              <Card 
                key={post.slug} 
                className="hover:shadow-lg hover:-translate-y-1 transition-smooth cursor-pointer group"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-lg font-poppins font-semibold text-primary group-hover:text-accent transition-smooth line-clamp-2">
                    {post.title}
                  </h3>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      {post.date}
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-accent hover:text-accent/80 p-0 h-auto"
                    >
                      Read More →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter CTA */}
          <Card className="mt-16 p-8 text-center bg-gradient-to-r from-accent/5 to-blue-500/5 border-accent/20">
            <CardContent className="p-0">
              <h3 className="text-2xl font-poppins font-semibold text-primary mb-2">
                Stay Updated
              </h3>
              <p className="text-muted-foreground mb-6">
                Get notified when I publish new articles about development, technology, and career growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-6">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Blog;