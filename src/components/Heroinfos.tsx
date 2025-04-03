import { Typewriter } from "react-simple-typewriter";

export default function Heroinfos() {
  return (
    <>
      <div className="text-xs tracking-widest text-yellow-600 mb-4">
        <Typewriter
          words={["The Future is Decentralized"]}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          delaySpeed={1000}
        />
      </div>

      <h1 className="text-5xl font-bold mb-6 leading-tight">
        <span className="text-white">Lightspeed</span>{" "}
        <span className="text-yellow-600 mb-4">AI</span>{" "}
        <span className="text-white">Transactions</span> <br />
        on a <span className="text-yellow-600 mb-4">
          Quantum-Resistant
        </span>{" "}
        Chain
      </h1>

      <p className="text-gray-300 max-w-2xl mb-8">
        CORTX redefines blockchain infrastructure with our neural
        network-powered consensus protocol, achieving{" "}
        <span className="text-yellow-600 font-mono">100,000 TPS</span> with zero
        compromise on decentralization.
      </p>

      <div className="flex space-x-4">
        <button className="border cursor-pointer border-yellow-600 hover:border-cyan-400 px-6 py-3 rounded-md font-medium transition-all duration-300 hover:text-cyan-300">
          Pancakeswap
        </button>
        <button className="border cursor-pointer border-yellow-600 hover:border-cyan-400 px-6 py-3 rounded-md font-medium transition-all duration-300 hover:text-cyan-300">
          Read Whitepaper
        </button>
      </div>
    </>
  );
}
