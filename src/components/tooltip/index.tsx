import React, { useState } from 'react'

type Props = {
    text: string;
    children: JSX.Element
}


const Tooltip = ({ text, children }: Props) => {
    const [showTooltip, setShowTooltip] = useState(false);

    const handleMouseEnter = () => {
    setShowTooltip(true);
        };

    const handleMouseLeave = () => {
    setShowTooltip(false);
        };

  return (
        <div className="relative">
            <div
                className="inline-block"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {children}
            </div>
            {showTooltip && (
                <div className="absolute z-10 p-2 text-xs text-white bg-gray-500 rounded shadow-md">
                {text}
                <div
                    className="absolute w-3 h-3 bg-gray-500 transform rotate-45"
                    style={{
                    top: '-5px',
                    left: '5%',
                    transformOrigin: 'center',
                    }}
                />
                </div>
            )}
    </div>
  );
}

export default Tooltip