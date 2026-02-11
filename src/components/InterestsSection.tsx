import { useState } from "react";

const interestTabs = ["Top Voices", "Companies", "Groups", "Newsletters", "Schools"];

const InterestsSection = () => {
  const [activeTab, setActiveTab] = useState("Top Voices");

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <h2 className="text-xl font-semibold text-foreground mb-3">Interests</h2>

      <div className="flex gap-4 border-b border-border mb-4">
        {interestTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 text-sm font-semibold transition-colors ${
              activeTab === tab
                ? "text-accent border-b-2 border-accent"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex gap-3">
        <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
          <span className="text-lg">👩‍💼</span>
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">
            Diksha Arora{" "}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="hsl(210,83%,40%)" className="w-3.5 h-3.5 inline">
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
            </svg>
            <span className="text-muted-foreground font-normal"> · 3rd</span>
          </p>
          <p className="text-xs text-muted-foreground leading-snug">
            Interview Coach | 2 Million+ on Instagram | Helping you Land Your Dream Job | 50,000+ Candidates Placed
          </p>
          <p className="text-xs text-muted-foreground mt-0.5">267,063 followers</p>
          <button className="mt-2 border border-foreground text-foreground px-4 py-1 rounded-full text-sm font-semibold hover:bg-secondary transition-colors">
            + Follow
          </button>
        </div>
      </div>
    </div>
  );
};

export default InterestsSection;
