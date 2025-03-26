
import { Link } from 'react-router-dom';

const ProgressLink = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Link to="/progress-tracker" className="text-primary font-medium hover:underline">
      {children || "Track your progress"}
    </Link>
  );
};

export default ProgressLink;
