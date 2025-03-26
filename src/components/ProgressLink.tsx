
import { Link } from 'react-router-dom';

const ProgressLink = ({ children, className = "" }: { children?: React.ReactNode, className?: string }) => {
  return (
    <Link to="/progress-tracker" className={`text-gray-300 text-sm hover:text-white transition-colors ${className}`}>
      {children || "Track your progress"}
    </Link>
  );
};

export default ProgressLink;
