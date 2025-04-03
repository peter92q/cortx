const Grid = ({
  size = 50,
  strokeWidth = 1,
  strokeColor = "rgba(100, 100, 100, 0.2)",
  width = "100%",
  height = "100%",
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <pattern
          id="grid"
          width={size}
          height={size}
          patternUnits="userSpaceOnUse"
        >
          {/* Horizontal line - stops before the right edge */}
          <path
            d={`M 0 ${size} H ${size - 0.5}`}
            fill="none"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
          />
          {/* Vertical line - stops before the bottom edge */}
          <path
            d={`M ${size} 0 V ${size - 0.5}`}
            fill="none"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );
};

export default Grid;
