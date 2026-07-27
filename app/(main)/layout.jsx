import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
      <CookieConsent />
    </>
  );
}
