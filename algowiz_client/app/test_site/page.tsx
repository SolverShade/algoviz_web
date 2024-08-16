'use client'
import p5 from 'p5';
import TreeNode from '@/app/lib/visualizations/tree_node';

export default function Page() {
  let myp5: p5;

  const TreeCircle = () => {
    let rootNode: TreeNode = new TreeNode('root');
    rootNode.addChild('1');
    rootNode.addChild('1');

    rootNode.leftChild?.addChild('2');
    rootNode.leftChild?.addChild('2');

    rootNode.leftChild?.rightChild?.addChild('3');
    rootNode.leftChild?.rightChild?.addChild('3');

    return rootNode.generateP5Tree(myp5);
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
        <TreeCircle />
      </div>
    </div>
  );
}
