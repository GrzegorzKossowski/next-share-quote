import React from 'react';

const TimesCircle = ({
    width = 256,
    height = 256,
    className = '',
}: {
    width?: number;
    height?: number;
    className?: string;
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox='0 0 256 256'
            version='1.1'
            id='svg1'
            xmlns='http://www.w3.org/2000/svg'
            className={className}
        >
            <g id='layer1'>
                <path 
                fill='currentfill'
                d='M 32,2.3441656 C 15.617543,2.3441656 2.3441656,15.617543 2.3441656,32 2.3441656,48.382457 15.617543,61.655834 32,61.655834 48.382457,61.655834 61.655834,48.382457 61.655834,32 61.655834,15.617543 48.382457,2.3441656 32,2.3441656 Z M 46.540925,39.784657 c 0.562026,0.562025 0.562026,1.470833 0,2.032859 l -4.735367,4.723409 c -0.562026,0.562026 -1.470834,0.562026 -2.032859,0 L 32,38.696479 24.215343,46.540925 c -0.562025,0.562026 -1.470833,0.562026 -2.032859,0 l -4.723409,-4.735367 c -0.562026,-0.562026 -0.562026,-1.470834 0,-2.032859 L 25.303521,32 17.459075,24.215343 c -0.562026,-0.562025 -0.562026,-1.470833 0,-2.032859 l 4.735367,-4.735367 c 0.562026,-0.562026 1.470834,-0.562026 2.032859,0 L 32,25.303521 39.784657,17.459075 c 0.562025,-0.562026 1.470833,-0.562026 2.032859,0 l 4.735367,4.735367 c 0.562026,0.562026 0.562026,1.470834 0,2.032859 L 38.696479,32 Z' />
            </g>
        </svg>
    );
};

export default TimesCircle;
