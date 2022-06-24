import React from "react";
import { Input } from "./landing.styles";

const RenderTextField = ({ placeholder, name, type, value, valueSetter }) => (
  <Input
    placeholder={placeholder}
    name={name}
    type={type}
    value={type === "number" ? value && Math.max(0, value) : value}
    onChange={(event) => {
      valueSetter(
        type === "number" ? Number(event.target.value) : event.target.value
      );
    }}
    autoComplete="off"
  />
);

export { RenderTextField };
