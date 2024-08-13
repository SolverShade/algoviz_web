import '@/app/ui/global.css';
import SideNav from './ui/side_navigator/sidenav';

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
