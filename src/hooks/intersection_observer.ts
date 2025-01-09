import { useEffect, useRef, useState, MutableRefObject } from "react";

/**
 * A custom hook to observe an element's visibility in the viewport.
 * @param {Object} options - Intersection Observer options
 * @param {Array<number>} [options.threshold=[0]] - Array of two visibility ratios to trigger the observer, if array length is greater than two, the rest are ignored.
 * @param {string} [options.rootMargin="0px"] - Margin around the root for triggering observer.
 * @param {Element|null} [options.root=null] - The root element for observation.
 * @returns {[ref, isVisible]} - A ref to attach to the target element and its visibility state.
 */
export const useIntersectionObserver = (
  options: IntersectionObserverInit = {}
): [MutableRefObject<HTMLDivElement | null>, boolean] => {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const threshold = options.threshold || [0];
    const rootMargin = options.rootMargin || "0px";
    const observer = new IntersectionObserver(
      ([entry]) => {
        const entryThreshold = Array.isArray(threshold)
          ? threshold[0]
          : threshold;
        const exitThreshold =
          Array.isArray(threshold) && threshold.length > 1 ? threshold[1] : 0;

        if (entry.intersectionRatio >= entryThreshold) {
          setIsVisible(true); // Element has entered the viewport
        } else if (entry.intersectionRatio <= exitThreshold) {
          setIsVisible(false); // Element has  left the viewport
        }
      },
      { threshold, rootMargin }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return [elementRef, isVisible];
};
