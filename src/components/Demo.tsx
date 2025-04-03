export default function Demo() {
  return (
    <div className="p-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          Meet <span className="text-yellow-600">CORTX Mind</span> - Your
          Chain's AI Co-Processor
        </h2>
        <p className="text-gray-400 mb-12 max-w-3xl mx-auto">
          Our network-level artificial intelligence optimizes everything from
          gas pricing to smart contract execution, reducing costs by an average
          of 83% compared to L1 chains.
        </p>
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
          <div className="font-mono text-left h-64 overflow-y-auto mb-6">
            <p className="text-green-400">
              {" "}
              cortx.query("show_network_health")
            </p>
            <p className="text-gray-300 ml-4 mt-2">{"{"}</p>
            <p className="text-gray-300 ml-6">"status": "optimal",</p>
            <p className="text-gray-300 ml-6">"throughput": "104.7k TPS",</p>
            <p className="text-gray-300 ml-6">"latency": "382ms",</p>
            <p className="text-gray-300 ml-6">
              "ai_optimization": "87.2% efficiency"
            </p>
            <p className="text-gray-300 ml-4">{"}"}</p>
          </div>
          <button className="border border-blue-400 text-blue-400 hover:bg-blue-400/10 px-8 py-3 rounded-md font-medium transition-all duration-300">
            Interact with Live Demo
          </button>
        </div>
      </div>
    </div>
  );
}
