// DiscountPopupContext.tsx
"use client";

import React, { createContext, useContext, useState } from "react";
import DiscountButtonPopup from "./DiscountButtonPopup";

type ContextShape = {
  openDiscount: () => void;
  closeDiscount: () => void;
};

const DiscountPopupContext = createContext<ContextShape | null>(null);

export function DiscountPopupProvider({ children }: { children: React.ReactNode }) {
  const [isDiscountOpen, setDiscountOpen] = useState(false);

  const openDiscount = () => setDiscountOpen(true);
  const closeDiscount = () => setDiscountOpen(false);

  return (
    <DiscountPopupContext.Provider value={{ openDiscount, closeDiscount }}>
      {children}
      <DiscountButtonPopup isOpen={isDiscountOpen} onClose={closeDiscount} />
    </DiscountPopupContext.Provider>
  );
}

export function useDiscountPopup() {
  const ctx = useContext(DiscountPopupContext);
  if (!ctx) {
    throw new Error("useDiscountPopup must be used within DiscountPopupProvider");
  }
  return ctx;
}
