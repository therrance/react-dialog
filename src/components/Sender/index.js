import React, { useState } from "react";
import "./styles.css";

const Sender = () => {
  const [value, setValue] = useState("");

  const onChange = (event) => setValue(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className="sender" onSubmit={onSubmit}>
      <input
        placeholder="Enter the message"
        value={value}
        onChange={onChange}
        required
      />
      <button>Send</button>
    </form>
  );
};

export default Sender;
