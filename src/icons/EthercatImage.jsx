export default function EthercatImage({ size = 24, ...props }) {
  return (
    <svg width={size} height={size} viewBox="6 6 30 30" fill="none" aria-hidden="true" focusable="false" {...props}>
      <path d="M20 10H9v20h11M9 24l7-7 6 7" stroke="currentColor" strokeWidth="3" strokeLinejoin="miter" />
      <path fill="currentColor" d="M23 9h5v5h-5zM23 17h5v5h-5zM23 25h5v5h-5zM31 13h3v3h-3zM31 22h3v3h-3z" />
    </svg>
  );
}
