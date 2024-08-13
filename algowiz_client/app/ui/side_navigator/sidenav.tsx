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
          href: '/quick_sort',
        },
        {
          title: 'stalin sort',
          href: '/stalin_sort',
        },
      ],
    },
  ]

export default function SideNav() {
  return (
    <div className="sidenavContainer">
      <Link className="logo"
        href="/"
      >
        <div >
          <AcmeLogo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks items={items} />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
      </div>
    </div>
  );
}
