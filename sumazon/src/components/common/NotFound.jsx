import { Link } from 'react-router-dom';
import './NotFound.css'; // Import your CSS file for styling

function NotFound() {
  return (
    <div className="notfound_container">
      <div className="notfound_content">
        <h1>404</h1>
        <h2>Oops! Page Not Found</h2>
        <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <Link to="/" className="back_home_link">Go Back to Home</Link>
      </div>
    </div>
  );
}

export default NotFound;
