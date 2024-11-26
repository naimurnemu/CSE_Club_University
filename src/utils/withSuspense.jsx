import React, { Suspense, lazy, memo } from "react";
import { IoReload } from "react-icons/io5";

/**
 * @param {React.Component} WrappedComponent - The component to wrap with Suspense.
 * @param {React.ReactNode} FallbackComponent - The fallback UI to display while loading.
 */

export const withSuspense = (
  importFunc,
  FallbackComponent = (
    <div className="flex items-center justify-center bg-gray-900 min-h-screen py-10 px-4">
      <IoReload className="h-12 w-12 animate-spin" />{" "}
    </div>
  )
) => {
  const LazyComponent = lazy(importFunc); // Lazy load inside the HOC

  return memo((props) => (
    <Suspense fallback={FallbackComponent}>
      <LazyComponent {...props} />
    </Suspense>
  ));
};
