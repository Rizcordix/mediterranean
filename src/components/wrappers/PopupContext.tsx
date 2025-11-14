"use client";

import { createContext, useContext, useState } from "react";
import InstantQuotePopup from "./InstantQuotePopup";

const PopupContext = createContext<any>(null);

export function PopupProvider({ children }: { children: React.ReactNode }) {
  const [isQuoteOpen, setQuoteOpen] = useState(false);

  const openQuote = () => setQuoteOpen(true);
  const closeQuote = () => setQuoteOpen(false);

  return (
    <PopupContext.Provider value={{ openQuote, closeQuote }}>
      {children}
      <InstantQuotePopup isOpen={isQuoteOpen} onClose={closeQuote} />
    </PopupContext.Provider>
  );
}

export function usePopup() {
  return useContext(PopupContext);
}
