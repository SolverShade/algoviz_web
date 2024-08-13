import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import './acme-logo.css';

export default function AcmeLogo() {
  return (
    <div
      className="logoContainer"
    >
      <Image src="/Globe.svg" alt="Globe icon" width={48} height={48} />
      <p className="logoText">Algowiz</p>
    </div>
  );
}
