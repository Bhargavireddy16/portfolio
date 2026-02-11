const skills = [
  {
    name: "Full Stack Development",
    endorsement: "Full Stack Engineer at Life Span",
  },
  {
    name: "React.js",
    endorsement: "Full Stack Engineer at American Express",
  },
  {
    name: "Python",
    endorsement: "Full Stack Engineer at Life Span",
  },
  {
    name: "Node.js",
    endorsement: "Full Stack Engineer at American Express",
  },
];

const SkillsSection = () => {
  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <h2 className="text-xl font-semibold text-foreground mb-4">Skills</h2>
      <div className="space-y-5">
        {skills.map((skill, index) => (
          <div key={index}>
            <h3 className="text-base font-semibold text-foreground">{skill.name}</h3>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <span className="text-primary-foreground text-[9px] font-bold">L</span>
              </div>
              <p className="text-sm text-muted-foreground">{skill.endorsement}</p>
            </div>
            <button className="mt-2 border border-foreground text-foreground px-4 py-1 rounded-full text-sm font-semibold hover:bg-secondary transition-colors">
              Endorse
            </button>
          </div>
        ))}
      </div>
      <button className="w-full mt-4 py-2 text-center text-muted-foreground hover:bg-secondary rounded-b-lg font-semibold text-sm transition-colors">
        Show all 24 skills →
      </button>
    </div>
  );
};

export default SkillsSection;
