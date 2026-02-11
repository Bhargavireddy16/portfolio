import { useState } from "react";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <h2 className="text-xl font-semibold text-foreground mb-3">About</h2>
      {expanded ? (
        <div className="text-sm text-foreground leading-relaxed space-y-3">
          <p>
            I love building scalable AI products using my full-stack development skills. I enjoy collaborating with AI teams to design and build practical solutions that solve real-world problems.
          </p>
          <p>
            I work across the full stack using React.js and Vue.js for frontend development, and Node.js/Express or Django/FastAPI on the backend — to create reliable, end-to-end applications.
          </p>
          <p>
            I focus on clean architecture, performance, and scalability while integrating AI capabilities into production-ready systems.
          </p>
          <p>
            Fun fact: I genuinely enjoy turning complex ideas into simple, working products that people can actually use.
          </p>
          <button onClick={() => setExpanded(false)} className="text-muted-foreground hover:text-primary text-sm">
            ...see less
          </button>
        </div>
      ) : (
        <p className="text-sm text-foreground leading-relaxed">
          I love building scalable AI products using my full-stack development skills. I enjoy collaborating with AI teams to design and build practical solutions that solve real-world problems.{" "}
          <button onClick={() => setExpanded(true)} className="text-muted-foreground hover:text-primary text-sm">
            ...see more
          </button>
        </p>
      )}

      {/* Top Skills */}
      <div className="mt-4 border border-border rounded-lg p-4 flex items-center justify-between hover:bg-secondary/50 cursor-pointer transition-colors">
        <div className="flex items-center gap-3">
          <span className="text-muted-foreground">💎</span>
          <div>
            <p className="text-sm font-semibold text-foreground">Top skills</p>
            <p className="text-sm text-muted-foreground">Full Stack Development · React.js · Python · Node.js</p>
          </div>
        </div>
        <ArrowRight className="w-5 h-5 text-muted-foreground" />
      </div>
    </div>
  );
};

export default AboutSection;
