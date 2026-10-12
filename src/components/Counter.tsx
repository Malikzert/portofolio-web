import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ fontFamily: 'system-ui', textAlign: 'center', padding: '2rem' }}>
      <p style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: '0.5rem 1rem',
          fontSize: '1rem',
          cursor: 'pointer',
          backgroundColor: '#646cff',
          color: 'white',
          border: 'none',
          borderRadius: '4px'
        }}
      >
        Increment
      </button>
    </div>
  );
}
