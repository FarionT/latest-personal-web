import * as React from "react"
import { JSX } from "react/jsx-runtime"
const LightSvg = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="Icons"
    x={0}
    y={0}
    viewBox="0 0 32 32"
    {...props}
  >
    <style>
      {
        ".st0{fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}"
      }
    </style>
    <circle cx={16} cy={16} r={8} className="st0" />
    <path
      d="M16 2v6M9 3.9l3 5.2M3.9 9l5.2 3M2 16h6M3.9 23l5.2-3M9 28.1l3-5.2M16 30v-6M23 28.1l-3-5.2M28.1 23l-5.2-3M30 16h-6M28.1 9l-5.2 3M23 3.9l-3 5.2"
      className="st0"
    />
  </svg>
)
export default LightSvg
