'use client'
import React, { useEffect, useRef, useState } from 'react';
import p5 from 'p5';

export default function Page() {
  let myp5: p5;
  const [name, setName] = useState('hello');

  const Circle = () => {
    const sketchRef: React.MutableRefObject<any> = useRef();

    useEffect(() => {
      let sketch = (p: p5) => {
        p.setup = () => {
          let canvas = p.createCanvas(100, 100);
          canvas.parent(sketchRef.current);
          p.background(200);
        };

        p.draw = () => {
          p.circle(50, 50, 25);
          p.text(name, 50, 50);
        };
      }
      if (myp5 !== undefined) {
        myp5.remove();
      }

      myp5 = new p5(sketch, sketchRef.current);
    }, []);

    return <div ref={sketchRef}></div>;
  }

  return (
    <div>
      <div id="content" className="content">
        <h1>welcome to merge sort page. a series of words to test how long
          the page will take before it splits text into multiple lines. so
          far there is much text that the page can take and hopefully a line
          break will occur soon</h1>
      </div>
      <div id='canvas1' className="visuals">
        <h1>visuals</h1>
        <Circle />
        <button onClick={() => setName("billy")}>click me</button>
      </div>
    </div>
  );
}
