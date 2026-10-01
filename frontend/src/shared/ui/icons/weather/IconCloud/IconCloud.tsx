interface IconCloudProps {
  className?: string;
}

export default function IconCloud({ className }: IconCloudProps) {
  return (
    <svg
      className={className}
      width="33"
      height="33"
      fill="currentFill"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M48.9466 102.823H94.9905C101.456 102.823 107.656 100.255 112.227 95.683C116.799 91.1113 119.367 84.9107 119.367 78.4453C119.367 71.9799 116.799 65.7793 112.227 61.2076C107.656 56.6359 101.456 54.0675 94.9905 54.0675H85.2942C83.2851 47.3283 79.4417 41.2805 74.1935 36.6C68.9453 31.9196 62.499 28.7908 55.575 27.5632C48.6511 26.3357 41.5222 27.0579 34.985 29.649C28.4478 32.2401 22.7598 36.5982 18.5567 42.2361C14.3536 47.874 11.801 54.5696 11.184 61.5749C10.567 68.5802 11.91 75.619 15.063 81.9048C18.2159 88.1907 23.0545 93.4759 29.0381 97.17C35.0218 100.864 41.9147 102.821 48.9466 102.823Z"
        stroke="currentStroke"
        strokeWidth="currentStrokeWidth"
        strokeLinecap="round"
      />
    </svg>
  );
}
