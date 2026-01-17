import React from "react";
import { trackWhatsAppClick } from "../lib/analytics";
import { WHATSAPP_MESSAGE, WHATSAPP_NUMBER } from "../lib/constants";

const WhatsAppLink = React.forwardRef(
  (
    {
      className,
      message = WHATSAPP_MESSAGE,
      location = "unknown",
      onClick,
      children,
      ...props
    },
    ref
  ) => {
    const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    const handleClick = (event) => {
      if (typeof onClick === "function") {
        onClick(event);
      }

      trackWhatsAppClick(location);
    };

    return (
      <a
        ref={ref}
        href={href}
        className={className}
        onClick={handleClick}
        {...props}
      >
        {children}
      </a>
    );
  }
);

WhatsAppLink.displayName = "WhatsAppLink";

export default WhatsAppLink;
