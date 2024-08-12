'use client'
import React from 'react';
import {useState} from 'react';
import Image from 'next/image';

export interface NavItem {
  title: string,
  parent?: NavItem,
  subLinks?: NavItem[]
  href?: string,
}

export interface NavDropdownProps {
items: NavItem[];
}

const NavLinks: React.FC<NavDropdownProps> = ({items}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleDropdown}>
        {isOpen
          ?
          <div className='flex'>
          <Image src='/terminal_arrow_gray.svg' alt="img_missing"
            width={12} height={12} />
          <p>Hide</p>
          </div>
          :
          <div className='flex'>
          <Image src='/terminal_arrow_gray.svg' alt="img_missing"
            width={12} height={12} />
          <p>Show</p>
          </div>
        }
      </button>
      {isOpen && (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.title}
              {item.subLinks && <NavLinks items={item.subLinks} />}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavLinks;

/*
export default function Counter() {
  const [name, setName] = useState('Taylor');
  const [age, setAge] = useState(42);

  function handleNameChange(e: { target: { value: React.SetStateAction<string>; }; }) {
    setName(e.target.value);
  }

  function handleAgeChange() {
    setAge(age + 1);
  }

  return (
    <>
      <input
        value={name}
        onChange={handleNameChange}
      />
      <button onClick={handleAgeChange}>
        Increment age
      </button>
      <p>Hello, {name}. You are {age}.</p>
    </>
  )
}
*/

/*
const links: NavLink[] = [
  new NavLink({}, 'sorting algorithms', '',
    [
      new NavLink({}, 'merge sort', '/merge_sort', []),
      new NavLink({}, 'quick sort', '/quick_sort', []),
      new NavLink({}, 'stalin sort', '/stalin_sort', []),
    ],
  ),
];

interface NavLinkProps {
  title: string;
}

function mNavLink({ title }: NavLinkProps){
  return (<h1>Hello, {title}!</h1>);
}

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
*/


/*
const links: NavLink[] = [
  new NavLink({}, 'sorting algorithms', '',
    [
      new NavLink({}, 'merge sort', '/merge_sort', []),
      new NavLink({}, 'quick sort', '/quick_sort', []),
      new NavLink({}, 'stalin sort', '/stalin_sort', []),
    ],
  ),
];

interface NavLinkProps {
  title: string;
}

function mNavLink({ title }: NavLinkProps){
  return (<h1>Hello, {title}!</h1>);
}

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
*/
