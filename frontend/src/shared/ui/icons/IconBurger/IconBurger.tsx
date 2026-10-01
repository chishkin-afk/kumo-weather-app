interface IconBurgerProps {
  className?: string;
}

export default function IconBurger({ className }: IconBurgerProps) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_32_234"
        style={{ maskType: 'luminance' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="22"
        height="22"
      >
        <path d="M22 0H0V22H22V0Z" fill="currentFill" />
      </mask>
      <g mask="url(#mask0_32_234)">
        <path
          d="M2.75003 5.49927H19.25M2.75003 10.9992H19.25M2.75003 16.4993H19.25"
          stroke="currentStroke"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
