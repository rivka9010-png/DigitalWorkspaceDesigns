import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { className?: string };

export function LocationIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M1.74976 12.2498H12.2498" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M2.33325 12.2499V3.49992C2.33325 3.1905 2.45617 2.89375 2.67496 2.67496C2.89375 2.45617 3.1905 2.33325 3.49992 2.33325H10.4999C10.8093 2.33325 11.1061 2.45617 11.3249 2.67496C11.5437 2.89375 11.6666 3.1905 11.6666 3.49992V12.2499"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.25 12.2502V7.5835C5.25 7.11937 5.43437 6.67425 5.76256 6.34606C6.09075 6.01787 6.53587 5.8335 7 5.8335C7.46413 5.8335 7.90925 6.01787 8.23744 6.34606C8.56563 6.67425 8.75 7.11937 8.75 7.5835V12.2502"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M2.33333 4.08333C2.33333 3.77391 2.45625 3.47717 2.67504 3.25838C2.89383 3.03958 3.19058 2.91667 3.5 2.91667H10.5C10.8094 2.91667 11.1062 3.03958 11.325 3.25838C11.5437 3.47717 11.6667 3.77391 11.6667 4.08333V11.0833C11.6667 11.3928 11.5437 11.6895 11.325 11.9083C11.1062 12.1271 10.8094 12.25 10.5 12.25H3.5C3.19058 12.25 2.89383 12.1271 2.67504 11.9083C2.45625 11.6895 2.33333 11.3928 2.33333 11.0833V4.08333Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9.33333 1.75V4.08333" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.66667 1.75V4.08333" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2.33333 6.41667H11.6667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.08333 8.16667H4.09092" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.83922 8.16667H5.84255" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.58922 8.16667H7.59255" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.34207 8.16667H9.3454" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.59207 9.91667H7.5954" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.08922 9.91667H4.09255" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.83922 9.91667H5.84255" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M7 4.66675V7.00008L8.16667 8.16675" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M1.7793 6.41671C1.91002 5.13341 2.50862 3.94315 3.46089 3.07302C4.41316 2.20289 5.65245 1.71381 6.94231 1.69907C8.23217 1.68434 9.4823 2.14499 10.4542 2.99314C11.4261 3.84129 12.0517 5.01757 12.2117 6.29755C12.3717 7.57753 12.0549 8.87161 11.3217 9.9329C10.5885 10.9942 9.49017 11.7484 8.23638 12.0516C6.98258 12.3548 5.66104 12.1859 4.52388 11.5769C3.38672 10.968 2.51355 9.96168 2.07096 8.75004M1.7793 11.6667V8.75004H4.69596"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
