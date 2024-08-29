import { ReactElement } from "react"

interface LogoProps {
  className?: string
}

// eslint-disable-next-line max-lines-per-function
export default function Logo({ className }: LogoProps): ReactElement {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M29.1563 8.62308H30.8153C32.1851 8.62308 33.433 9.45431 34.0177 10.7582L38.9979 21.8643C39.2211 22.3624 39.3373 22.9063 39.3373 23.457V33.8249C39.3373 35.3681 38.1479 36.6187 36.6818 36.6187H5.05017C3.58394 36.6187 2.39539 35.3681 2.39539 33.8249V23.4555C2.39539 22.9063 2.51097 22.3632 2.73381 21.8658L7.71451 10.7582C8.29944 9.45431 9.54675 8.62308 10.9172 8.62308H29.1563Z"
        stroke="#F9FAFB"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M9.54312 36.6177V37.854C9.54312 39.3154 8.41753 40.5 7.02895 40.5H4.90926C3.52069 40.5 2.39539 39.3162 2.39539 37.8548V33.4855"
        stroke="#F9FAFB"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M32.1896 36.6177V37.8533C32.1896 39.3147 33.3155 40.5 34.7053 40.5H36.821C38.2108 40.5 39.3374 39.3147 39.3374 37.8533V33.4855"
        stroke="#F9FAFB"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M3.27543 20.4678H2.19605C1.36346 20.4678 0.786015 19.5945 1.07574 18.7731L1.44425 17.7295C1.61782 17.2374 2.06456 16.9103 2.56428 16.9103H4.8954"
        stroke="#F9FAFB"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M38.4298 20.4678H39.8046C40.6368 20.4678 41.2144 19.5945 40.9242 18.7731L40.5562 17.7295C40.3822 17.2374 39.9358 16.9103 39.436 16.9103H36.7249"
        stroke="#F9FAFB"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M39.187 22.4027C34.7345 23.1372 28.1776 23.6016 20.8661 23.6016C13.5552 23.6016 6.9982 23.1372 2.54504 22.4027"
        stroke="#F9FAFB"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M9.64326 29.4532C9.64326 30.4652 8.86366 31.2852 7.90236 31.2852C6.94113 31.2852 6.16174 30.4652 6.16174 29.4532C6.16174 28.4426 6.94113 27.6226 7.90236 27.6226C8.86366 27.6226 9.64326 28.4426 9.64326 29.4532Z"
        stroke="#F9FAFB"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M35.571 29.4532C35.571 30.4652 34.7916 31.2852 33.8296 31.2852C32.8684 31.2852 32.0897 30.4652 32.0897 29.4532C32.0897 28.4426 32.8684 27.6226 33.8296 27.6226C34.7916 27.6226 35.571 28.4426 35.571 29.4532Z"
        stroke="#F9FAFB"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path d="M13.5769 28.2759H28.1555" stroke="#F9FAFB" strokeWidth="1.5" strokeMiterlimit="10" />
      <path d="M13.5769 30.6499H28.1555" stroke="#F9FAFB" strokeWidth="1.5" strokeMiterlimit="10" />
    </svg>
  )
}
