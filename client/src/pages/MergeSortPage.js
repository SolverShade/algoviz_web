import './MergeSortPage.css'
import React from "react";

export function MSortPage() {
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
