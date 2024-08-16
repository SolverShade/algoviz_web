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
        const radius: number = 12.5;
        const diameter: number = radius * 2;
        const spacing: number = 50;
        const textOffset = radius / 3.1415;

        if (currentNode.isRoot == true) {
          p.circle(nodePosX, nodePosY, diameter);

          p.text(currentNode.value, nodePosX - textOffset,
            nodePosY + textOffset);
        }

        if (currentNode.leftChild != null) {
          p.circle(nodePosX - spacing, nodePosY + spacing, diameter);

          p.line(nodePosX - radius / 2, nodePosY + radius / 2,
            nodePosX - spacing, nodePosY + spacing);

          p.text(currentNode.value, nodePosX - spacing - textOffset,
            nodePosY + spacing + textOffset);
        }

        if (currentNode.rightChild != null) {
          p.circle(nodePosX + spacing, nodePosY + spacing, diameter);

          p.line(nodePosX + radius / 2, nodePosY + radius / 2, nodePosX + spacing,
            nodePosY + spacing);

          p.text(currentNode.value, nodePosX + spacing - textOffset,
            nodePosY + spacing + textOffset);
        }

        if (currentNode.parent != null && currentNode.parent.rightChild != null
          && currentNode.parent.rightChild.isLeaf == false
          && currentNode.parent.rightChild != currentNode) {
          AddTreeViz(p, currentNode.parent.rightChild, nodePosX + spacing * 2, nodePosY);
        }
        else if (currentNode.leftChild != null) {
          AddTreeViz(p, currentNode.leftChild, nodePosX - spacing, nodePosY + spacing);
        }
        else if (currentNode.rightChild != null) {
          AddTreeViz(p, currentNode.rightChild, nodePosX + spacing, nodePosY + spacing);
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
