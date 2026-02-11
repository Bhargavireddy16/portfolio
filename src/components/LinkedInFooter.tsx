const footerLinks = [
  ["About", "Accessibility", "Talent Solutions"],
  ["Professional Community Policies", "Careers", "Marketing Solutions"],
  ["Privacy & Terms ▾", "Ad Choices", "Advertising"],
  ["Sales Solutions", "Mobile", "Small Business"],
  ["Safety Center"],
];

const LinkedInFooter = () => {
  return (
    <footer className="max-w-[1128px] mx-auto px-4 py-8 mt-4">
      <div className="flex flex-wrap gap-x-12 gap-y-2 mb-6">
        {footerLinks.map((column, colIdx) => (
          <div key={colIdx} className="flex flex-col gap-1">
            {column.map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs text-muted-foreground hover:text-primary hover:underline"
              >
                {link}
              </a>
            ))}
          </div>
        ))}

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground text-lg">❓</span>
            <div>
              <p className="text-xs font-semibold text-foreground">Questions?</p>
              <p className="text-xs text-muted-foreground">Visit our Help Center.</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground text-lg">⚙️</span>
            <div>
              <p className="text-xs font-semibold text-foreground">Manage your account and privacy</p>
              <p className="text-xs text-muted-foreground">Go to your Settings.</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground text-lg">🛡️</span>
            <div>
              <p className="text-xs font-semibold text-foreground">Recommendation transparency</p>
              <p className="text-xs text-muted-foreground">Learn more about Recommended Content.</p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-xs text-muted-foreground mb-1">Select Language</p>
          <select className="text-xs border border-border rounded px-2 py-1.5 bg-card text-foreground">
            <option>English (English)</option>
          </select>
        </div>
      </div>

      <p className="text-xs text-muted-foreground">LinkedIn Corporation © 2026</p>
    </footer>
  );
};

export default LinkedInFooter;
