import '@/app/ui/global.css';
import SideNav from './ui/dashboard/sidenav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SideNav />
        {children}
      </body>
    </html>
  );
}
