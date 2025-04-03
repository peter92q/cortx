import { useState } from "react";

const Roadmap = () => {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      title: "Genesis Phase",
      date: "Q1 2024",
      status: "completed",
      milestones: [
        "Core protocol architecture",
        "Whitepaper release",
        "Initial testnet launch",
        "Seed funding round",
      ],
      highlight: "Launched with 50+ validator nodes",
    },
    {
      title: "Ecosystem Growth",
      date: "Q2-Q3 2024",
      status: "active",
      milestones: [
        "Neural consensus v1 implementation",
        "Developer grant program",
        "Mainnet beta launch",
        "First dApp partnerships",
      ],
      highlight: "Achieved 10k+ TPS in test environment",
    },
    {
      title: "Scale & Secure",
      date: "Q4 2024 - Q1 2025",
      status: "upcoming",
      milestones: [
        "Temporal sharding implementation",
        "Quantum-resistant module",
        "Enterprise validator program",
        "Cross-chain bridges",
      ],
      highlight: "Targeting 100k+ TPS with zero-latency",
    },
    {
      title: "Mass Adoption",
      date: "2025+",
      status: "future",
      milestones: [
        "Decentralized AI oracle network",
        "Global payment integrations",
        "Protocol governance handover",
        "Layer 3 solutions rollout",
      ],
      highlight: "Becoming the backbone of Web3 infrastructure",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">
          Project <span className="text-yellow-600">Roadmap</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Our strategic path to building the next-generation blockchain
          infrastructure
        </p>
      </div>

      {/* Phase selector */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {phases.map((phase, index) => (
          <button
            key={index}
            onClick={() => setActivePhase(index)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activePhase === index
                ? "bg-yellow-600 text-black"
                : "bg-gray-800 text-white hover:bg-gray-700"
            }`}
          >
            {phase.title}
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Progress line */}
        <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gray-700 -z-10"></div>

        {phases.map((phase, index) => (
          <div
            key={index}
            className={`relative mb-12 pl-10 md:pl-0 md:flex ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end"
            }`}
          >
            {/* Timeline dot */}
            <div
              className={`absolute left-0 md:left-1/2 w-8 h-8 rounded-full flex items-center justify-center -ml-4 ${
                phase.status === "completed"
                  ? "bg-green-500"
                  : phase.status === "active"
                  ? "bg-yellow-600 animate-pulse"
                  : "bg-gray-600"
              }`}
            >
              {phase.status === "completed" && (
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              )}
            </div>

            {/* Card */}
            <div
              className={`md:w-5/12 p-6 rounded-xl border ${
                activePhase === index
                  ? "border-yellow-600 bg-gray-900 scale-105 shadow-lg shadow-yellow-600/20"
                  : "border-gray-700 bg-gray-800 hover:bg-gray-700/50"
              } transition-all duration-300`}
              onClick={() => setActivePhase(index)}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                <span className="px-3 py-1 text-xs rounded-full bg-gray-700 text-gray-300">
                  {phase.date}
                </span>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-yellow-600 mb-2">
                  KEY HIGHLIGHT
                </h4>
                <p className="text-white">{phase.highlight}</p>
              </div>

              <ul className="space-y-2">
                {phase.milestones.map((milestone, i) => (
                  <li key={i} className="flex items-start">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-yellow-600 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span className="text-gray-300">{milestone}</span>
                  </li>
                ))}
              </ul>

              {phase.status === "active" && (
                <div className="mt-4 pt-4 border-t border-yellow-600/30 flex items-center">
                  <span className="relative flex h-3 w-3 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-600 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-600"></span>
                  </span>
                  <span className="text-sm text-yellow-600">IN PROGRESS</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
