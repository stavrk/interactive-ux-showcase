
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    title: "ROOMIE",
    description: "An interactive guide designed to simplify the often overwhelming process of moving into a first apartment for young adults.",
    image: "/lovable-uploads/roomie-home-page.png",
    tags: ["UX UI Design", "Instructional Design"],
    slug: "roomie",
    color: "#a67c52",
    comingSoon: false
  },
  {
    title: "SAVE RAPUNZEL",
    description: "An educational platform with a game for students and a content creation tool for educators built around the classic fairy tale.",
    image: "/lovable-uploads/save-repunzel-editor.png",
    tags: ["Instructional Design", "Game Design"],
    slug: "save-rapunzel",
    color: "#10B981",
    comingSoon: false
  },
  {
    title: "BIP",
    description: "A conceptual money transfer application designed specifically for extraterrestrial users with unique perceptual needs.",
    image: "/lovable-uploads/bip-lots-of-iphones.png",
    tags: ["UX UI Design", "Speculative Design"],
    slug: "bip",
    color: "#8B5CF6",
    comingSoon: false
  },
  {
    title: "STUDIT",
    description: "An AI-powered study companion for Israeli Psychometric Entrance Test preparation with personalized study plans.",
    image: "/lovable-uploads/studit-home-page.png",
    tags: ["UX UI Design", "Instructional Design"],
    slug: "studit",
    color: "#F59E0B",
    comingSoon: false
  },
  {
    title: "PLANT LEARNING MODULE",
    description: "An interactive experience designed to build confidence in houseplant care by providing clear, accessible information.",
    image: "/lovable-uploads/plant-first-page.png",
    tags: ["Instructional Design"],
    slug: "plant-module",
    color: "#22C55E",
    comingSoon: false
  }
];

const FeaturedProjects = () => {
  return (
    <section id="featured-projects" className="py-20 md:py-24">
      <div className="container">
        <motion.div 
          className="mb-12 md:mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-3xl md:text-4xl font-medium mb-4">My Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of my UX UI design work across various platforms and industries.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={project.slug}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              slug={project.slug}
              color={project.color}
              index={index}
              comingSoon={project.comingSoon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
