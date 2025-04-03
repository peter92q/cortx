import { useState } from "react";
import { AnimatedNumber } from "./AnimatedNumber";

export default function Heroinfos2() {
  // Mock data - in a real app, you'd fetch this from an API
  const [networkStats, setNetworkStats] = useState({
    currentTPS: 104728,
    avgBlockTime: 0.4,
    aiNodesOnline: 8421,
    tpsHistory: [120000, 115000, 110000, 105000, 104728],
    blockTimes: [0.5, 0.45, 0.42, 0.41, 0.4],
    nodeStatus: {
      online: 8421,
      total: 10000,
    },
    networkHealth: "Excellent",
    totalTransactions: 2145000,
    transactionVolumeHistory: [2000000, 2050000, 2100000, 2120000, 2145000],
  });

  const refreshData = () => {
    // Simulate data refresh with slightly different numbers
    setNetworkStats((prev) => ({
      ...prev,
      currentTPS: prev.currentTPS + Math.floor(Math.random() * 2000 - 1000),
      avgBlockTime: Math.max(
        0.3,
        prev.avgBlockTime + (Math.random() * 0.1 - 0.05)
      ),
      aiNodesOnline: prev.aiNodesOnline + Math.floor(Math.random() * 100 - 50),
      totalTransactions:
        prev.totalTransactions + Math.floor(Math.random() * 50000),
      tpsHistory: prev.tpsHistory.map(
        (val) => val + Math.floor(Math.random() * 2000 - 1000)
      ),
      blockTimes: prev.blockTimes.map((val) =>
        Math.max(0.3, val + (Math.random() * 0.1 - 0.05))
      ),
      transactionVolumeHistory: prev.transactionVolumeHistory.map(
        (val) => val + Math.floor(Math.random() * 50000)
      ),
    }));
  };

  return (
    <div className="overflow-hidden">
      {/* Header with refresh button */}
      <div className="border-b-[0.01rem] h-20 border-gray-100/10 flex items-center justify-between px-6 text-sm uppercase tracking-wider">
        <div className="flex items-center">
          <span className="text-yellow-600 mr-2">⚡</span>
          Network Status
          <span
            className={`ml-3 text-xs px-2 py-1 rounded-full ${
              networkStats.networkHealth === "Excellent"
                ? "bg-green-900/50 text-green-400"
                : "bg-yellow-900/50 text-yellow-600"
            }`}
          >
            {networkStats.networkHealth}
          </span>
        </div>
        <button
          className="text-xs bg-yellow-600/10 hover:bg-yellow-600/20 border border-yellow-600/20 px-3 py-1 rounded-md flex items-center text-yellow-400"
          onClick={refreshData}
        >
          <span className="mr-1">⟳</span> Refresh
        </button>
      </div>

      {/* Main stats */}
      <div className="p-6 space-y-8">
        {/* TPS with mini chart */}
        <div>
          <div className="flex justify-between items-center mb-1">
            <div className="text-xs text-gray-500">Current TPS</div>
            <div className="text-xs text-gray-500">Last 5 intervals</div>
          </div>
          <div className="flex items-end justify-between">
            <div className="text-2xl">
              <AnimatedNumber value={networkStats.currentTPS} />
            </div>
            <div className="flex items-end h-8 space-x-1">
              {networkStats.tpsHistory.map((tps, i) => (
                <div
                  key={i}
                  className="w-2 bg-yellow-600 rounded-t-sm"
                  style={{
                    height: `${
                      (tps / Math.max(...networkStats.tpsHistory)) * 100
                    }%`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Block time with trend indicator */}
        <div>
          <div className="text-xs text-gray-500 mb-1">Avg. Block Time</div>
          <div className="flex items-center">
            <div className="text-2xl mr-2">
              <AnimatedNumber
                value={networkStats.avgBlockTime}
                duration={800}
              />
              s
            </div>
            {networkStats.blockTimes[4] < networkStats.blockTimes[0] ? (
              <span className="text-green-400 text-sm flex items-center">
                ↓{" "}
                {(
                  ((networkStats.blockTimes[0] - networkStats.blockTimes[4]) /
                    networkStats.blockTimes[0]) *
                  100
                ).toFixed(1)}
                %
                <span className="ml-1 w-2 h-2 bg-green-400 rounded-full"></span>
              </span>
            ) : (
              <span className="text-yellow-600 text-sm flex items-center">
                ↑{" "}
                {(
                  ((networkStats.blockTimes[4] - networkStats.blockTimes[0]) /
                    networkStats.blockTimes[0]) *
                  100
                ).toFixed(1)}
                %
                <span className="ml-1 w-2 h-2 bg-yellow-600 rounded-full"></span>
              </span>
            )}
          </div>
        </div>

        {/* NETWORK GROWTH DATA */}
        <div>
          <div className="flex justify-between items-center mb-1">
            <div className="text-xs text-gray-500">Total Transactions</div>
          </div>
          <div className="flex items-end justify-between">
            <div className="text-2xl">
              <AnimatedNumber
                value={networkStats.totalTransactions}
                duration={1200}
              />
            </div>
          </div>
        </div>

        {/* Nodes with progress bar */}
        <div>
          <div className="text-xs text-gray-500 mb-1">AI Nodes Online</div>
          <div className="text-2xl mb-1">
            <AnimatedNumber
              value={networkStats.aiNodesOnline}
              duration={1500}
            />
          </div>
          <div className="w-full bg-gray-800 rounded-full h-1.5">
            <div
              className="bg-yellow-600 h-1.5 rounded-full"
              style={{
                width: `${
                  (networkStats.nodeStatus.online /
                    networkStats.nodeStatus.total) *
                  100
                }%`,
              }}
            />
          </div>
          <div className="text-xs text-gray-500 mt-1 text-right">
            <AnimatedNumber
              value={
                (networkStats.nodeStatus.online /
                  networkStats.nodeStatus.total) *
                100
              }
              duration={1000}
            />
            % of network
          </div>
        </div>
      </div>
    </div>
  );
}
