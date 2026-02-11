import { useState } from "react";

const tabs = ["Posts", "Comments", "Images"];

const ActivitySection = () => {
  const [activeTab, setActiveTab] = useState("Posts");

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="flex justify-between items-start mb-1">
        <div>
          <h2 className="text-xl font-semibold text-foreground">Activity</h2>
          <p className="text-sm text-muted-foreground">2,083 followers</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mt-3 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${
              activeTab === tab
                ? "bg-accent text-accent-foreground"
                : "border border-foreground text-foreground hover:bg-secondary"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Post */}
      <div className="space-y-4">
        <div>
          <p className="text-xs text-muted-foreground mb-1">
            <span className="font-semibold text-foreground">Bhargavi Guda</span> posted this · 2w
          </p>
          <p className="text-sm text-foreground">
            🚀 Building AI-powered products isn't just about the models — it's about the full stack around them.
          </p>
          <p className="text-sm text-foreground mt-1">
            From designing clean APIs with FastAPI to building responsive UIs with React and Vue.js, the real magic happens when every layer works together seamlessly.{" "}
            <a href="#" className="text-muted-foreground hover:text-primary">...show more</a>
          </p>
        </div>

        <div>
          <p className="text-xs text-muted-foreground mb-1">
            <span className="font-semibold text-foreground">Bhargavi Guda</span> posted this · 1mo
          </p>
          <p className="text-sm text-foreground">
            💡 One thing I've learned: the best AI features are the ones users don't even notice — they just make the product feel smarter.
          </p>
          <p className="text-sm text-foreground mt-1">
            Clean architecture + thoughtful integration &gt; flashy demos every time.
          </p>
        </div>
      </div>

      <button className="w-full mt-4 py-2 text-center text-muted-foreground hover:bg-secondary font-semibold text-sm transition-colors">
        Show all posts →
      </button>
    </div>
  );
};

export default ActivitySection;
