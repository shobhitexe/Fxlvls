"use client";

import { SVGProps, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { links } from ".";
import BoxReveal from "../ui/box-reveal";

export default function MobileNav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const menuVars = {
    initial: {
      scaleX: 0,
    },
    animate: {
      scaleX: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleX: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <div className="">
      {isNavOpen ? (
        <X
          className="relative z-50 w-6 h-6"
          onClick={() => setIsNavOpen(false)}
        />
      ) : (
        <HamIcon
          className="relative z-50 w-7 h-7"
          onClick={() => setIsNavOpen(true)}
        />
      )}

      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen origin-right bg-black/60 backdrop-filter backdrop-blur-md text-white p-10"
          >
            <div className="flex h-full flex-col justify-center">
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full mt-20 items-center gap-4 "
              >
                {links.map((link, index) => {
                  return (
                    <div className="overflow-hidden" key={link.title}>
                      <MobileNavLink
                        key={index}
                        title={link.title}
                        href={link.href}
                        onClick={() => setIsNavOpen((prev) => !prev)}
                      />
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function HamIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="white"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
}

const MobileNavLink = ({
  title,
  href,
  onClick,
}: {
  title: string;
  href: string;
  onClick: () => void;
}) => {
  const mobileLinkVars = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        ease: [0, 0.55, 0.45, 1],
        duration: 0.7,
      },
    },
  };

  return (
    <motion.div
      variants={mobileLinkVars}
      className="text-3xl uppercase text-white font-semibold"
    >
      <BoxReveal boxColor={"#7200D1"} duration={0.5}>
        <Link href={href} onClick={onClick} className="cursor-pointer">
          {title}
        </Link>
      </BoxReveal>
    </motion.div>
  );
};
