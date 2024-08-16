'use client'
import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

export default class TreeNode {
  value: any;
  parent?: TreeNode | null;
  leftChild?: TreeNode | null;
  rightChild?: TreeNode | null;
  depth: number;

  constructor(value: any) {
    this.value = value;
    this.depth = this.calculateDepth();
  }

  calculateDepth(): number {
    return this.parent ? this.parent.depth + 1 : 0;
  }

  get isLeaf(): boolean {
    return this.leftChild == null && this.rightChild == null;
  }

  get isRoot(): boolean {
    return this.parent == null;
  }

  addChild(value: any) {
    const child = new TreeNode(value);
    child.parent = this;
    if (this.leftChild == undefined) {
      this.leftChild = child;
    } else if (this.rightChild == undefined) {
      this.rightChild = child;
    } else {
      throw new Error('This node already has two children');
    }
  }

  generateP5Tree(p5instance: p5): JSX.Element {
    const sketchRef: React.MutableRefObject<any> = useRef();

    useEffect(() => {
      let sketch = (p: p5) => {
        p.setup = () => {
          p.createCanvas(710, 400);
          p.stroke(255);
          p.background(0);
          p.translate(p.width / 2, 100);
          AddTreeViz(p, this);
        };

        p.draw = () => {
          /* eventually state may require re-rendering if the tree is changed,
           * when this occurs find a way to conditionally redraw the tree as 
           * redrawing it every time would be highly inefficient
           */
        };
      }

      function AddTreeViz(p: p5, currentNode: TreeNode,
        nodePosX: number = 0, nodePosY: number = 0) {
        if (currentNode.isRoot == true) {
          p.circle(nodePosX, nodePosY, 25);
        }

        if (currentNode.leftChild != null) {
          p.circle(nodePosX - 25, nodePosY + 25, 25);
          p.line(nodePosX, nodePosY, nodePosX - 25, nodePosY + 25);
        }

        if (currentNode.rightChild != null) {
          p.circle(nodePosX + 25, nodePosY + 25, 25);
          p.line(nodePosX, nodePosY, nodePosX + 25, nodePosY + 25);
        }

        if (currentNode.parent != null && currentNode.parent.rightChild != null
          && currentNode.parent.rightChild.isLeaf == false
          && currentNode.parent.rightChild != currentNode) {
          AddTreeViz(p, currentNode.parent.rightChild, nodePosX + 50, nodePosY);
        }
        else if (currentNode.leftChild != null) {
          AddTreeViz(p, currentNode.leftChild, nodePosX - 25, nodePosY + 25);
        }
        else if (currentNode.rightChild != null) {
          AddTreeViz(p, currentNode.rightChild, nodePosX + 25, nodePosY + 25);
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
