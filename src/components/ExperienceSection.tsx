import { useState } from "react";
import lifeSpanLogo from "@/assets/life-span.jpeg";
import amexLogo from "@/assets/american-express.png";

const ExpandableDescription = ({ 
  preview, 
  full, 
  skills 
}: { 
  preview: string[]; 
  full: string[]; 
  skills: string;
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      {preview.map((line, i) => (
        <p key={i} className="text-sm text-foreground leading-relaxed mt-2 first:mt-2">
          {line}
        </p>
      ))}
      {!expanded && (
        <button
          onClick={() => setExpanded(true)}
          className="text-muted-foreground hover:text-primary text-sm cursor-pointer bg-transparent border-none p-0"
        >
          ...see more
        </button>
      )}
      {expanded && full.map((line, i) => (
        <p key={`full-${i}`} className="text-sm text-foreground leading-relaxed mt-2">
          {line}
        </p>
      ))}
      {expanded && (
        <button
          onClick={() => setExpanded(false)}
          className="text-muted-foreground hover:text-primary text-sm cursor-pointer bg-transparent border-none p-0 mt-1"
        >
          ...see less
        </button>
      )}
      <p className="text-sm text-foreground mt-2 flex items-center gap-1">
        <span className="text-muted-foreground">◇</span> {skills}
      </p>
    </>
  );
};

const ExperienceSection = () => {
  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <h2 className="text-xl font-semibold text-foreground mb-4">Experience</h2>
      <div className="space-y-6">
        {/* Life Span */}
        <div className="flex gap-3">
          <img src={lifeSpanLogo} alt="Life Span" className="w-12 h-12 rounded object-contain flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-semibold text-foreground">Full Stack Engineer</h3>
            <p className="text-sm text-foreground">Life Span · Full-time</p>
            <p className="text-xs text-muted-foreground">Nov 2025 - Feb 2026 · 4 mos</p>
            <ExpandableDescription
              preview={[
                "· Built end-to-end web applications using Django for backend APIs and Vue.js for frontend interfaces, delivering scalable and reliable full-stack systems.",
                "· Collaborated closely with AI and data teams to integrate intelligent features and automation into production products, enabling smarter, data-driven workflows.",
                "· Designed secure, high-performance REST APIs, optimized database queries, and implemented caching and background processing to support scalable AI-enabled platforms.",
              ]}
              full={[
                "· Led full-stack development across the lifecycle — architecture, development, testing, deployment, and performance tuning — ensuring production readiness and system stability.",
                "· Managed cloud infrastructure and CI/CD on AWS, improving deployment efficiency, system reliability, and scalability for modern web and AI-integrated applications.",
              ]}
              skills="Django, Vue.js, REST APIs, AWS"
            />
          </div>
        </div>

        {/* American Express - grouped with timeline */}
        <div className="flex gap-3">
          <img src={amexLogo} alt="American Express" className="w-12 h-12 rounded object-contain flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-semibold text-foreground">American Express</h3>
            <p className="text-sm text-foreground">Full-time · 2 yrs 2 mos</p>
            <p className="text-xs text-muted-foreground">Dallas, Texas, United States</p>

            {/* Timeline roles */}
            <div className="mt-4 space-y-0">
              {/* Role 3 - Full Stack Engineer II */}
              <div className="relative pl-6 pb-6 border-l-2 border-border">
                <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-foreground" />
                <h4 className="text-sm font-semibold text-foreground">Full Stack Engineer II</h4>
                <p className="text-xs text-muted-foreground">Jan 2023 - Jul 2023 · 7 mos</p>
                <ExpandableDescription
                  preview={[
                    "· Owned end-to-end full-stack features, from design to deployment, improving system scalability, reliability, and performance.",
                    "· Collaborated with AI and data teams to enable intelligent product capabilities, integrating automation and data pipelines into real-world applications.",
                  ]}
                  full={[
                    "· Built secure, high-performance APIs and backend systems, implemented caching and optimization strategies, and improved system efficiency at scale.",
                    "· Contributed to architecture decisions and CI/CD-driven production releases, ensuring stable and scalable full-stack platforms.",
                  ]}
                  skills="React, APIs, CI/CD, Architecture"
                />
              </div>

              {/* Role 2 - Full Stack Engineer I */}
              <div className="relative pl-6 pb-6 border-l-2 border-border">
                <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-foreground" />
                <h4 className="text-sm font-semibold text-foreground">Full Stack Engineer I</h4>
                <p className="text-xs text-muted-foreground">Jan 2022 - Dec 2022 · 1 yr</p>
                <ExpandableDescription
                  preview={[
                    "· Built scalable full-stack features using React and backend services, integrating enterprise systems across multiple applications.",
                    "· Designed and developed REST APIs, handled authentication, validation, and data processing to ensure secure and reliable performance.",
                  ]}
                  full={[
                    "· Worked with data and AI/analytics teams to integrate intelligent data processing and automation into product functionality.",
                    "· Optimized frontend rendering, backend performance, and API efficiency, improving stability and scalability of production systems.",
                  ]}
                  skills="React, REST APIs, Authentication"
                />
              </div>

              {/* Role 1 - Intern */}
              <div className="relative pl-6">
                <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-foreground" />
                <h4 className="text-sm font-semibold text-foreground">Full Stack Engineer Intern</h4>
                <p className="text-xs text-muted-foreground">Jun 2021 - Dec 2021 · 7 mos</p>
                <ExpandableDescription
                  preview={[
                    "· Developed frontend components using React and supported backend API development, building strong foundations in full-stack engineering and enterprise systems.",
                    "· Built reusable UI components and integrated them with backend services, ensuring smooth data flow and stable application behavior.",
                  ]}
                  full={[
                    "· Collaborated with engineers and data teams to support data-driven features and automation within product workflows.",
                    "· Participated in Agile development, testing, and code reviews, contributing to production-quality code and learning scalable system practices.",
                  ]}
                  skills="React, Agile, Testing"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
