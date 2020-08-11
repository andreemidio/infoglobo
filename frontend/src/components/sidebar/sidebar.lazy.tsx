import React, { lazy, Suspense } from 'react';

const Lazysidebar = lazy(() => import('./sidebar'));

const sidebar = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <Lazysidebar {...props} />
  </Suspense>
);

export default sidebar;
