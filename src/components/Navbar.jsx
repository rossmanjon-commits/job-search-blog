import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <Link to="/" className="text-xl font-semibold text-gray-900 hover:text-purple-600 transition-colors">
        Job Search Journal
      </Link>
      <div className="flex gap-6 text-sm text-gray-600">
        <Link to="/" className="hover:text-purple-600 transition-colors">Posts</Link>
        <Link to="/about" className="hover:text-purple-600 transition-colors">About</Link>
      </div>
    </nav>
  );
}
