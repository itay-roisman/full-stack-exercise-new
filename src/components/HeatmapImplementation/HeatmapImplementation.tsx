import { Link } from 'react-router-dom';
import './styles.scss';

export function HeatmapImplementation() {
  return (
    <div className="implementation min-h-screen">
      <div className="implementation-header">
        <Link to="/heatmap" className="back-link">
          ← Back to Instructions
        </Link>
      </div>
      {/* Implement your solution here */}
    </div>
  );
}
