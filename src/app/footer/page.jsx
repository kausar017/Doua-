"use client";
import { usePathname } from "next/navigation";
import { FaFacebook, FaTwitter } from "react-icons/fa6";

export default function Footer() {
  const patname = usePathname();

  if (patname?.includes("doua")) {
    return <></>;
  } else {
    return (
      <footer className="bg-[#F0F7F0] py-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div>
              <div className="mb-4 flex">
                <img src="/logo.png" alt="Dua & Ruqyah" className="h-16" />
                <div>
                  <h2 className="text-2xl font-bold">Dua & Ruqyah </h2>
                  <p>Hisnul Muslim</p>
                </div>
              </div>
              <p>
                Dua & Ruqyah is a project of the IRD Foundation, created to
                share Islamic resources with everyone. Our goal is to give an
                ad-free and easy-to-access app and website, that helps Muslims
                in their daily lives and strengthens their connection to Allah.
              </p>
              <div className="mt-8 text-gray-500">
                <p>© 2025 Dua & Ruqyah. All rights reserved.</p>
              </div>
            </div>

            {/* Other Pages */}
            <div>
              <h3 className="text-xl font-bold mb-4">Other Pages</h3>
              <ul>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Thanks & Credits
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Our Projects
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Important Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Important Links</h3>
              <ul>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Quran Mazid
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Al Hadis
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Quran.com
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Sunnah.com
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Response-Anti-Islam
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div className="flex flex-col justify-between">
              <div className="flex flex-col space-x-4">
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <span className="flex items-center space-x-5 ">
                  <FaFacebook size={30} />
                  <FaTwitter size={30} />
                </span>
              </div>
              <p>IRD Foundation</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
