import React from 'react';

const IconCancel = (props) => {
  const { color = '#A3A0FB' } = props;
  return (
    <svg width="22px" height="22px" viewBox="0 0 22 22">
      <path fill={color} d="M0.916666667,11 C0.916666667,16.5599891 5.44001093,21.0833333 11,21.0833333 C16.5599891,21.0833333 21.0833333,16.5599891 21.0833333,11 C21.0833333,5.44001093 16.5601093,0.916666667 11,0.916666667 C5.43989071,0.916666667 0.916666667,5.44001093 0.916666667,11 Z M11,19.2801749 C6.4343388,19.2801749 2.71994536,15.5657814 2.71994536,11 C2.71994536,9.04139891 3.40495082,7.24052459 4.54618579,5.82122404 L16.178776,17.4538142 C14.7594754,18.5950492 12.9587213,19.2801749 11,19.2801749 Z M19.2800546,11 C19.2800546,12.9586011 18.5950492,14.7594754 17.4539344,16.178776 L5.82122404,4.54618579 C7.24052459,3.40495082 9.04139891,2.71994536 11,2.71994536 C15.5656612,2.71994536 19.2800546,6.4343388 19.2800546,11 Z" id="Shape"></path>
    </svg>
  );
};

export default IconCancel;