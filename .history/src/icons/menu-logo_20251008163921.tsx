import React from "react";

type MenuLogoProps = {
  onClick(): void;
};

export const MenuLogo = ({ onClick }: MenuLogoProps) => {
  return (
    <img
      onClick={onClick}
      src="/images/logo.png"
      alt="Menu Logo"
      width={30}
      height={30}
      className="cursor-pointer select-none"
    />
  );
};
