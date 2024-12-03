import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-9 px-6">
      {/* Icons Section */}
      <div className="flex items-center gap-6 text-white ml-auto ">
        <a
          href="https://www.linkedin.com/in/wehara-soyza-596717322"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="icon-animation"
        >
          <FaLinkedin size={25} />
        </a>
        <a
          href="https://github.com/weharaSliit"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="icon-animation"
        >
          <FaGithub size={25} />
        </a>
        <a
          href="mailto:soyzawehara@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
          className="icon-animation"
        >
          <FaEnvelope size={25} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
