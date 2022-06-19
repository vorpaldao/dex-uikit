import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <path
        d="M16.606.033a1 1 0 0 1 .915.84l.018.109c.105.66.248 1.553.346 2.156a.998.998 0 0 0 .743.811c.511.13 1.013.294 1.503.49a1 1 0 0 0 1.08-.22c.456-.455 1.144-1.141 1.625-1.618a.998.998 0 0 1 1.232-.14c.6.377 1.174.794 1.72 1.246a1 1 0 0 1 .247 1.218c-.307.604-.747 1.47-1.037 2.046a.998.998 0 0 0 .125 1.093c.336.406.646.833.928 1.279a1 1 0 0 0 1.002.457l2.266-.354a.998.998 0 0 1 1.08.61c.263.659.482 1.334.658 2.02a1 1 0 0 1-.516 1.131l-.145.074c-.59.302-1.368.7-1.896.972a.998.998 0 0 0-.542.957c.034.526.034 1.054 0 1.58a1 1 0 0 0 .54.96l.125.063c.569.291 1.357.694 1.917.982a.998.998 0 0 1 .515 1.129 16.456 16.456 0 0 1-.654 2.02 1 1 0 0 1-1.083.612c-.668-.105-1.628-.256-2.266-.354a.998.998 0 0 0-1 .456c-.283.446-.593.873-.93 1.278a1 1 0 0 0-.126 1.095c.292.575.732 1.441 1.037 2.045a.998.998 0 0 1-.247 1.216c-.544.454-1.118.87-1.717 1.25a1 1 0 0 1-1.235-.141l-.065-.065c-.475-.474-1.122-1.12-1.56-1.553a.998.998 0 0 0-1.078-.22c-.49.195-.992.358-1.503.488a1 1 0 0 0-.745.811l-.026.162-.337 2.103a.998.998 0 0 1-.915.838c-.707.047-1.417.047-2.124.003a1 1 0 0 1-.916-.84l-.001-.01-.362-2.255a.998.998 0 0 0-.744-.811c-.51-.13-1.012-.294-1.502-.49a1 1 0 0 0-1.08.22L8.251 29.4a.998.998 0 0 1-1.232.14c-.6-.377-1.174-.794-1.72-1.246a1 1 0 0 1-.247-1.218l1.037-2.046a.998.998 0 0 0-.125-1.093 12.276 12.276 0 0 1-.928-1.28 1 1 0 0 0-1.002-.457c-.637.1-1.597.251-2.266.354a.999.999 0 0 1-1.08-.61 16.45 16.45 0 0 1-.659-2.02 1 1 0 0 1 .517-1.13l.112-.058c.594-.303 1.39-.71 1.929-.988a.998.998 0 0 0 .541-.957 12.273 12.273 0 0 1 .001-1.58 1 1 0 0 0-.541-.96l-.02-.01-2.022-1.035a.998.998 0 0 1-.514-1.129c.174-.687.393-1.362.654-2.021a1 1 0 0 1 1.082-.611l2.266.354a.998.998 0 0 0 1.001-.457c.282-.445.592-.872.93-1.278A1 1 0 0 0 6.09 6.97c-.292-.575-.732-1.441-1.037-2.045A.999.999 0 0 1 5.3 3.709a16.45 16.45 0 0 1 1.717-1.25 1 1 0 0 1 1.235.141l1.625 1.618a.998.998 0 0 0 1.078.22c.49-.195.993-.358 1.504-.488a1 1 0 0 0 .745-.812l.363-2.264a.998.998 0 0 1 .914-.838 16.442 16.442 0 0 1 2.125-.003ZM21.674 16a6.134 6.134 0 0 0-6.13-6.13A6.134 6.134 0 0 0 9.412 16a6.134 6.134 0 0 0 6.13 6.131 6.134 6.134 0 0 0 6.131-6.13Z"
      />
    </Svg>
  );
};

export default Icon;
