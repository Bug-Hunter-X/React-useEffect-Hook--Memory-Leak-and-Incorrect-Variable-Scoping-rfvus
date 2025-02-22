# React useEffect Hook: Memory Leak and Incorrect Variable Scoping

This repository demonstrates a common error in using the `useEffect` hook in React: memory leaks due to improper cleanup and incorrect variable scoping.

## Bug Description
The `MyComponent` component uses `useEffect` to increment a counter every second using `setInterval`. However, it fails to properly clear the interval using `clearInterval` within the return function of the `useEffect` hook. This leads to a memory leak, as the interval continues to run even after the component is unmounted.

In addition, a variable declared outside the effect's scope can lead to unexpected behavior and make debugging more challenging.

## Solution
The solution involves ensuring that `clearInterval` is called to clear the interval before the component is unmounted, and that the `setInterval`'s ID is properly scoped within the `useEffect` function.