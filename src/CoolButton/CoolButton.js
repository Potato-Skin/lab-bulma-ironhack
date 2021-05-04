import React from "react";

const allPossibleClasses = {
  isActive: "is-active",
  isBlack: "is-black",
  isCentered: "is-centered",
  isDanger: "is-danger",
  isDark: "is-dark",
  isFocused: "is-focused",
  isGrouped: "is-grouped",
  isHovered: "is-hovered",
  isInfo: "is-info",
  isInverted: "is-inverted",
  isLarge: "is-large",
  isLight: "is-light",
  isLink: "is-link",
  isLoading: "is-loading",
  isMedium: "is-medium",
  isOutlined: "is-outlined",
  isPrimary: "is-primary",
  isRight: "is-right",
  isRounded: "is-rounded",
  isSelected: "is-selected",
  isSmall: "is-small",
  isStatic: "is-static",
  isSuccess: "is-success",
  isText: "is-text",
  isWarning: "is-warning",
  isWhite: "is-white",
};

export default function CoolButton(props) {
  console.log("props: ", props);
  const { children, className = "", ...everyOtherPropsFromParent } = props;
  let classes = `button ${className} `;

  for (const key in everyOtherPropsFromParent) {
    if (allPossibleClasses[key]) {
      classes += `${allPossibleClasses[key]} `;
    }
  }
  //   if (props.isSmall) {
  //     classes += "is-small ";
  //   }

  //   if (props.isDanger) {
  //     classes += `is-danger `;
  //   }
  //   if (props.className) {
  //     classes += props.className;
  //   }
  //   if (props.isSuccess) {
  //     classes += `is-success `;
  //   }
  return <button className={classes}>{children}</button>;
  //   return <button className={classes}>{props.children}</button>;
}
{
  /* <button class="button is-rounded my-class is-danger is-small">Button 1</button> */
}

// function sayName(name = "") {
//   console.log(`Hey, my name is ${name}`);
// }

// sayName(`Alexandra`);
// sayName(`Nelli`);
// sayName();
