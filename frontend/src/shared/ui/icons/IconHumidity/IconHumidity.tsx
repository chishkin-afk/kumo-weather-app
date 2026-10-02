interface IconHumidityProps {
  className?: string;
}

export default function IconHumidity({ className }: IconHumidityProps) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="currentFill"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_25_181)">
        <path
          d="M15.5048 18.2492C14.3039 19.4501 12.675 20.1248 10.9766 20.1248C9.2782 20.1248 7.64934 19.4501 6.44839 18.2492C5.24744 17.0484 4.57275 15.4196 4.57275 13.7214C4.57275 11.8919 5.48759 10.1538 7.31726 8.69014C9.14692 7.22651 10.5192 5.03106 10.9766 2.74414C11.434 5.03106 12.8062 7.22651 14.636 8.69014C16.4656 10.1538 17.3804 11.8919 17.3804 13.7214C17.3804 15.4196 16.7058 17.0484 15.5048 18.2492Z"
          stroke="currentStroke"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_25_181">
          <rect width="22" height="22" fill="currentFill" />
        </clipPath>
      </defs>
    </svg>
  );
}
