```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly using a variable declared outside the effect's scope
    let intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Missing cleanup function to prevent memory leak
    return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
}
```