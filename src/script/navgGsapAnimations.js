import gsap from 'gsap';

const navAnimateElements = () => {
  gsap.from(".nav-logo, .nav-links > a", 2, {
    top: "30px",
    opacity: 0,
    ease: "power4.inOut",
    delay: 1,
    stagger: {
      amount: 0.3,
    }
  });
}

export default navAnimateElements;