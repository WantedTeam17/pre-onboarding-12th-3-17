import { useRef } from "react";

const useMovingScrollToKeyboard = (focusIdx: number) => {
  const relatedSearchRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<HTMLDivElement[]>([]);

  const movingScrollToKeyboard = () => {
    const container = relatedSearchRef.current;
    const selectedItem = itemRefs.current[focusIdx];

    if (container && selectedItem) {
      const topPos = selectedItem.offsetTop;
      const itemHeight = selectedItem.offsetHeight;

      container.scrollTop =
        topPos - container.offsetHeight / 0.7 + itemHeight / 0.7;
    }
  };

  return [relatedSearchRef, itemRefs, movingScrollToKeyboard] as const;
};

export default useMovingScrollToKeyboard;
