import React from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ChannelModeCard = ({
  color,
  borderColor,
  bgColor,
  icon,
  title,
  selected = false,
}) => {
  return (
    <div
      className={clsx(
        'flex w-full bg-backgorud border-2 border-transparent',
        color,
        'text-sm rounded px-4 py-2 my-1 relative overflow-hidden',
        'cursor-pointer',
        selected && `${borderColor}`
      )}
    >
      {selected && (
        <div
          className={`${bgColor} opacity-5 absolute left-0 top-0 h-full w-full`}
        ></div>
      )}
      <div className="flex items-center z-10">
        <FontAwesomeIcon icon={icon} className={`${color} mr-2 h-4`} />
        <div className="px-2 text-white">{title}</div>
      </div>
    </div>
  );
};