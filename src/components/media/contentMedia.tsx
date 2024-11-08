import React from 'react';
import { ContextMedia } from './context';

export const ContentMedia = () => {
  const { numbers } = React.useContext(ContextMedia);

  return (
    <div className=" text-slate-400 w-full text-lg text-center font-semibold mb-2">
      [ {...[numbers.join(', ')]} ]
    </div>
  );
};
