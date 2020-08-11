import React, { lazy, Suspense } from 'react';

const Lazylocker = lazy(() => import('./locker'));

const locker = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <Lazylocker {...props} />
  </Suspense>
);

export default locker;
