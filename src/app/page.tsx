"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  Coffee,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Twitter,
  Plus,
  ShoppingCart,
  Menu,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import SignInModal from "../components/SignInModal";

const ConcentricCircles = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="50"
      cy="50"
      r="48"
      stroke="currentColor"
      strokeWidth="2"
      strokeDasharray="4 4"
      opacity="0.2"
    />
    <circle
      cx="50"
      cy="50"
      r="38"
      stroke="currentColor"
      strokeWidth="2"
      opacity="0.3"
    />
    <circle
      cx="50"
      cy="50"
      r="28"
      stroke="currentColor"
      strokeWidth="2"
      strokeDasharray="4 4"
      opacity="0.4"
    />
    <circle
      cx="50"
      cy="50"
      r="18"
      stroke="currentColor"
      strokeWidth="2"
      opacity="0.5"
    />
  </svg>
);

const Sparkle = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 0C20 11.0457 28.9543 20 40 20C28.9543 20 20 28.9543 20 40C20 28.9543 11.0457 20 0 20C11.0457 20 20 11.0457 20 0Z"
      fill="currentColor"
    />
  </svg>
);

export default function App() {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [showFullMenu, setShowFullMenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const allMenuItems = [
    {
      name: "Almond Croissant",
      desc: "Flaky, buttery pastry filled with sweet almond frangipane and topped with toasted almonds.",
      price: "$4.50",
      image:
        "https://images.unsplash.com/photo-1549903072-7e6e0bedb7fb?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Artisan Cappuccino",
      desc: "Rich espresso blended with velvety steamed milk and a thick layer of microfoam.",
      price: "$5.00",
      image:
        "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Matcha Latte",
      desc: "Ceremonial grade matcha whisked with your choice of milk and a touch of honey.",
      price: "$5.50",
      image:
        "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Blueberry Muffin",
      desc: "Soft and fluffy muffin bursting with fresh blueberries and a crumbly streusel top.",
      price: "$3.75",
      image:
        "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Avocado Toast",
      desc: "Smashed avocado on sourdough with cherry tomatoes, microgreens, and a balsamic glaze.",
      price: "$8.50",
      image:
        "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Pour Over Coffee",
      desc: "Single-origin beans hand-poured to perfection, highlighting bright and fruity notes.",
      price: "$4.00",
      image:
        "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Iced Caramel Macchiato",
      desc: "Espresso combined with vanilla-flavored syrup, milk and caramel drizzle over ice.",
      price: "$5.25",
      image:
        "https://images.unsplash.com/photo-1557006021-b85faa2bc5e2?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Chocolate Croissant",
      desc: "Classic French pastry with a rich, dark chocolate center.",
      price: "$4.00",
      image:
        "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Cold Brew",
      desc: "Slow-steeped custom blend, served over ice for a super-smooth coffee experience.",
      price: "$4.50",
      image:
        "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=800&auto=format&fit=crop",
    },
  ];

  const displayedMenu = showFullMenu ? allMenuItems : allMenuItems.slice(0, 6);

  return (
    <div className="font-sans bg-slate-50 min-h-screen overflow-x-hidden text-slate-800">
      {/* Navbar */}
      <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl bg-white/95 backdrop-blur-md rounded-full px-4 md:px-6 py-3 md:py-4 flex justify-between items-center z-50 shadow-sm border border-slate-100">
        <div className="flex items-center gap-2 text-purple-700 font-bold text-xl shrink-0 flex-1">
          <Coffee className="text-amber-400" />
          <span>TrendyCafe</span>
        </div>
        <div className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 font-medium text-slate-600">
          <a
            href="#"
            className="hover:text-purple-600 transition-colors whitespace-nowrap"
          >
            Home
          </a>
          <a
            href="#"
            className="hover:text-purple-600 transition-colors whitespace-nowrap"
          >
            Menu
          </a>
          <a
            href="#"
            className="hover:text-purple-600 transition-colors whitespace-nowrap"
          >
            Our Story
          </a>
          <a
            href="#"
            className="hover:text-purple-600 transition-colors whitespace-nowrap"
          >
            Contact
          </a>
        </div>
        <div className="flex items-center justify-end gap-2 md:gap-4 shrink-0 flex-1">
          <button className="relative p-2 text-slate-600 hover:text-purple-600 transition-colors">
            <ShoppingCart size={24} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-amber-400 text-purple-900 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center transform translate-x-1 -translate-y-1">
                {cartCount}
              </span>
            )}
          </button>
          <button
            onClick={() => setIsSignInOpen(true)}
            className="hidden lg:block font-medium text-slate-600 hover:text-purple-600 transition-colors whitespace-nowrap"
          >
            Sign In
          </button>
          <button className="hidden sm:block border-2 border-purple-600 text-purple-600 rounded-full px-4 md:px-6 py-2 font-semibold hover:bg-purple-50 transition-colors whitespace-nowrap">
            Contact Us
          </button>
          <button
            className="lg:hidden p-2 text-slate-600 hover:text-purple-600 transition-colors relative w-10 h-10 flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center relative">
              <motion.span
                animate={
                  isMobileMenuOpen ? { y: 0, rotate: 45 } : { y: -8, rotate: 0 }
                }
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-6 h-0.5 bg-current absolute rounded-full"
              />
              <motion.span
                animate={
                  isMobileMenuOpen
                    ? { opacity: 0, scale: 0.5 }
                    : { opacity: 1, scale: 1 }
                }
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-6 h-0.5 bg-current absolute rounded-full"
              />
              <motion.span
                animate={
                  isMobileMenuOpen ? { y: 0, rotate: -45 } : { y: 8, rotate: 0 }
                }
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-6 h-0.5 bg-current absolute rounded-full"
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 lg:hidden bg-slate-900/20 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed top-24 md:top-28 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl bg-white/95 backdrop-blur-xl rounded-3xl p-4 md:p-6 z-40 shadow-2xl border border-slate-100 lg:hidden flex flex-col gap-1"
          >
            <a
              href="#"
              className="font-semibold text-slate-700 hover:text-purple-600 hover:bg-purple-50 p-3 rounded-xl transition-all text-lg"
            >
              Home
            </a>
            <a
              href="#"
              className="font-semibold text-slate-700 hover:text-purple-600 hover:bg-purple-50 p-3 rounded-xl transition-all text-lg"
            >
              Menu
            </a>
            <a
              href="#"
              className="font-semibold text-slate-700 hover:text-purple-600 hover:bg-purple-50 p-3 rounded-xl transition-all text-lg"
            >
              Our Story
            </a>
            <a
              href="#"
              className="font-semibold text-slate-700 hover:text-purple-600 hover:bg-purple-50 p-3 rounded-xl transition-all text-lg"
            >
              Contact
            </a>
            <div className="h-px bg-slate-100 w-full my-2" />
            <button
              onClick={() => {
                setIsSignInOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className="font-semibold text-slate-700 hover:text-purple-600 hover:bg-purple-50 p-3 rounded-xl transition-all text-lg text-left"
            >
              Sign In
            </button>
            <button className="sm:hidden border-2 border-purple-600 text-purple-600 rounded-full px-6 py-3 font-bold hover:bg-purple-50 transition-all w-full mt-2 text-lg">
              Contact Us
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop"
            alt="Coffee and pastry"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-900/50"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-24"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight">
            Artisan Coffee & <br />
            <span className="font-caveat text-amber-400 text-6xl md:text-8xl lg:text-9xl font-normal tracking-wide inline-block transform -rotate-2 my-2">
              Fresh Pastries
            </span>
            <br />
            Baked Daily.
          </h1>
          <div className="mt-12 flex justify-center">
            <button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full pl-8 pr-2 py-2 flex items-center gap-4 text-lg font-semibold transition-transform hover:scale-105 shadow-xl shadow-purple-900/20">
              Order Ahead Online
              <div className="bg-white text-purple-600 rounded-full p-2">
                <ArrowRight size={20} />
              </div>
            </button>
          </div>
        </motion.div>

        {/* Decorative elements in hero */}
        <Sparkle className="absolute top-1/4 left-1/4 text-amber-400 z-10 animate-pulse" />
        <Sparkle className="absolute bottom-1/4 right-1/4 text-purple-400 z-10 animate-pulse delay-300" />
      </section>

      {/* Menu Highlights */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative">
        <ConcentricCircles className="absolute top-10 left-0 text-purple-300 -z-10" />
        <Sparkle className="absolute top-20 right-10 text-amber-400 -z-10" />

        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Our{" "}
            <span className="font-caveat text-purple-600 text-5xl md:text-6xl font-normal">
              best-selling
            </span>{" "}
            items
          </h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-lg">
            Discover our most loved pastries and signature coffee drinks,
            crafted with care and the finest ingredients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedMenu.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-4 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow border border-slate-100 group"
            >
              <div className="relative overflow-hidden rounded-[1.5rem] aspect-[4/3] mb-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-purple-700 font-bold shadow-sm">
                  {item.price}
                </div>
              </div>
              <div className="px-2 pb-2">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {item.name}
                </h3>
                <p className="text-slate-500 text-sm mb-6 line-clamp-2">
                  {item.desc}
                </p>
                <button
                  onClick={() => setCartCount((prev) => prev + 1)}
                  className="w-full py-3 rounded-xl font-semibold text-purple-600 bg-purple-50 hover:bg-purple-600 hover:text-white transition-colors flex items-center justify-center gap-2"
                >
                  <Plus size={18} /> Add to Order
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {!showFullMenu && (
          <div className="mt-16 flex justify-center">
            <button
              onClick={() => setShowFullMenu(true)}
              className="border-2 border-slate-200 text-slate-600 rounded-full px-8 py-3 font-semibold hover:border-purple-600 hover:text-purple-600 transition-colors"
            >
              View Full Menu
            </button>
          </div>
        )}
      </section>

      {/* Our Story */}
      <section className="py-24 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative">
        <div className="flex-1 relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
            The story behind our <br />
            <span className="font-caveat text-purple-600 text-5xl md:text-6xl font-normal relative inline-block">
              local beans
              <svg
                className="absolute w-full h-4 -bottom-1 left-0 text-amber-400"
                viewBox="0 0 100 20"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 10 Q 50 20 100 10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed">
            We believe that great coffee starts with great beans. That's why we
            source our beans directly from local farmers who share our passion
            for quality and sustainability. Every cup you drink supports our
            community and brings you the freshest taste possible. Come enjoy our
            cozy interior and let the aroma of freshly baked pastries make your
            day.
          </p>
          <button className="border-2 border-purple-600 text-purple-600 rounded-full pl-6 pr-2 py-2 flex items-center gap-4 font-semibold hover:bg-purple-50 transition-colors w-max">
            Read More
            <div className="bg-purple-600 text-white rounded-full p-1.5">
              <ArrowRight size={16} />
            </div>
          </button>
        </div>
        <div className="flex-1 relative w-full">
          {/* Decorative blobs behind image */}
          <div className="absolute -top-12 -left-12 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
          <div className="absolute -bottom-12 -right-12 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
          <ConcentricCircles className="absolute -bottom-10 -left-10 text-purple-300 z-20" />

          <img
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop"
            alt="Cozy interior"
            className="relative z-10 rounded-[2rem] shadow-2xl object-cover aspect-[4/3] w-full border-8 border-white"
            referrerPolicy="no-referrer"
          />

          {/* Floating badge */}
          <div className="absolute -top-6 -right-6 z-20 bg-white rounded-full p-4 shadow-xl border border-slate-100 flex items-center justify-center w-28 h-28 transform rotate-12">
            <div className="text-center">
              <span className="block font-caveat text-purple-600 text-2xl leading-none">
                100%
              </span>
              <span className="block text-xs font-bold text-slate-800 uppercase tracking-wider mt-1">
                Local
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16 relative">
          <Sparkle className="absolute top-0 left-1/3 text-purple-400 -z-10" />
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Follow our{" "}
            <span className="font-caveat text-purple-600 text-5xl md:text-6xl font-normal">
              Instagram
            </span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-lg">
            @trendycafe_local
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square rounded-2xl overflow-hidden group relative bg-slate-200"
            >
              <img
                src={`https://picsum.photos/seed/cafe${i + 10}/400/400`}
                alt="Instagram post"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-purple-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                <Instagram className="text-white w-10 h-10 transform scale-50 group-hover:scale-100 transition-transform duration-300" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-700 text-white py-20 px-6 rounded-t-[3rem] mt-12 relative overflow-hidden">
        {/* Decorative background elements */}
        <ConcentricCircles className="absolute top-0 right-0 text-purple-500 opacity-20 w-96 h-96 transform translate-x-1/3 -translate-y-1/3" />
        <ConcentricCircles className="absolute bottom-0 left-0 text-purple-500 opacity-20 w-64 h-64 transform -translate-x-1/3 translate-y-1/3" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left relative z-10">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 font-bold text-3xl mb-6">
              <Coffee className="text-amber-400" size={32} />
              <span>TrendyCafe</span>
            </div>
            <p className="text-purple-200 mb-8 text-lg max-w-sm mx-auto md:mx-0">
              Your favorite local spot for artisan coffee and fresh, daily-baked
              pastries.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <a
                href="#"
                className="bg-purple-600 p-3 rounded-full hover:bg-amber-400 hover:text-purple-900 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-purple-600 p-3 rounded-full hover:bg-amber-400 hover:text-purple-900 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-purple-600 p-3 rounded-full hover:bg-amber-400 hover:text-purple-900 transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-amber-400 font-outfit">
              Business Hours
            </h3>
            <ul className="space-y-4 text-purple-100">
              <li className="flex justify-between max-w-xs mx-auto md:mx-0 border-b border-purple-600/50 pb-2">
                <span>Monday - Friday</span>{" "}
                <span className="font-semibold text-white">
                  7:00 AM - 6:00 PM
                </span>
              </li>
              <li className="flex justify-between max-w-xs mx-auto md:mx-0 border-b border-purple-600/50 pb-2">
                <span>Saturday</span>{" "}
                <span className="font-semibold text-white">
                  8:00 AM - 5:00 PM
                </span>
              </li>
              <li className="flex justify-between max-w-xs mx-auto md:mx-0 border-b border-purple-600/50 pb-2">
                <span>Sunday</span>{" "}
                <span className="font-semibold text-white">
                  8:00 AM - 3:00 PM
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-amber-400 font-outfit">
              Location & Contact
            </h3>
            <ul className="space-y-6 text-purple-100">
              <li className="flex items-start justify-center md:justify-start gap-4">
                <div className="bg-purple-600 p-2 rounded-lg shrink-0">
                  <MapPin size={24} className="text-amber-400" />
                </div>
                <span className="pt-1">
                  123 Artisan Way
                  <br />
                  Coffee District
                  <br />
                  Cityville, ST 12345
                </span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-4">
                <div className="bg-purple-600 p-2 rounded-lg shrink-0">
                  <Clock size={24} className="text-amber-400" />
                </div>
                <span className="text-lg">
                  Call us:{" "}
                  <span className="font-semibold text-white">
                    (555) 123-4567
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-purple-600 text-center text-purple-300 text-sm relative z-10">
          <p>
            &copy; {new Date().getFullYear()} TrendyCafe. All rights reserved.
          </p>
        </div>
      </footer>

      <SignInModal
        isOpen={isSignInOpen}
        onClose={() => setIsSignInOpen(false)}
      />
    </div>
  );
}
