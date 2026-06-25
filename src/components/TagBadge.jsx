export default function TagBadge({ tag, onClick, active }) {
  return (
    <button
      onClick={() => onClick?.(tag)}
      className={`px-3 py-1 rounded-full text-xs font-medium transition-colors cursor-pointer
        ${active
          ? 'bg-purple-600 text-white'
          : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
        }`}
    >
      #{tag}
    </button>
  );
}
