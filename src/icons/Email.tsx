import * as React from "react"
import { JSX } from "react/jsx-runtime"
const EmailSvg = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    {...props}
  >
    <path d="M44 40H4c-2.206 0-4-1.794-4-4V12c0-2.206 1.794-4 4-4h40c2.206 0 4 1.794 4 4v24c0 2.206-1.794 4-4 4zM4 10c-1.103 0-2 .897-2 2v24c0 1.103.897 2 2 2h40c1.103 0 2-.897 2-2V12c0-1.103-.897-2-2-2H4z" />
    <path d="M24 29.191 6.457 17.84a1 1 0 0 1 1.086-1.68L24 26.809 40.457 16.16a1 1 0 0 1 1.086 1.68L24 29.191zM6.001 34a1 1 0 0 1-.556-1.832l9-6a1 1 0 1 1 1.11 1.664l-9 6a1.004 1.004 0 0 1-.554.168zM41.999 34c-.19 0-.383-.055-.554-.168l-9-6a1 1 0 1 1 1.11-1.664l9 6A1 1 0 0 1 41.999 34z" />
  </svg>
)
export default EmailSvg
