import React from "react";

function FullBackground(props) {
  return (
    <div
      className="bg-dim full-bg-size"
      style={{ backgroundImage: `url(${props.image})` }}
    />
  );
}

const app = (
  <FullBackground image="https://images.unsplash.com/photo-1516948252849-b660029997b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80" />
);

ReactDOM.render(app, document.querySelector("#app"));
