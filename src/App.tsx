import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Heroinfos from "./components/Heroinfos";
import Heroinfos2 from "./components/Heroinfos2";

// Lazy load heavy components
const Spline = lazy(() => import("@splinetool/react-spline"));
const Infos = lazy(() => import("./components/Infos"));
const TokenDistribution = lazy(() => import("./components/Tokenomics"));
const Roadmap = lazy(() => import("./components/Roadmap"));
const Demo = lazy(() => import("./components/Demo"));

// Loading placeholder
const LoadingPlaceholder = () => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <div className="animate-pulse flex flex-col items-center">
      <div className="w-12 h-12 rounded-full bg-gray-800 mb-4"></div>
      <div className="h-4 w-32 bg-gray-800 rounded"></div>
    </div>
  </div>
);

const App = () => {
  return (
    <div className="min-h-screen text-gray-100 antialiased relative bg-black/98">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[70vh] border-b-[0.001rem] border-gray-100/10">
        {/* Spline Background - Only load on client side */}
        {typeof window !== "undefined" && (
          <Suspense
            fallback={<div className="absolute inset-0 bg-black/50"></div>}
          >
            <div className="absolute inset-0 opacity-10 z-50 overflow-hidden">
              <Spline
                scene="https://prod.spline.design/i9eNbyhVlq75EGyW/scene.splinecode"
                className="scale-250"
              />
            </div>
          </Suspense>
        )}

        {/* Content Container */}
        <div className="relative z-10 h-full flex flex-row">
          <div className="w-[70%] p-16 flex flex-col justify-center">
            <Heroinfos />
          </div>
          <div className="w-[30%] border-l-[0.001rem] border-gray-100/10 bg-black/50 backdrop-blur-sm">
            <Heroinfos2 />
          </div>
        </div>
      </div>

      {/* Lazy-loaded Sections */}
      <Suspense fallback={<LoadingPlaceholder />}>
        <Infos />
      </Suspense>

      <Suspense fallback={<LoadingPlaceholder />}>
        <TokenDistribution />
      </Suspense>

      <Suspense fallback={<LoadingPlaceholder />}>
        <Roadmap />
      </Suspense>

      <Suspense fallback={<LoadingPlaceholder />}>
        <Demo />
      </Suspense>
    </div>
  );
};

export default App;
