import XLogo from "@/assets/x.svg";
import LinkedinLogo from "@/assets/linkedin.svg";
import GithubLogo from "@/assets/github.svg";

export default function Social() {
  return (
    <div className="flex flex-row justify-between items-center mt-6">
      <div className="flex flex-row gap-x-3">
        <a 
          target="_blank" 
          rel="noreferrer" 
          href="https://x.com/shaikawez59" 
          className="transition-transform hover:scale-110"
        >
          <img
            alt="Twitter"
            loading="lazy"
            width="18"
            height="18"
            src={XLogo}
            className="mt-1 opacity-70 hover:opacity-100 transition-opacity"
          />
        </a>
        <a 
          target="_blank" 
          rel="noreferrer" 
          href="https://github.com/shaikawez59"
          className="transition-transform hover:scale-110"
        >
          <img
            alt="Github"
            loading="lazy"
            width="22"
            height="22"
            src={GithubLogo}
            className="ml-1 opacity-70 hover:opacity-100 transition-opacity"
          />
        </a>
        <a 
          target="_blank" 
          rel="noreferrer" 
          href="https://www.linkedin.com/in/shaikawez59/"
          className="transition-transform hover:scale-110"
        >
          <img
            alt="Linkedin"
            loading="lazy"
            width="22"
            height="22"
            src={LinkedinLogo}
            className="mt-0.5 ml-1 opacity-70 hover:opacity-100 transition-opacity"
          />
        </a>
      </div>
    </div>
  );
}