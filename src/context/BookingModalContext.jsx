import { createContext, useCallback, useContext, useEffect, useState } from 'react';

const BookingModalContext = createContext({ open: () => {}, close: () => {} });

export function BookingModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  // Optional room name to pre-select when the modal is opened from a specific room.
  const [room, setRoom] = useState('');

  const open = useCallback((roomName = '') => {
    setRoom(roomName);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const close = useCallback(() => {
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
    <BookingModalContext.Provider value={{ open, close, isOpen, room }}>
      {children}
    </BookingModalContext.Provider>
  );
}

export function useBookingModal() {
  return useContext(BookingModalContext);
}
