/**
 * The function creates a portal in React to render a heading element outside of the main DOM
 * hierarchy.
 * @returns The `PortalDemo` component is returning a React portal created using
 * `ReactDOM.createPortal()`. The portal renders an `<h1>` element with the text "Portals Demo" and is
 * mounted to an element with the ID "portal-root" in the HTML document.
 */
import React from "react";
import ReactDOM from "react-dom";

function PortalDemo() {
  return ReactDOM.createPortal(
    <h1>Portals Demo</h1>,
    document.getElementById("portal-root")
  );
}

export default PortalDemo;
