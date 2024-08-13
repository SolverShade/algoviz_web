'use client'
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';

export interface NavItem {
  title: string,
  parent?: NavItem,
  href?: string,
  subLinks?: NavItem[]
  depth?: number,
}

export interface NavDropdownProps {
  items: NavItem[];
  depth?: number;
}

const NavLinks: React.FC<NavDropdownProps> = ({ items, depth = 0 }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const marginStyle = { marginLeft: `${depth * 20}px` }; // Calculate margin based on depth

  return items.map((item) => {
    return (
      <div className='flex flex-col' style={marginStyle} >
        <button onClick={toggleDropdown}>
          {isOpen
            ?
            <div className='flex'>
              <Image src='/terminal_arrow_gray.svg' alt="img_missing"
                width={12} height={12} />
              <p>{item.title}</p>
            </div>
            :
            <div className='flex'>
              <Image src='/terminal_arrow_gray.svg' alt="img_missing"
                width={12} height={12} />
              <p>{item.title}</p>
            </div>
          }
        </button>
        {isOpen && (
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                {item.subLinks &&
                  <NavLinks items={item.subLinks} depth={depth + 1} />}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  });
};

export default NavLinks;
