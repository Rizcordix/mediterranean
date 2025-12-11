"use client";
import PopupCard from "./popup";
export default function PopupClientWrapper() {
  return <PopupCard showOnEveryVisit={true} delayMs={1000} />;
}
