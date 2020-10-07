import React from "react";

import AspectRatio from "./AspectRatio";
import Image from "react-bootstrap/Image";

import "./SectionHeader.scss";

function SectionHeader(props) {
  // Render nothing if no title or subtitle
  if (!props.title && !props.subtitle) {
    return null;
  }

  return (
    <header
      className={
        "SectionHeader" + (props.className ? ` ${props.className}` : "")
      }
    >
      {props.title && (
        <h1
          className={
            "font-weight-bold" +
            (props.subtitle && props.spaced ? " mb-4" : "") +
            (!props.subtitle ? " mb-0" : "") +
            (props.size ? ` h${props.size}` : "")
          }
        >
          {props.title}
        </h1>
      )}

    {props.description && (
        <p className="SectionHeader__subtitle mb-0">{props.description}</p>
      )}

      {props.image && (
        <div className="Features__image-container">
          <AspectRatio ratio={4 / 3}>
            <Image src={props.image} alt={props.alt} fluid={true} />
          </AspectRatio>
        </div>
      )}

      {props.subtitle && (
        <p className="SectionHeader__subtitle mb-0">{props.subtitle}</p>
      )}

    </header>
  );
}

export default SectionHeader;
