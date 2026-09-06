import { useVideoModal } from '../context/VideoModalContext.jsx';

export default function VideoModal() {
  const { isOpen, src, close } = useVideoModal();
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-10"
      onClick={(e) => { if (e.target === e.currentTarget) close(); }}
    >
      <div className="relative w-full max-w-[900px] aspect-video">
        <button
          onClick={close}
          aria-label="Close video"
          className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center transition-all duration-300 hover:bg-accent hover:text-white"
        >
          <i className="fas fa-times" />
        </button>
        <iframe
          src={src}
          title="Video"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="w-full h-full rounded-lg border-0"
        />
      </div>
    </div>
  );
}
