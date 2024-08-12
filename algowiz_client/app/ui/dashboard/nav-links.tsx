'use client'
import React from 'react';
import NavLink from './navLink';

const links: NavLink[] = [
  new NavLink({}, 'sorting algorithms', '',
    [
      new NavLink({}, 'merge sort', '/merge_sort', []),
      new NavLink({}, 'quick sort', '/quick_sort', []),
      new NavLink({}, 'stalin sort', '/stalin_sort', []),
    ],
  ),
];

export default function NavLinks() {
  return (
    <>
      {links.map((link, index) => (
        <React.Fragment key={index}>
          {link.render()}
        </React.Fragment>
      ))}
    </>
  );
}
