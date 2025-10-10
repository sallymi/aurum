import Footer from '@/components/FooterSimple';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Footer />   // 默认 Footer
    </>
  );
}