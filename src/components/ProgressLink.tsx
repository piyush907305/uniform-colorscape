
import { Link } from 'react-router-dom';

interface ProgressLinkProps {
  children?: React.ReactNode;
  className?: string;
  to?: string;
}

const ProgressLink = ({ 
  children, 
  className = "", 
  to = "/progress-tracker" 
}: ProgressLinkProps) => {
  return (
    <Link to={to} className={`text-gray-300 text-sm hover:text-white transition-colors ${className}`}>
      {children || "Track your progress"}
    </Link>
  );
};

export default ProgressLink;
