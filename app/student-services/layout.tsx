import Footer from '@/components/Footer';

export default function StudentLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Footer />   // 默认 Footer
    </>
  );
}