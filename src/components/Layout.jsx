import Navbar from './Navbar';
import Footer from './Footer';
import ScrollTopButton from './ScrollTopButton';

export default function Layout({ children, footerProps }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer {...footerProps} />
      <ScrollTopButton />
    </>
  );
}