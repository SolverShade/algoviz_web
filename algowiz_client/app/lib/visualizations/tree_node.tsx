'use client'
import React, { useEffect, useRef, useState } from 'react';
import p5 from 'p5';

export default class TreeNode {
  value: any;
  parent: TreeNode | null;
  children: TreeNode[];
  depth: number;

  constructor(value: any, parent: TreeNode | null = null) {
    this.value = value;
    this.parent = parent;
    this.children = [];
    this.depth = this.calculateDepth();
  }

  calculateDepth(): number {
    return this.parent ? this.parent.depth + 1 : 0;
  }

  get isLeaf(): boolean {
    return this.children.length === 0;
  }

  get isRoot(): boolean {
    return this.parent === null;
  }

  addChild(value: any): TreeNode {
    const child = new TreeNode(value, this);
    this.children.push(child);
    return child;
  }

  generateP5Tree(p5instance: p5, values: any[]): JSX.Element {
    const sketchRef: React.MutableRefObject<any> = useRef();

    useEffect(() => {
      let angle: number;
      let len: number = 10;

      let sketch = (p: p5) => {
        p.setup = () => {
          p.createCanvas(710, 400);
          p.stroke(255);
          angle = p.PI / 4;
        };

        p.draw = () => {
          p.background(0);
          p.translate(p.width / 2, p.height);
          branch(p, len);
        };
      }

      function branch(p: p5, len: number) {
        p.line(0, 0, 0, -len);
        p.translate(0, -len);
        if (len > 4) {
          p.push();
          p.rotate(angle);
          branch(p, len * 0.67);
          p.pop();
          p.push();
          p.rotate(-angle);
          branch(p, len * 0.67);
          p.pop();
        }

        else {
          p.stroke(255, 0, 100);
          p.ellipse(0, 0, 8, 8);
        }
      }

      if (p5instance !== undefined) {
        p5instance.remove();
      }

      p5instance = new p5(sketch, sketchRef.current);
    }, []);

    return <div ref={sketchRef}></div>;
  }

}
