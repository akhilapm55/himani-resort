export default function Subtitle({ children, className = '' }) {
  return <span className={`subtitle ${className}`}>{children}</span>;
}
