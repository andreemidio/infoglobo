import React, { lazy, Suspense } from 'react';

const LazyfileReader = lazy(() => import('./fileReader'));

const fileReader = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyfileReader {...props} />
  </Suspense>
);

export default fileReader;
