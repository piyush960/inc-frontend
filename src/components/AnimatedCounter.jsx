
import { IconCurrencyRupee } from "@tabler/icons-react";
import {
  motion,
  animate,
  useInView,
  useIsomorphicLayoutEffect,
} from "framer-motion";
import { useRef } from "react";
import { styles } from "../styles";
import { popper, prize } from "../assets";


const CountUp = ({
  from,
  to,
  animationOptions,
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;

    if (!element) return;
    if (!inView) return;

    // Set initial value
    element.textContent = String(from);

    // If reduced motion is enabled in system's preferences
    if (window.matchMedia("(prefers-reduced-motion)").matches) {
      element.textContent = String(to);
      return;
    }

    const controls = animate(from, to, {
      duration: 2,
      ease: "easeOut",
      ...animationOptions,
      onUpdate(value) {
        element.textContent = Number(Number(value).toFixed(0)).toLocaleString('en-US');
      },
    });

    // Cancel on unmount
    return () => {
      controls.stop();
    };
  }, [ref, inView, from, to]);

  return <span ref={ref} />;
};

const AnimatedCounter = () => {
  return (
    <section className="relative w-full overflow-hidden pointer-events-none">
    <motion.div className="w-full absolute max-sm:top-[28%] flex justify-center overflow-hidden"
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    viewport={{ once: true }}
    transition={{duration: 1, delay: 3}}
    >
      <img src={popper} alt="popper" className="w-[70%] sm:w-[50%]"/>
    </motion.div>
    <motion.div 
    initial={{ y: 100, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ ease: "easeInOut", duration: 0.75}}
    className="sm:my-24 py-14"
    >
      <h2 className={`${styles.sectionHeadText} flex max-sm:flex-col items-center justify-center gap-4`}><img src={prize} alt="trophy" width={70} height={70}/><span className="block">With a Prize Pool of</span></h2>
      <div className="w-full flex items-center justify-center text-orange-100 max-sm:py-4">
        <IconCurrencyRupee className="sm:size-[190px] size-[50px]"/>
        <div className="sm:text-[200px] text-[60px]  font-extrabold" style={{width: "6ch"}}>
          <CountUp from={550000} to={700000}/>
        </div>
        <span className="sm:text-[190px] text-[50px] font-bold">&nbsp;+</span>
      </div>
    </motion.div>
    </section>
  )
}

export default AnimatedCounter;