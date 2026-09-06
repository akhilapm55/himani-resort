import { createContext, useCallback, useContext, useEffect, useState } from 'react';

const VideoModalContext = createContext({ open: () => {}, close: () => {} });

export function VideoModalProvider({ children }) {
  const [src, setSrc] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback((url) => {
    setSrc(url);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const close = useCallback(() => {
    setSrc('');
    setIsOpen(false);
    document.body.style.overflow = '';
  }, []);

  useEffect(() => {
    const onEsc = (e) => {
      if (e.key === 'Escape' && isOpen) close();
    };
    document.addEventListener('keydown', onEsc);
    return () => document.removeEventListener('keydown', onEsc);
  }, [isOpen, close]);

  return (
    <VideoModalContext.Provider value={{ open, close, src, isOpen }}>
      {children}
    </VideoModalContext.Provider>
  );
}

export function useVideoModal() {
  return useContext(VideoModalContext);
}
