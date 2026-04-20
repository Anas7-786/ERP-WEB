export default function SectionDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute left-0 right-0 h-16 overflow-hidden ${className}`}>
      <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
        <polygon className="fill-current" points="2560 0 2560 100 0 100"></polygon>
      </svg>
    </div>
  );
}