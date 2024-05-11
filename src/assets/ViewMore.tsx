import * as React from "react"
import Svg, { Path } from "react-native-svg"


function ViewMore({props, color}: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={color}
      className="w-6 h-6"
      {...props}
    >
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </Svg>
  )
}

export default ViewMore
