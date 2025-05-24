import { Link } from "react-router-dom";

function Error() {
  return (
    // Container div spanning full width of screen, centered items (using justify-items-center)
    <div className="w-screen justify-items-center">
      
      {/* Centered error message box with margin top, border, padding, rounded corners, and amber-colored border on bottom and left */}
      <div className="text-center mt-20 border p-8 w-fit rounded-2xl border-b-amber-500 border-l-amber-500 ">
        
        {/* Main heading showing 404 error */}
        <h1 className="text-4xl font-bold mb-4 text-amber-600 ">
          404 - Page Not Found
        </h1>
        
        {/* Description text for missing page */}
        <p className="mb-4">
          Sorry, the page you're looking for doesn't exist.
        </p>
        
        {/* Link back to home page with blue color and underline */}
        <Link to="/" className="text-blue-500 underline">
          Go Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Error;
