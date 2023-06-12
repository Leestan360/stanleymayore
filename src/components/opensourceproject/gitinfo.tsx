import React from 'react';
import { IconType } from 'react-icons';

type Props = {
  element: any;
  style?: string;
  Icon?: IconType;
}

const Element = ({ element, style, Icon }: Props): JSX.Element | any => {
return element ? (
    <div className="flex">
      { Icon && (
      <div className="text-sm my-auto">
        <Icon/>
      </div>
      )}
      <div>
        <p className={`text-sm font-thin m-1 py-1 px-3 text-[#1DA1F2] ${style}`}>{element}</p>
      </div>

    </div>
    ) : null
}
//   return element ? (
//     <span className={`text-sm font-thin m-1 py-1 px-3 text-[#1DA1F2] ${style}`}>{element}</span>
//   ) : null
// }

export default Element

