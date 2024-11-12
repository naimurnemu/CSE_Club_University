/* eslint-disable react/display-name */
import React, { Suspense, memo } from 'react';

/**
 * @param {React.Component} WrappedComponent - The component to wrap with Suspense.
 * @param {React.ReactNode} FallbackComponent - The fallback UI to display while loading.
 */

export const withSuspense = (WrappedComponent, FallbackComponent = <div>Loading...</div>) =>
  memo((props) => (
    <Suspense fallback={FallbackComponent}>
      <WrappedComponent {...props} />
    </Suspense>
  ));
