interface IconClosedProps {
  className?: string;
}

export default function IconClosed({ className }: IconClosedProps) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="16.7279"
        y="4.00024"
        width="2"
        height="18"
        rx="1"
        transform="rotate(45 16.7279 4.00024)"
        fill="currentFill"
      />
      <rect
        x="18.1421"
        y="16.728"
        width="2"
        height="18"
        rx="1"
        transform="rotate(135 18.1421 16.728)"
        fill="currentFill"
      />
    </svg>
  );
}
