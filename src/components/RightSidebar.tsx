const profiles = [
  { name: "Sahil krishna Ananthula", degree: "2nd", title: "AI / ML Engineer | Data Engineer | GenAI, NLP, MLO..." },
  { name: "Bindu K.", degree: "2nd", title: "Databricks Data Engineer | AWS Glue, PySpark, Delta..." },
  { name: "Nithya Patibandla", degree: "2nd", title: "C.S computer science 2025 | Student at University of Nort..." },
  { name: "Siddhartha Kundaram", degree: "2nd", title: "Data Analyst | Python | SQL | PL/SQL | Power BI | Tableau |..." },
];

const RightSidebar = () => {
  return (
    <div className="space-y-4">
      {/* People also viewed */}
      <div className="bg-card rounded-lg border border-border p-4">
        <h3 className="text-base font-semibold text-foreground mb-3">More profiles for you</h3>
        <div className="space-y-4">
          {profiles.map((profile, i) => (
            <div key={i} className="flex gap-3">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                <span className="text-muted-foreground text-sm font-bold">{profile.name[0]}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground truncate">
                  {profile.name}
                  <span className="text-muted-foreground font-normal"> · {profile.degree}</span>
                </p>
                <p className="text-xs text-muted-foreground truncate">{profile.title}</p>
                <button className="mt-1.5 border border-foreground text-foreground px-3 py-0.5 rounded-full text-xs font-semibold hover:bg-secondary transition-colors">
                  + Connect
                </button>
              </div>
            </div>
          ))}
        </div>
        <button className="w-full mt-3 text-center text-muted-foreground hover:bg-secondary font-semibold text-sm py-2 transition-colors">
          Show all
        </button>
      </div>

      {/* People you may know */}
      <div className="bg-card rounded-lg border border-border p-4">
        <h3 className="text-base font-semibold text-foreground mb-1">People you may know</h3>
        <p className="text-xs text-muted-foreground mb-3">From Venkata's school</p>
        <div className="space-y-4">
          {[
            { name: "Yekiteela Vyshnavi", title: "Attended QIS College Of Engineering and Technology" },
            { name: "Mounika Narisetty", title: "Student at QIS College Of Engineering and Technology" },
            { name: "Chandramouli Chunduri", title: "Senior Software Engineer - ORAN | 5G - NR | LTE | RAN..." },
          ].map((p, i) => (
            <div key={i} className="flex gap-3">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                <span className="text-muted-foreground text-sm font-bold">{p.name[0]}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground truncate">{p.name}</p>
                <p className="text-xs text-muted-foreground truncate">{p.title}</p>
                <button className="mt-1.5 border border-foreground text-foreground px-3 py-0.5 rounded-full text-xs font-semibold hover:bg-secondary transition-colors">
                  + Connect
                </button>
              </div>
            </div>
          ))}
        </div>
        <button className="w-full mt-3 text-center text-muted-foreground hover:bg-secondary font-semibold text-sm py-2 transition-colors">
          Show all
        </button>
      </div>
    </div>
  );
};

export default RightSidebar;
