import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <>
      <Header
        linkButton={{
          path: '/list',
          name: 'list',
        }}
      />
      <main>{children}</main>
      <Footer />
    </>
  );
}
