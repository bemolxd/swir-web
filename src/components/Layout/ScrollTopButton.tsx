import { useEffect, useState } from "react";
import { MdArrowUpward } from "react-icons/md";

import { IconButton } from "components/IconButton";

import { useCheckMobile } from "./useCheckMobile";

export const ScrollTopButton = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const isMobile = useCheckMobile();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 250) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!visible) return null;

  return (
    <IconButton
      icon={<MdArrowUpward />}
      onClick={scrollToTop}
      isRound
      position="fixed"
      right={isMobile ? 8 : 20}
      top={window.innerHeight - 80}
      zIndex={999}
    />
  );
};
