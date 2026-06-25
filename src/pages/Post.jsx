import { useParams, Link } from 'react-router-dom';
import { posts } from '../posts';
import TagBadge from '../components/TagBadge';

function renderMarkdown(text) {
  return text
    .split('\n')
    .map((line, i) => {
      if (line.startsWith('## ')) return <h2 key={i} className="text-xl font-semibold text-gray-900 mt-8 mb-3">{line.slice(3)}</h2>;
      if (line.startsWith('# ')) return <h1 key={i} className="text-2xl font-bold text-gray-900 mt-8 mb-3">{line.slice(2)}</h1>;
      if (line.startsWith('- ')) return <li key={i} className="text-gray-700 ml-4 list-disc">{line.slice(2)}</li>;
      if (line.trim() === '') return <br key={i} />;
      return <p key={i} className="text-gray-700 leading-relaxed">{line}</p>;
    });
}

export default function Post() {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-20 text-center">
        <p className="text-gray-400 mb-4">Post not found.</p>
        <Link to="/" className="text-purple-600 hover:underline text-sm">← Back to posts</Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-10">
      <Link to="/" className="text-sm text-purple-600 hover:underline mb-6 inline-block">← All posts</Link>
      <div className="text-xs text-gray-400 mb-2">{post.date}</div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
      <div className="flex flex-wrap gap-2 mb-8">
        {post.tags.map(tag => <TagBadge key={tag} tag={tag} />)}
      </div>
      <div className="prose">
        {renderMarkdown(post.content)}
      </div>
    </div>
  );
}
