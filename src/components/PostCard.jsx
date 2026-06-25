import { Link } from 'react-router-dom';
import TagBadge from './TagBadge';

export default function PostCard({ post, onTagClick, activeTag }) {
  return (
    <article className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow bg-white">
      <div className="text-xs text-gray-400 mb-2">{post.date}</div>
      <Link to={`/post/${post.slug}`}>
        <h2 className="text-xl font-semibold text-gray-900 hover:text-purple-600 transition-colors mb-2">
          {post.title}
        </h2>
      </Link>
      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{post.excerpt}</p>
      <div className="flex flex-wrap gap-2">
        {post.tags.map(tag => (
          <TagBadge key={tag} tag={tag} onClick={onTagClick} active={activeTag === tag} />
        ))}
      </div>
    </article>
  );
}
