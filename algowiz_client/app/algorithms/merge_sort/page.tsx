'use client'
import React, { useEffect } from 'react';
import p5 from 'p5';

export default function Page() {
  function Circle() {
    useEffect(() => {
      new p5((p: p5) => {
        p.setup = () => {
          let canvas = p.createCanvas(100, 100);
          canvas.parent('canvas1');
          p.background(200);
          p.circle(50, 50, 25);
        };
      },);
    }, []);

    return <div id='p5Container'></div>;
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
        <Circle></Circle>
      </div>
    </div>
  );
}
