import React from "react";

function ColouringPageTemplate({ children }) {
  const [firstChild, secondChild, thirdChild] =
    React.Children.toArray(children);
  return <div></div>;
}

export default ColouringPageTemplate;
