import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-10">
      <Link to="/" className="text-sm text-purple-600 hover:underline mb-6 inline-block">← All posts</Link>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">About</h1>
      <p className="text-gray-600 leading-relaxed mb-4">
        This is my job search journal — a place to document the process of finding my next role.
        I write about applications, interviews, rejections, lessons learned, and the overall experience of navigating the job market.
      </p>
      <p className="text-gray-600 leading-relaxed">
        Writing helps me think clearly and stay accountable. If you're going through a similar journey, I hope something here is useful to you.
      </p>
    </div>
  );
}
