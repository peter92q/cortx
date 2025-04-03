const Infos = () => {
  return (
    <>
      <FeatureBoxes />
      {/* AI Demo Section */}
    </>
  );
};

export default Infos;

const FeatureBoxes = () => {
  const features = [
    {
      icon: "/brain.svg",
      title: "Neural Consensus",
      description:
        "Our AI-driven validation learns and adapts to network conditions in real-time, eliminating bottlenecks while maintaining Byzantine fault tolerance.",
      tag: "Adaptive Intelligence",
    },
    {
      icon: "/lightning.svg",
      title: "Zero-Latency Finality",
      description:
        "Transactions achieve finality in under 500ms through our patented temporal sharding technology, making microtransactions viable at scale.",
      tag: "Lightning Fast",
    },
    {
      icon: "/shield.svg",
      title: "Post-Quantum Security",
      description:
        "Built with lattice-based cryptography that remains secure against quantum computing attacks, future-proofing your assets.",
      tag: "Quantum-Resistant",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
  );
};

const FeatureCard = ({ icon, title, description, tag }: Feature) => (
  <div className="cursor-pointer group p-8 transition-all duration-300 border-gray-100/10 border-[0.01rem] relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[4px] hover:after:bg-yellow-600">
    <img src={icon} alt={title} className="w-12 h-12 mb-6" />
    <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-yellow-600 transition-colors duration-200">
      {title}
    </h3>
    <p className="text-gray-300 group-hover:text-white transition-colors duration-200">
      {description}
    </p>
    <div className="mt-6">
      <span className="inline-block px-3 py-1 text-xs text-yellow-600 bg-yellow-600/10 rounded-full group-hover:bg-yellow-600/20 transition-colors duration-200">
        {tag}
      </span>
    </div>
  </div>
);

interface Feature {
  icon: string;
  title: string;
  description: string;
  tag: string;
}
