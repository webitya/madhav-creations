import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const FooterEl = () => {
  const currentYear = new Date();

  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black p-8 text-white">
      <div className="container mx-auto flex flex-col items-center gap-10">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-center text-sm md:text-lg font-medium">
          {["Home", "About", "Products", "Gallery", "Contact"].map((link, index) => (
            <a
              key={index}
              href="#"
              className="transition duration-300 hover:text-pink-500 hover:underline"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex justify-center gap-4 md:gap-6">
          <a
            href="#"
            className="p-2 md:p-3 bg-gray-700 rounded-full hover:bg-pink-500 transition duration-300"
          >
            <WhatsAppIcon style={{ fontSize: "1.5rem", mdFontSize: "2rem" }} />
          </a>
          <a
            href="#"
            className="p-2 md:p-3 bg-gray-700 rounded-full hover:bg-purple-500 transition duration-300"
          >
            <InstagramIcon style={{ fontSize: "1.5rem", mdFontSize: "2rem" }} />
          </a>
          <a
            href="#"
            className="p-2 md:p-3 bg-gray-700 rounded-full hover:bg-blue-500 transition duration-300"
          >
            <XIcon style={{ fontSize: "1.5rem", mdFontSize: "2rem" }} />
          </a>
          <a
            href="#"
            className="p-2 md:p-3 bg-gray-700 rounded-full hover:bg-blue-700 transition duration-300"
          >
            <FacebookIcon style={{ fontSize: "1.5rem", mdFontSize: "2rem" }} />
          </a>
          <a
            href="#"
            className="p-2 md:p-3 bg-gray-700 rounded-full hover:bg-red-600 transition duration-300"
          >
            <YouTubeIcon style={{ fontSize: "1.5rem", mdFontSize: "2rem" }} />
          </a>
        </div>
        <p className="text-xs md:text-sm text-gray-400 text-center">
          © {currentYear.getFullYear()} Madhav Creation, Inc. All rights reserved.
        </p>
        <p className="text-lg md:text-xs text-gray-300 text-center my-1">
  <span>Designed by </span>
  <a 
    target="_blank" 
    href="https://webitya.com" 
    rel="noopener noreferrer"
    className="text-pink-500 underline underline-offset-2 decoration-pink-500 hover:text-pink-700 hover:decoration-pink-700 transition-all duration-300 ease-in-out font-medium"
  >
    Webitya.com
  </a>
</p>

      </div>
    </footer>
  );
};
