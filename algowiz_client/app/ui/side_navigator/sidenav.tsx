import Link from 'next/link';
import NavLinks, { NavItem } from '@/app/ui/side_navigator/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import './sidenav.css';

const items: NavItem[] =
  [
    {
      title: 'sorting algorithms',
      subLinks: [
        {
          title: 'merge sort',
          href: 'algorithms/merge_sort',
        },
        {
          title: 'quick sort',
          href: '/algorithms/quick_sort',
        },
        {
          title: 'stalin sort',
          href: '/algorithms/stalin_sort',
        },
      ],
    },
  ]

export default function SideNav() {
  return (
    <div className="sidenav">
      <Link className="logo" href="/">
        <div>
          <AcmeLogo />
        </div>
      </Link>
      <div className="flexContainer">
        <NavLinks items={items} />
        <div className="hiddenBlock"></div>
      </div>
    </div>
  );
}
