import React from "react";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Wave from "./UI/Wave";

function Footer() {
  const Links = [
    {
      icon: <Instagram className="text-green-700" />,
      link: "https://www.instagram.com/",
    },
    {
      icon: <Facebook className="text-green-700" />,
      link: "https://www.instagram.com/",
    },
    {
      icon: <Youtube className="text-green-700" />,
      link: "https://www.instagram.com/",
    },
    {
      icon: <Twitter className="text-green-700" />,
      link: "https://www.instagram.com/",
    },
    {
      icon: <Linkedin className="text-green-700" />,
      link: "https://www.instagram.com/",
    },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className="absolute w-screen rotate-180 -bottom-0 -z-10">
        {/* Uncomment if Wave component is available */}
        <Wave />
      </div>
      <div className="relative flex items-start justify-between w-screen pt-8 px-20">
        <div className="flex flex-col items-start text-primary-textgreen font-extrabold text-lg">
          <span>Sociable</span>
          <span>Spot</span>
          <div>
            {/* Uncomment and adjust the Image component if using Next.js or another framework */}
            {/* <Image src={`/public/Logo.png`} alt='Logo' width={100} height={100} /> */}
          </div>
        </div>
        <div className="flex items-start ml-10 justify-between w-2/3">
          <div className="flex flex-col items-start justify-start gap-y-5 font-normal text-primary/80">
            <span className="font-semibold text-primary">Services</span>
            <div>Psychotherapy</div>
            <div>Mental Counseling</div>
            <div>Support Groups</div>
            <div>Case Management</div>
          </div>
          <div className="flex flex-col items-start justify-start gap-y-5 font-normal text-primary/80">
            <span className="font-semibold text-primary">Contact</span>
            <div>+91 91730 58096</div>
            <div>sociable@gmail.com </div>
            <div>Lazyy Tower 192, Burn Swiss</div>
          </div>
          <div className="flex flex-col items-start justify-start gap-y-5 font-normal text-primary/80">
            <span className="font-semibold text-primary">Links</span>
            <div>Privacy Policy</div>
            <div>Terms Of Use</div>
          </div>
          <div className="flex flex-col items-start justify-start gap-y-5 font-normal text-primary/80">
            <span className="font-semibold text-primary">Maps</span>
          </div>
        </div>
      </div>
      <div className="w-screen px-20 mt-14">
        <div className="w-full h-0.5 rounded-full bg-primary/70 mb-10" />
      </div>
      <div className="flex items-center justify-between gap-5 mb-5">
        {Links.map((link, index) => (
          <a
            key={index}
            href={link.link}
            className="hover:opacity-75 transition-opacity"
          >
            {link.icon}
          </a>
        ))}
      </div>
      <div>© 2024 Sociable Spot. All Rights Reserved</div>
    </div>
  );
}

export default Footer;
