'use client'
import React, { useEffect, useRef, useState } from 'react';
import p5 from 'p5';

export default class TreeNode {
  value: any;
  parent?: TreeNode | null;
  children: TreeNode[];
  depth: number;

  constructor(value: any, children: TreeNode[] = [], parent?: TreeNode,) {
    this.value = value;
    this.parent = parent;
    this.children = children;
    this.depth = this.calculateDepth();
  }

  calculateDepth(): number {
    return this.parent ? this.parent.depth + 1 : 0;
  }

  get isLeftChild(): boolean {
    if (this.parent === null) {
      return false;
    }

    if (this.parent?.children[0] === this) {
      return true;
    }
    else {
      return false;
    }
  }

  get isRightChild(): boolean {
    if (this.parent === null) {
      return false;
    }

    if (this.parent?.children[1] === this) {
      return true;
    }
    else {
      return false;
    }
  }

  get isLeaf(): boolean {
    return this.children.length === 0;
  }

  get isRoot(): boolean {
    return this.parent === null;
  }

  addChild(value: any): TreeNode {
    const child = new TreeNode(value, [], this);
    child.parent = this;
    this.children.push(child);
    return child;
  }

  generateP5Tree(p5instance: p5, values: any[]): JSX.Element {
    const sketchRef: React.MutableRefObject<any> = useRef();

    useEffect(() => {
      let angle: number;

      let sketch = (p: p5) => {
        p.setup = () => {
          p.createCanvas(710, 400);
          p.stroke(255);
          angle = p.PI / 4;
        };

        p.draw = () => {
          p.background(0);
          p.translate(p.width / 2, 100);
          branch(p, this);
        };
      }

      /*
      function branch(p: p5, len: number) {
        p.line(0, 0, 0, len);
        p.translate(0, len);
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
      */

      function branch(p: p5, currentNode: TreeNode,
        nodePosX: number = 0, nodePosY: number = 0) {
        if (currentNode?.parent == null) {
          p.circle(nodePosX, nodePosY, 25);
        }

        if (currentNode.children.length > 0) {
          p.circle(nodePosX - 25, nodePosY + 25, 25);
          p.line(nodePosX, nodePosY, nodePosX - 25, nodePosY + 25);
        }

        if (currentNode.children.length > 1) {
          p.circle(nodePosX + 25, nodePosY + 25, 25);
          p.line(nodePosX, nodePosY, nodePosX + 25, nodePosY + 25);
        }

        if (currentNode.parent != null && currentNode.parent.children[1] != null
          && currentNode.parent.children[1].children.length > 0
          && currentNode.parent.children[1] != currentNode) {
          branch(p, currentNode.parent.children[1], nodePosX + 50, nodePosY);
        }
        else if (currentNode.children[0] != null) {
          branch(p, currentNode.children[0], nodePosX - 25, nodePosY + 25);
        }
        else if (currentNode.children[1] != null) {
          branch(p, currentNode.children[1], nodePosX + 25, nodePosY + 25);
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
