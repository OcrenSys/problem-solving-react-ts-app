import React from 'react';
import { ContextMedia } from './context';

export const ResultMedia = () => {
  const { median, numbers } = React.useContext(ContextMedia);

  return (
    <blockquote className=" text-slate-300 text-left mt-9 w-full cite pl-4 border-slate-400 border-l-2">
      <p className="my-2">
        Sorted Array:{' '}
        <span className="font-bold">[ {numbers.sort().join(', ')} ]</span>
      </p>
      <p className="my-2">
        Median: <span className="font-bold">{median.toFixed(1)}</span>
      </p>
    </blockquote>
  );
};
