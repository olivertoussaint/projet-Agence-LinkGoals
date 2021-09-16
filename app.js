window.addEventListener('load', launch);

function launch() {

    const master = gsap.timeline();

    master
    .to('.left h2', {duration: 2.5, delay: 0.5, opacity: 0, y: -100, ease: "slow (0.7, 0.7, false)"}) 
    .to('.left', {duration: 2.5, top: "-150%", autoAlpha: 0, ease: "slow (0.7, 0.7, false)"}, '-=1')
    .to('.right h2', {duration: 2.5, opacity: 0, y: +60, ease: "slow (0.7, 0.7, false)"}, '-=2')           
    .to('.right', {duration: 2.5, top: "+100%", autoAlpha: 0, ease: "slow (0.7, 0.7, false)"}, '-=1.5') 
    .from('.nav', {duration: 1, opacity: 0, y: -60, ease: "bounce.out"}, '-=0.2')
    .from('h1', {opacity: 0, duration: 1, x: 200, ease: "power2"}, 5.4)
    .from('.social li', {duration: 0.75, opacity: 0, y: 360, ease: "slow (0.7, 0.7, false)"}, '-=0.2')
    .from('i', {duration: 0.5, opacity: 0, x: -100, ease: "bounce", stagger: 0.1}, '-=0.2')
}