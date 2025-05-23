import { Link } from "react-router-dom";

function Error() {
  return (<div className="w-screen justify-items-center">
    <div className="text-center mt-20 border p-8 w-fit rounded-2xl border-b-amber-500 border-l-amber-500 ">
      <h1 className="text-4xl font-bold mb-4 text-amber-600 ">404 - Page Not Found</h1>
      <p className="mb-4">Sorry, the page you're looking for doesn't exist.</p>
      <Link to="/" className="text-blue-500 underline">
        Go Back to Home
      </Link>
    </div>
    </div>
  );
}

export default Error;