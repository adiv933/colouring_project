import { useGSAP } from "@gsap/react";
import Navbar from "../components/Navbar";
import gsap from "gsap";
import PageHeading from "../components/PageHeading";

function Contact() {
  useGSAP(() => {
    const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;

    if (!isSmallScreen) {
      gsap.from(".hero", {
        y: 200,
        opacity: 0,
        delay: 2.5,
        duration: 0.8,
      });
    }
  });

  return (
    <div className="w-full h-screen gradient-background">
      <Navbar />
      <section className="h-screen w-full flex flex-col justify-center items-center p-8 hero">
        <PageHeading>Contact us</PageHeading>
        <div className="w-fit text-center mt-8 bg-white p-2 sm:p-8 rounded-lg">
          <p className="text-lg text-black ">
            We&apos;d love to hear from you! Feel free to reach out to us at:
          </p>
          <a
            href="mailto:themotherssymbol@gmail.com"
            className="text-[#dbaf46] hover:underline text-md sm:text-lg md:text-xl mt-4 block"
          >
            themotherssymbol@gmail.com
          </a>
        </div>
      </section>
    </div>
  );
}

export default Contact;
