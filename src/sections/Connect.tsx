import { SiGmail, SiTwitter, SiGithub,SiLinkedin } from "react-icons/si";

export const Connect = () => {
  return (
    <section
      id="connect"
      className="relative flex flex-col items-center justify-center h-screen px-8 snap-end md:px-32 snap-always"
    >
      <div className="max-w-xl px-8 py-12 rounded-lg add-bg">
        <p className="mb-4 text-3xl font-bold text-center md:text-4xl md:mb-8">Contact Me</p>
        <p className="mb-8 text-md md:text-xl md:mb-16">
          I love connecting with different people and it would be awesome if we could get in touch :) 
          You can schedule a meet with me on Teams,Gmeet. 
          You can also find me on these platforms:
        </p>
        <div className="flex items-center justify-around w-full py-6 text-3xl rounded-xl">
          <a href="mailto:mayurdhwajs94@gmail.com">
            <SiGmail />
          </a>
          <a href="https://twitter.com/rakshit087/" target="_blank" rel="noreferrer">
            <SiTwitter />
          </a>
          <a href="https://github.com/mayurdhwaj/" target="_blank" rel="noreferrer">
            <SiGithub />
          </a>
          <a href="https://www.linkedin.com/in/mayurdhwaj-singh-652361193/" target="_blank" rel="noreferrer">
            <SiLinkedin />
          </a>
        </div>
      </div>
      
    </section>
  );
};
