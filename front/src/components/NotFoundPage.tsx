import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div>
      <h1>This page not existed <Link to="/">home</Link> </h1>
    </div>
  );
}

export default NotFoundPage;
