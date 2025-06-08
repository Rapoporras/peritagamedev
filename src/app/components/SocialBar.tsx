// components/SocialBar.jsx
import Link from "next/link";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { SiBluesky } from "react-icons/si";

export default function SocialBar() {
  return (
    <div
      className="fixed z-50 flex items-center gap-4 p-2
                 top-4 right-4
                 sm:top-4 sm:right-4
                 md:top-4 md:right-4
                 max-md:top-auto max-md:bottom-0 max-md:right-0 max-md:left-0 max-md:w-full max-md:justify-center max-md:bg-[#a9d1d1]
                 flex-col sm:flex-row md:flex-row"
    >
      <div className="flex items-center gap-4 max-md:justify-center">
        <a
          href="https://www.instagram.com/peritagamedev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-2xl text-pink-500 hover:scale-110 transition" />
        </a>
        <a
          href="https://x.com/peritagamedev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="text-2xl text-blue-400 hover:scale-110 transition" />
        </a>
        <a
          href="https://bsky.app/profile/peritagamedev.bsky.social"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiBluesky className="text-2xl text-blue-600 hover:scale-110 transition" />
        </a>
        <a
          href="https://www.youtube.com/@peritagamedev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube className="text-2xl text-red-600 hover:scale-110 transition" />
        </a>
      </div>

      <Link
        href={""}
        target="_blank"
        className="ml-2 px-4 py-2 rounded-lg bg-[#e5a074] border-2 border-[#2a3233] text-black font-semibold hover:bg-[#2a3233] hover:border-[#e5a074] transition whitespace-nowrap max-md:ml-4"
      >
        Demo disponible ahora
      </Link>
    </div>
  );
}
