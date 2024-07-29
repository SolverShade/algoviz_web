import './MergeSortPage.css'
//import React from "react";
import React, { useState, useEffect } from "react";
import { Graph, Vector } from 'vector-js'


export function MSortPage() {
  const [graphData, setGraphData] = useState({ nodes: [], edges: [] });

  fetch('/api/mergesort/graph-data/')
    .then(response => response.json())
    .then(data => setGraphData(data));

  useEffect(() => {
    if (graphData.nodes.length > 0 && graphData.edges.length > 0) {
      // Use the data to create a graph with vector-js
      // This is a placeholder, replace it with your actual graph creation code
      const graph = new Vector.Graph();
      graphData.nodes.forEach(node => graph.addNode(node.id, node.label));
      graphData.edges.forEach(edge => graph.addEdge(edge.from, edge.to));
    }
  }, [graphData]);

  return (
    <div className="container">
      <div className="half">
        <h3>Merge sort: dividing and conqure the work</h3>
        <p>
          Merge sort is a divide and conquer algorithm that was invented by John von Neumann in 1945.
          A divide and conquer algorithm is one that divides the problem into smaller subproblems that are
          easier to solve. Merge sort works by dividing the array into two halves, sorting the two halves
          independently, and then merging the two sorted halves together.
        </p>
      </div>
      <div className="half">
        <img src={process.env.PUBLIC_URL + '/Quag.PNG'}
          alt="image failed to load" />
      </div>
    </div>
  );
};


export default MSortPage;
