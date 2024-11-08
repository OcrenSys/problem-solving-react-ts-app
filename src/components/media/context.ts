import { createContext } from 'react';
import { ContextMediaProps } from '../../interfaces/media.interfaces';

// Create a context for media with default value as an empty object casted to ContextMediaProps
export const ContextMedia = createContext({} as ContextMediaProps);
