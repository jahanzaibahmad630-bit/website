"use client";

export default function ToggleButton({
  label,
  onClick,
  variant = "solid"
}: {
  label: string;
  onClick?: () => void;
  variant?: "solid" | "ghost";
}) {
  const base =
    "mono text-[11px] px-3 py-2 rounded-sm transition border hairline";
  const solid =
    "bg-[var(--fg)]/10 hover:bg-[var(--fg)]/14";
  const ghost =
    "bg-transparent hover:bg-[var(--fg)]/8";

  return (
    <button
      onClick={onClick}
      className={`${base} ${variant === "solid" ? solid : ghost}`}
      data-cursor="hover"
    >
      {label}
    </button>
  );
}
