"use client";

import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import type { Book } from "../../data";
import PreviewCarousel from "../PreviewCarousel/PreviewCarousel";
import styles from "./BookModal.module.css";
import FocusTrap from "focus-trap-react";

type Props = { book: Book; onClose: () => void };

export default function BookModal({ book, onClose }: Props) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (typeof document === "undefined") return null;

  return ReactDOM.createPortal(
    <AnimatePresence>
      <motion.div
        className={styles.overlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className={styles.backdrop} onClick={onClose}></div>

        <FocusTrap>
          <motion.div
            className={styles.dialog}
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <button className={styles.close} onClick={onClose} aria-label="Close preview">
              ✕
            </button>

            <div className={styles.content}>
              {/* <div className={styles.left}>
                <Image src={book.cover} alt={book.title} className={styles.cover} />
              </div> */}

              <div className={styles.right}>
                <h3 className={styles.h3}>{book.title}</h3>
                <p className={styles.author}>{book.author}</p>
                <PreviewCarousel pages={book.previewPages} />
              </div>
            </div>
          </motion.div>
        </FocusTrap>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}
