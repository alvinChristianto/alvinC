import Navbar from "./Components/Navbar";
import HomeSection from "./Components/Home";
import AboutMe from "./Components/AboutMe";
import Portfolio from "./Components/Portfolio";
import IndividualProject from "./Components/IndividualProject";
import Blog from "./Components/Blog";
import Script from "next/script";

export default function Home() {
  return (
    <>
      {/* <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-2M3V0ZN4MB"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-2M3V0ZN4MB, {
            page_path: window.location.pathname,
          });
        `,
        }}
      /> */}

      <Script src="https://www.googletagmanager.com/gtag/js?id=G-2M3V0ZN4MB" ></Script>
      <Script id="google-analytics" >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-2M3V0ZN4MB');
        `}
      </Script>
      <Navbar />
      <div className="pt-16">
        <HomeSection />
        <AboutMe />
        <IndividualProject />
        <Portfolio />
        <Blog />
      </div>
    </>
  );
}
