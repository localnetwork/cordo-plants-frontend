import Link from "next/link";
import { useState, React } from "react";
import LoginModal from "../Modals/Login/LoginModal";
export const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <header>
      <div className="mx-auto px-[30px] flex items-center justify-between">
        <div className="site-logo">
          <Link href="/">
            <img
              className="max-w-[120px]"
              width={200}
              height={201}
              src={`/images/logo.png`}
            />
          </Link>
        </div>
        <div className="">
          <div className=" pb-[30px] flex gap-[20px] items-center justify-end">
            <div>
              <a
                onClick={openModal}
                className="font-extrabold inline-block py-[10px] px-[15px] bold text-white bg-[var(--primaryColor)]"
              >
                Login
              </a>
            </div>
            <div>
              <Link
                href="/apply"
                className="inline-block py-[10px] px-[15px] bold"
              >
                Register
              </Link>
            </div>
          </div>
          <ul className="menu text-[20px] gap-[30px] flex items-center font-bold">
            <li>
              <Link href="/" className="hover:text-[var(--primaryColor)]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[var(--primaryColor)]">
                About
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-[var(--primaryColor)]">
                Locations
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-[var(--primaryColor)]"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <LoginModal isOpen={isModalOpen} onClose={closeModal} />
    </header>
  );
};
