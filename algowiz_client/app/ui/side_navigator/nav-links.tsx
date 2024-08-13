'use client'
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './nav-links.css';

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

  const imageSource = isOpen
    ? '/terminal_arrow_gray_down.svg'
    : '/terminal_arrow_gray.svg';

  const marginStyle = { marginLeft: `${depth * 20}px` }; // Calculate margin based on depth

  return items.map((item) => {
    return (
      <div className='linksContainer' style={marginStyle} >
        {item.href !== undefined
          ?
          <div className='flex'>
            <Link href={item.href}>{item.title}</Link>
          </div>
          :
          <button onClick={toggleDropdown}>
            <div className='nav-item'>
              <Image src={imageSource} alt="img_missing"
                width={16} height={16} />
              <p>{item.title}</p>
            </div>
          </button>
        }
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
