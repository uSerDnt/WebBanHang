import React, { useCallback } from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/system";
import { PlusCircle, Trash } from "@phosphor-icons/react";

/**
 * @typedef {'text' | 'link' | 'contained' | 'outlined'} ButtonType
 * @typedef {'small' | 'medium' | 'large'} SizeType
 */

/**
 * @param {{
 *   children: React.ReactNode,
 *   title: string,
 *   href: string,
 *   className: string,
 *   onClick: () => void,
 *   type: ButtonType,
 *   typeIcon: string,
 *   color: string,
 *   size: SizeType,
 *   props: any
 * }} props
 */

const CoreButton = ({
 children,
 title,
 href,
 className = "",
 onClick,
 type = "contained",
 typeIcon,
 color,
 size = "small",
 ...props
}) => {
 const _renderIcon = useCallback(() => {
  switch (typeIcon) {
   case "plus":
    return <PlusCircle size={20} />;
   case "bin":
    return <Trash size={20} />;
   default:
    return null;
  }
 }, [typeIcon]);

 const renderComponent = useCallback(() => {
  switch (type) {
   case "link":
    return (
     <StyledButton
      variant={type}
      className={className}
      href={href}
      size={size}
      {...props}
     >
      {children || title || "Need title"}
     </StyledButton>
    );
   default:
    return (
     <StyledButton
      variant={type}
      className={className}
      onClick={onClick}
      startIcon={_renderIcon()}
      color={typeIcon === "bin" ? "error" : color}
      size={size}
      {...props}
     >
      {children || title || "Need title"}
     </StyledButton>
    );
  }
 }, [title, props]);

 return renderComponent();
};

export default CoreButton;

const StyledButton = styled(Button)(({ variant, color }) => {
 return {
  textTransform: "none",
  fontWeight: 600,
  fontSize: 16,
  textAlign: "center",
  // lineHeight: "20px",
  // padding: "8px",
  borderRadius: 4,
  "&:disabled": {
   backgroundColor: "#e6e6e6",
   color: "#989898",
  },
  ...buttonStyles(color)[variant],
 };
});

const buttonStyles = (color) => ({
 contained: {
  backgroundColor: color || "#2175ef",
  color: "white",
  "&:focus": {
   boxShadow: "none",
  },
  "&:active": {
   boxShadow: "none",
   backgroundColor: color || "#0062cc",
   borderColor: color || "#005cbf",
  },
  "&:hover": {
   backgroundColor: color || "#2175ef",
   borderColor: color || "#0062cc",
   boxShadow: "none",
  },
 },
 outlined: {
  backgroundColor: "transparent",
  color: color || "#2175ef",
  border: `1px solid ${color || "#3783F1"}`,
  "&:hover": {
   backgroundColor: "transparent",
  },
  "&:focus": {
   boxShadow: "none",
  },
 },
 link: {
  backgroundColor: "transparent",
  textDecoration: "underline",
  color: color || "#2175ef",
  "&:hover": {
   backgroundColor: "transparent",
   textDecoration: "underline",
   boxShadow: "none",
  },
  "&:disabled": {
   backgroundColor: "transparent",
   color: "#989898",
  },
 },
 text: {
  backgroundColor: "transparent",
  color: color || "#2175ef",
  "&:hover": {
   backgroundColor: "transparent",
   textDecoration: "underline",
   boxShadow: "none",
  },
  "&:disabled": {
   backgroundColor: "transparent",
   color: "#989898",
  },
 },
});
