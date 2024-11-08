import React from 'react';
import { ContextMedia } from './context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';

export const ButtonMedia = () => {
  const { reset, numbers } = React.useContext(ContextMedia);

  return (
    <button
      onClick={reset}
      disabled={numbers.length == 0}
      className="mt-6 bg-slate-900 hover:bg-slate-950 text-slate-400 font-medium py-2 px-4 rounded-full w-full flex flex-row items-center content-center justify-center"
    >
      <FontAwesomeIcon className="mr-2" icon={faRefresh} />
      {'Reset'}
    </button>
  );
};
