import * as React from "react"
import { JSX } from "react/jsx-runtime"
const WorkSvg = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    {...props}
  >
    <title>{"file, document, office, work, letter"}</title>
    <path d="M16.17 0H2v24h20V6.8ZM20 22H4V2h9v7h7ZM15 7V2h.25l4.29 5Z" />
    <path d="M6 12h12v2H6zM6 15h12v2H6zM6 18h12v2H6zM6 7h5v2H6z" />
  </svg>
)
export default WorkSvg
