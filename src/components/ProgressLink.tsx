
import { Link } from 'react-router-dom';

const ProgressLink = ({ children, className = "" }: { children?: React.ReactNode, className?: string }) => {
  return (
    <Link to="/progress-tracker" className={`text-primary font-medium hover:underline ${className}`}>
      {children || "Track your progress"}
    </Link>
  );
};

export default ProgressLink;
