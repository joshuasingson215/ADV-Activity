"use client";

import { useState } from "react";

const VISIBLE = 3;

// Show the first 3 items with a See More / See Less toggle (as in the original site)
export default function useSeeMore(items) {
  const [expanded, setExpanded] = useState(false);
  const canToggle = items.length > VISIBLE;

  return {
    visible: expanded || !canToggle ? items : items.slice(0, VISIBLE),
    canToggle,
    label: expanded ? "See Less" : "See More",
    toggle: () => setExpanded((e) => !e),
  };
}
