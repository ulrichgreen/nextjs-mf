import React from 'react';
import Text from './text';

export { Text };
export const TextJsx = React.lazy(() => import('./text-jsx'));
export const TextHook = React.lazy(() => import('./text-hook'));

export default React.lazy(() => import('./text-hook'));
