"use client";

import { useEffect, useRef } from "react";

/**
 * Hook to reveal elements as they scroll into view.
 * Works on all devices including mobile.
 */
export function useScrollReveal() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Only run on client
        if (typeof window === "undefined") return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        // Once visible, we can stop observing if we want a one-time reveal
                        // observer.unobserve(entry.target); 
                    }
                });
            },
            {
                threshold: 0.15,
                rootMargin: "0px 0px -50px 0px" // Trigger slightly before it's fully in view
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            // Find all children with 'reveal-on-scroll' class
            const elements = currentRef.querySelectorAll(".reveal-on-scroll");
            elements.forEach((el) => observer.observe(el));

            // Also observe the container itself if it has the class
            if (currentRef.classList.contains("reveal-on-scroll")) {
                observer.observe(currentRef);
            }
        }

        return () => {
            if (currentRef) {
                const elements = currentRef.querySelectorAll(".reveal-on-scroll");
                elements.forEach((el) => observer.unobserve(el));
                if (currentRef.classList.contains("reveal-on-scroll")) {
                    observer.unobserve(currentRef);
                }
            }
            observer.disconnect();
        };
    }, []);

    return ref;
}
