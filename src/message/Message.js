import React from "react";

const cases = {
  isDard: "is-dark",
  isPrimary: "is-primary",
  isSuccess: "is-success",
  isLink: "is-link",
  isInfo: "is-info",
};

function Message(props) {
  const { children, className = "", title, ...rest } = props;
  let classes = `message ${className}`;
  for (let key in cases) {
    if (rest[key]) {
      classes += ` ${cases[key]}`;
    }
  }
  return (
    <div>
      <article class={classes}>
        <div class="message-header">
          <p>{props.title}</p>
          <button class="delete" aria-label="delete"></button>
        </div>
        <div class="message-body">{props.children}</div>
      </article>
    </div>
  );
}

export default Message;
