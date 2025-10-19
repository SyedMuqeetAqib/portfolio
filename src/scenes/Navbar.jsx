import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import { FaBars, FaTimes } from "react-icons/fa";

const Link = ({ page, selectedPage, setSelectedPage, isMobile = false }) => {
  const lowerCasePage = page.toLowerCase();
  const isActive = selectedPage === lowerCasePage;

  return (
    <AnchorLink
      className={`
        relative px-4 py-2 rounded-lg transition-all duration-300
        ${isActive ? "text-white" : "text-gray-300 hover:text-white"}
        ${isMobile ? "text-xl" : "text-sm font-medium"}
      `}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
      {isActive && (
        <motion.div
          className="absolute inset-0 glass rounded-lg -z-10"
          layoutId="activeTab"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const navItems = ["Home", "Skills", "Services", "Projects", "Contact"];

  return (
    <motion.nav
      className={`
        fixed top-0 w-full z-50 py-4 transition-all duration-300
        ${isTopOfPage ? "" : "glass-strong backdrop-blur-xl"}
      `}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center justify-between mx-auto w-5/6 max-w-7xl">
        {/* Logo */}
        <motion.h4
          className="font-space text-xl font-bold text-gradient"
          whileHover={{ scale: 1.05 }}
        >
          Syed Muqeet Aqib
        </motion.h4>

        {/* DESKTOP NAV */}
        {isDesktop ? (
          <div className="flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item}
                page={item}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            ))}
          </div>
        ) : (
          <motion.button
            className="glass rounded-lg p-2 text-white"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuToggled ? <FaTimes size={20} /> : <FaBars size={20} />}
          </motion.button>
        )}

        {/* MOBILE MENU */}
        <AnimatePresence>
          {!isDesktop && isMenuToggled && (
            <motion.div
              className="fixed inset-0 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Backdrop */}
              <motion.div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={() => setIsMenuToggled(false)}
              />

              {/* Menu Panel */}
              <motion.div
                className="absolute right-0 top-0 h-full w-80 glass-strong"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
              >
                <div className="p-8">
                  {/* Close Button */}
                  <div className="flex justify-end mb-8">
                    <motion.button
                      className="glass rounded-lg p-2 text-white"
                      onClick={() => setIsMenuToggled(false)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaTimes size={20} />
                    </motion.button>
                  </div>

                  {/* Menu Items */}
                  <div className="flex flex-col gap-4">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          page={item}
                          selectedPage={selectedPage}
                          setSelectedPage={setSelectedPage}
                          isMobile={true}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
