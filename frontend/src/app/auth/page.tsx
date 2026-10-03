import AuthSection from '@/widgets/auth-section/ui/AuthSection';

interface AuthPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function AuthPage({ searchParams }: AuthPageProps) {
  const params = await searchParams;
  const action: 'login' | 'register' =
    params.action === 'login' ? 'login' : 'register';
  return <AuthSection action={action} />;
}
