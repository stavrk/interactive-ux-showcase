
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  slug: string;
  color?: string;
  index: number;
  comingSoon?: boolean;
  link?: string;
}

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  tags, 
  slug, 
  index,
  comingSoon = false,
  link
}: ProjectCardProps) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl bg-white dark:bg-card border border-border/50 shadow-sm hover:shadow-md will-change-transform h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index * 0.1, 0.3) + 0.2, duration: 0.4 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >      
      <div className="relative">
        <div className="overflow-hidden rounded-t-xl aspect-video">
          <a 
            href={comingSoon ? "#" : link || `/projects/${slug}`} 
            className="block w-full h-full"
            target={link ? "_blank" : undefined}
            rel={link ? "noopener noreferrer" : undefined}
          >
            <img 
              src={image} 
              alt={title}
              loading="lazy" 
              className={cn(
                "w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105", 
                comingSoon && "opacity-80"
              )}
            />
          </a>
        </div>
      </div>
      
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-xl md:text-2xl font-medium mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
