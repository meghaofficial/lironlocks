import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineDownload } from "react-icons/ai";
import catalogue from "../assets/LIRON CATALOGUE.pdf";

type MenuSection = {
  title: string;
  items: {
    title: string;
    subCats: string[],
    icon: string,
  }[];
};

const menuData: MenuSection[] = [
  {
    title: "Categories",
    items: [
      {
        title: "Mortise Locks",
        subCats: [
          "CY Regular",
          "CY Regular 2",
          "Four Round Bullet",
          "Slim"
        ],
        icon: `https://res.cloudinary.com/dlmdsldqn/image/upload/v1772265265/mortice_icon_l0dqma.png`,
      },
      {
        title: "Handles",
        subCats: [
          "SS Plate Zinc Die Casted Handle",
          "Stainless Steel Handles",
          "Iron Handles",
          "Stainless Steel Rose Handles"
        ],
        icon: `https://res.cloudinary.com/dlmdsldqn/image/upload/v1772265264/handles_icon_tmblo3.png`,
      },
      {
        title: "Cylinders",
        subCats: [
          "Both Side Regular Key",
          "Both Side Ultra Key",
        ],
        icon: `https://res.cloudinary.com/dlmdsldqn/image/upload/v1772265265/cylinder_icon_ognc6m.png`,
      },
      {
        title: "Dead Locks",
        subCats: [
          "Tribolt",
          "Ultra Drawer Lock",
          "Fashion Drawer Lock",
          "Super Drawer Lock",
          "CP Drawer Lock"
        ],
        icon: `https://res.cloudinary.com/dlmdsldqn/image/upload/v1772265264/deadlock_icon_ehjok5.png`,
      },
    ],
  },
];

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <nav className="relative w-full bg-white/60 shadow-sm rounded-md backdrop-blur-md">
      <div className="max-w-7xl mx-auto p-2 flex items-center justify-between">
        {/* Logo */}
        <div className="font-bold flex items-center gap-6">
          <div className="flex items-center gap-1 cursor-pointer" onClick={() => navigate("/")}>
            <img src="/lion.png" alt="" className="h-6" />
            <span>LironLocks</span>
          </div>

          <div className="h-6 w-px rounded-full bg-gray-200"></div>

          {/* Products */}
          <div
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <div className="group flex items-center gap-1 cursor-pointer">
              <button className="text-gray-700 text-sm cursor-pointer font-medium group-hover:text-brand transition">
                Products
              </button>

              <IoIosArrowDown
                className="transition-transform duration-300 group-hover:rotate-180 text-gray-300 group-hover:text-gray-500 mt-1"
              />
            </div>

            {/* Mega Menu */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ duration: 0.25 }}
                  className="absolute left-80 -translate-x-1/2 mt-6 w-162.5 bg-white rounded-xl shadow-2xl px-6 p-8 z-50"
                >
                  <p className="text-[10px] text-gray-400 font-semibold tracking-wider">PRODUCTS</p>
                  {menuData.map((section) => (
                    <div key={section.title}>
                      <div className="space-y-5 grid grid-cols-2 gap-x-3 justify-between">
                        {section.items.map((item) => (
                          <div className="relative group hover:bg-gray-100 rounded-lg p-3">
                            <div className="absolute mt-2 rounded-full p-2 bg-gray-300 cursor-pointer text-gray-400">
                              <img src={item.icon} alt="icon" className="h-4 w-4" />
                            </div>
                            <div
                              key={item.title}
                              className="cursor-pointer ms-12"
                            >
                              <p className="font-semibold text-gray-800 group-hover:text-brand hover:font-bold transition" onClick={() => navigate(`/${item.title}`)}>
                                {item.title}
                              </p>
                              <div className="flex flex-col gap-2 mt-2">
                                {item.subCats.map(s => (
                                  <p className="text-sm font-normal text-gray-500 hover:text-black cursor-pointer hover:font-semibold" onClick={() => navigate(`/${item.title}/${s}`)}>
                                    {s}
                                  </p>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button className="text-gray-700 cursor-pointer text-sm font-medium hover:text-brand transition">
            About
          </button>

          <button className="text-gray-700 cursor-pointer text-sm font-medium hover:text-brand transition">
            Contact
          </button>
        </div>

        {/* Right Side */}
        <a href={catalogue} download="LIRON-CATALOGUE.pdf">
          <button className="px-3 flex items-center gap-2 py-1 pb-1.5 text-sm cursor-pointer rounded-md bg-brand text-white transition hover:bg-dark">
            <span>Catalogue</span>
            <AiOutlineDownload className="mt-1" />
          </button>
        </a>
      </div>
    </nav>
  );
}