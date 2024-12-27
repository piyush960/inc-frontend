import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";


export const ContainerScroll = ({
  titleComponent,
  children
}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.8, 1] : [1.25, 1.10];
  };

  const translateDimensions = () => {
    return isMobile ? [1, 1] : [40, -120];
  }


  const rotate = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translateh = useTransform(scrollYProgress, [0, 0.65], translateDimensions());

  return (
    (<div
      className="h-full sm:h-[135vh] flex items-center justify-center relative"
      ref={containerRef}>
      <div
        className="sm:py-10 w-full md:absolute bottom-[8%]"
        style={{
          perspective: "1000px",
        }}>
        <Header translate={translateh} titleComponent={titleComponent} />
        <Card rotate={isMobile ? 0 : rotate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>)
  );
};

export const Header = ({
  translate,
  titleComponent
}) => {
  return (
    (<motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center">
      {titleComponent}
    </motion.div>)
  );
};

export const Card = ({
  rotate,
  scale,
  translate,
  children
}) => {
  return (
    (<motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-5xl -mt-12 mx-auto w-full px-2 rounded-[30px] shadow-2xl">
      <div
        className="h-full w-full overflow-hidden rounded-2xl bg-zinc-900 md:rounded-2xl p-4 ">
        {children}
      </div>
    </motion.div>)
  );
};
