/* eslint-disable react/display-name */
import React, { Suspense, lazy, memo } from 'react';

/**
 * @param {React.Component} WrappedComponent - The component to wrap with Suspense.
 * @param {React.ReactNode} FallbackComponent - The fallback UI to display while loading.
 */

export const withSuspense = (importFunc, FallbackComponent = (<div>Loading...</div>)) => {
  const LazyComponent = lazy(importFunc); // Lazy load inside the HOC

  return memo((props) => (
    <Suspense fallback={FallbackComponent}>
      <LazyComponent {...props} />
    </Suspense>
  ));
};
