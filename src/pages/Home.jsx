import { useState, useMemo } from 'react';
import { posts } from '../posts';
import PostCard from '../components/PostCard';
import TagBadge from '../components/TagBadge';

export default function Home() {
  const [activeTag, setActiveTag] = useState(null);

  const allTags = useMemo(() => {
    const tags = new Set();
    posts.forEach(p => p.tags.forEach(t => tags.add(t)));
    return [...tags];
  }, []);

  const filtered = activeTag
    ? posts.filter(p => p.tags.includes(activeTag))
    : posts;

  const handleTagClick = (tag) => {
    setActiveTag(prev => prev === tag ? null : tag);
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">Job Search Journal</h1>
      <p className="text-gray-500 mb-8">Documenting the journey — one application at a time.</p>

      <div className="mb-8">
        <p className="text-xs text-gray-400 uppercase tracking-wide mb-3">Filter by tag</p>
        <div className="flex flex-wrap gap-2">
          {allTags.map(tag => (
            <TagBadge key={tag} tag={tag} onClick={handleTagClick} active={activeTag === tag} />
          ))}
          {activeTag && (
            <button
              onClick={() => setActiveTag(null)}
              className="px-3 py-1 text-xs text-gray-400 hover:text-gray-700 transition-colors"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {filtered.length > 0 ? (
          filtered.map(post => (
            <PostCard key={post.id} post={post} onTagClick={handleTagClick} activeTag={activeTag} />
          ))
        ) : (
          <p className="text-gray-400 text-sm">No posts found for this tag.</p>
        )}
      </div>
    </div>
  );
}
