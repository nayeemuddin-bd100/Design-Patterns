# React Observer Pattern in nutshell

## Implementation

```jsx
import React, { useState } from 'react';

// CounterDisplay component
const CounterDisplay = ({ count }) => {
  return <p>Count: {count}</p>;
};

// Counter component
const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <CounterDisplay count={count} />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
```


In this example, we have two components: `Counter` and `CounterDisplay`.

The `Counter` component maintains a `count` state using the `useState` hook. It provides buttons to increment and decrement the count. Whenever the `count` state changes, the `Counter` component notifies the `CounterDisplay` component.

The `CounterDisplay` component acts as an observer. It receives the `count` value as a prop and displays it. Whenever the `count` value changes, the `CounterDisplay` component automatically re-renders with the new value.

This demonstrates the decoupling of components using the Observer pattern, where the `CounterDisplay` component observes and reacts to changes in the `count` value without direct coupling or explicit callbacks between the components.


## Resource(Must read)
http://software-engineering-notes-in-bangla.blogspot.com/2019/09/observer-design-pattern.html
https://dev.to/ashrafhussain17/-2mhe
https://logicalforhad.wordpress.com/2013/05/29/%E0%A6%85%E0%A6%AC%E0%A6%9C%E0%A6%BE%E0%A6%B0%E0%A6%AD%E0%A6%BE%E0%A6%B0-%E0%A6%AA%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%9F%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%A8-observer-pattern/