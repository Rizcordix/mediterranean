"use client";
import PopupCard from "./popup";
export default function PopupClientWrapper() {
  return <PopupCard showOnEveryVisit={false} delayMs={10000} />;
}
