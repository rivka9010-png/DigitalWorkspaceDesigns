import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { className?: string };

export function FeedClockIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.75" />
      <path d="M12 7.5V12L14.5 13.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function FeedDocumentIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M7 3.75H13.5L17.25 7.5V20.25C17.25 20.6642 16.9142 21 16.5 21H7C6.58579 21 6.25 20.6642 6.25 20.25V4.5C6.25 4.08579 6.58579 3.75 7 3.75Z" stroke="currentColor" strokeWidth="1.75" />
      <path d="M13.5 3.75V8.25H18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.5 13H14.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M9.5 16.5H13" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

export function FeedMessageIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M6.5 5.75H17.5C18.1904 5.75 18.75 6.30964 18.75 7V14.5C18.75 15.1904 18.1904 15.75 17.5 15.75H9.5L5.25 19V7C5.25 6.30964 5.80964 5.75 6.5 5.75Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
      <path d="M8.25 9.75H15.75" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M8.25 12.5H13.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}
