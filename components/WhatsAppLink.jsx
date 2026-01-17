import React from "react";
import { WHATSAPP_MESSAGE, WHATSAPP_NUMBER } from "../lib/constants";

const WhatsAppLink = React.forwardRef(
  ({ className, message = WHATSAPP_MESSAGE, children, ...props }, ref) => {
    const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

    return (
      <a ref={ref} href={href} className={className} {...props}>
        {children}
      </a>
    );
  }
);

WhatsAppLink.displayName = "WhatsAppLink";

export default WhatsAppLink;
