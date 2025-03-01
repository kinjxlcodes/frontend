import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const fullText = "Redefining Fashion With Technology";
  const [text, setText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index += 1;
      setText(fullText.slice(0, index));

      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between relative overflow-hidden">
      {/* Background Animated Images */}
      <FloatingImages />

      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-6 relative z-10">
        <h1 className="text-3xl font-bold">CyTry</h1>
        <SlideTabsExample />
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col justify-center items-center text-center relative z-10">
        {/* Puzzle Assemble Effect */}
        <div className="flex text-7xl lg:text-8xl font-bold relative">
          <motion.span initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} className="mr-3">
            Fashion
          </motion.span>
          <motion.span initial={{ x: 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className="mr-3">
            Meets
          </motion.span>
          <motion.span initial={{ y: 200, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
            AI
          </motion.span>
          
        </div>
        <p className='text-red-600'>Under Development</p>

        {/* Typewriter Effect */}
        <motion.p className="text-gray-400 text-lg h-8 mt-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {text}
        </motion.p>

        <a href="#scroll" className="bg-gray-900 text-white py-3 px-6 mt-6 rounded-full inline-flex items-center">
          TRY ME <span className="ml-2">↓</span>
        </a>
      </main>

      {/* Footer Section */}
      <footer className="flex justify-between items-end px-8 py-6 relative z-10">
        <div></div>
        <p className="max-w-md text-right">
          Discover the future of fashion with AI-powered styling, trend forecasting, and personalized shopping experiences tailored just for you.
        </p>
      </footer>
    </div>
  );
};

const FloatingImages = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Left-Top Image - Below "CyTry" Logo (x: 126px, y: 253px) */}
      <motion.img
        src="src/fashion1.jpg"
        alt="Fashion Element"
        className="absolute"
        style={{
          top: "180px", 
          left: "100px", 
          height: "560px", 
          width: "auto", 
          opacity: 0.5,
          borderRadius: "12px",
        }}
        initial={{ scaleY: 0.5, opacity: 0 }}
        animate={{ scaleY: 1.2, opacity: 1 }}
        exit={{ scaleY: 0, opacity: 0 }}
        transition={{ duration: 2.5, ease: "easeInOut", delay: 1}}
      />

      {/* Top-Right Image - Moves Left While Growing, Then Disappears */}
      <motion.img
        src="src/fashion2.jpg"
        alt="AI Fashion"
        className="absolute top-[120px] right-5 w-150 h-40 object-cover opacity-50 rounded-xl"
        initial={{ scaleX: 0.5, x: 50, opacity: 0 }}
        animate={{ scaleX: 1.2, x: -50, opacity: 1 }}
        exit={{ scaleX: 0, x: -100, opacity: 0 }}
        transition={{ duration: 3.5, ease: "easeInOut", delay: 1 }}
      />
    </div>
  );
};

const SlideTabsExample = () => {
  return (
    <div className="flex space-x-6">
      <SlideTabs />
    </div>
  );
};

const SlideTabs = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [position, setPosition] = useState({ left: 0, width: 0, opacity: 0 });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((prev) => ({ ...prev, opacity: 0 }));
        setActiveTab(null);
      }}
      className="relative mx-auto flex w-fit rounded-full border-2 border-white bg-black p-1"
    >
      <Tab setPosition={setPosition} label="Home" activeTab={activeTab} setActiveTab={setActiveTab} />
      <Tab setPosition={setPosition} label="Try-On" activeTab={activeTab} setActiveTab={setActiveTab} />
      <Tab setPosition={setPosition} label="Contact" activeTab={activeTab} setActiveTab={setActiveTab} />

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ label, setPosition, activeTab, setActiveTab }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({ left: ref.current.offsetLeft, width, opacity: 1 });
        setActiveTab(label);
      }}
      className={`relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase transition-colors md:px-5 md:py-3 md:text-base ${
        activeTab === label ? 'text-black' : 'text-white'
      }`}
    >
      {label}
    </li>
  );
};

const Cursor = ({ position }) => {
  return <motion.li animate={position} className="absolute z-0 h-7 rounded-full bg-white md:h-12" />;
};

export default Navbar;
