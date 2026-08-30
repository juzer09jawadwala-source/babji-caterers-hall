// Open URL in a new tab. Uses window.open which breaks out of restricted
// iframes (like the Emergent preview), avoiding "refused to connect" errors
// when the target site sets X-Frame-Options: DENY (e.g. wa.me, tel:, maps).
export function openExternal(url) {
  if (!url) return;
  try {
    const win = window.open(url, "_blank", "noopener,noreferrer");
    if (win && typeof win.focus === "function") win.focus();
    if (!win) {
      // Popup blocked — fall back to top-level navigation so the click still works.
      window.top.location.href = url;
    }
  } catch (_e) {
    window.top.location.href = url;
  }
}

// React handler helper: prevents default anchor behaviour and opens externally.
export function handleExternalClick(url) {
  return (e) => {
    e.preventDefault();
    e.stopPropagation();
    openExternal(url);
  };
}
