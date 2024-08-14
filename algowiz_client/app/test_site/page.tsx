'use client'
import { useEffect, useId, useState } from 'react';
import P5 from 'p5';


export default function Page() {
  type SketchCleanup = { cleanup: () => void };
  const [name, setName] = useState('hello');

  const visualisation = ({ width, height }: { width: number, height: number }): SketchCleanup => {
    const sketch = (p5: P5) => {
      p5.setup = () => {
        p5.createCanvas(width, height);
      };
      p5.draw = () => {
        p5.line(0, 0, width, height);
        p5.text(name, 50, 50);
      };
    };

    const p5 = new P5(sketch);

    return {
      cleanup: p5.remove,
    };
  };

  const WorkingDemonstration = ({ width, height }: { width: number, height: number }) => {
    const id = useId();

    useEffect(() => {
      const { cleanup } = visualisation({
        width,
        height,
      });

      return cleanup; // This removes the canvas when the component is rerendered.
    }, []);

    return (
      <div>
        <div id={id}></div>
        <button onClick={() => setName("billy")}>click me</button>
      </div>
    );
  };

  return WorkingDemonstration({ width: 100, height: 100 });
}



