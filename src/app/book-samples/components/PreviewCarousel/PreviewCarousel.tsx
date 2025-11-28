"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./PreviewCarousel.module.css";
import Image from "next/image";

type Props = { pages: string[] };

export default function PreviewCarousel({ pages }: Props) {
  const [i, setI] = useState(0);
  const len = pages.length;

  const next = () => setI((x) => (x + 1) % len);
  const prev = () => setI((x) => (x - 1 + len) % len);

  return (
    <div className={styles.wrapper}>
      <div className={styles.viewport}>
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={pages[i]}
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -8 }}
            transition={{ duration: 0.26 }}
            className={styles.page}
          >
            <Image
              src={pages[i]}
              alt={`Page ${i + 1}`}
              width={400}
              height={600}
              draggable={false}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className={styles.controls}>
        <button onClick={prev} aria-label="Previous page" className={styles.btn}>‹</button>
        <div className={styles.counter}>Page {i + 1} of {len}</div>
        <button onClick={next} aria-label="Next page" className={styles.btn}>›</button>
      </div>
    </div>
  );
}