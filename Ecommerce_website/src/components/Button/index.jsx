import React, { useCallback, useMemo } from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/system";
import { PlusCircle, Trash } from "@phosphor-icons/react";

/**
 * @typedef {'text' | 'link' | 'contained' | 'outlined'} ButtonType
 * @typedef {'small' | 'medium' | 'large'} SizeType
 * @typedef {'plus' | 'bin'} IconType
 * @typedef {'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'} ColorType
 */

/**
 * @param {{
 *   children: React.ReactNode,
 *   title: string,
 *   href: string,
 *   className: string,
 *   onClick: () => void,
 *   type: ButtonType,
 *   typeIcon: IconType,
 *   color: ColorType,
 *   size: SizeType,
 *   props: any
 * }} props
 */

const ButtonMIU = ({
  children,
  title,
  href,
  className = "",
  onClick,
  type = "contained",
  typeIcon,
  color = "primary",
  size = "medium",
  ...props
}) => {
  const _renderIcon = useMemo(() => {
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
          <StyledButton variant={type} className={className} href={href} size={size} {...props}>
            {children || title || "Need title"}
          </StyledButton>
        );
      default:
        return (
          <StyledButton
            variant={type}
            onClick={onClick}
            startIcon={_renderIcon}
            color={typeIcon === "bin" ? "error" : color}
            size={size}
            {...props}>
            {children || title || "Need title"}
          </StyledButton>
        );
    }
  }, [title, props]);

  return <div className={className}>{renderComponent()}</div>;
};

export default ButtonMIU;

const StyledButton = styled(Button)(({ variant, color }) => {
  return {
    textTransform: "none",
    fontWeight: 600,
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Be Vietnam Pro",
    borderRadius: 4,
    "&:disabled": {
      backgroundColor: "#e6e6e6",
      color: "#989898",
    },
    ...buttonStyles(color)[variant],
  };
});

const buttonStyles = color => ({
  contained: {
    backgroundColor: color,
    color: "white",
    "&:focus": {
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: color,
      borderColor: color,
    },
    "&:hover": {
      backgroundColor: color,
      borderColor: color,
      boxShadow: "none",
      // opacity: 0.2,
    },
  },
  outlined: {
    backgroundColor: "transparent",
    color: color,
    border: `1px solid ${color}`,
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
    color: color,
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
    color: color,
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
