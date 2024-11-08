import React from 'react';
import { ContextMedia } from './context';

export const InputMedia = () => {
  const { value, handleChange, handleKeyDown } = React.useContext(ContextMedia);

  return (
    <input
      type="number"
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      className="mb-4 p-2 border border-gray-300 text-center w-full rounded text-black"
      placeholder="Enter a number"
    />
  );
};
