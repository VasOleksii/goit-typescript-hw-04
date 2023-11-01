import React, { ChangeEvent, useState } from "react";

interface MyState {
  inputValue: string;
}

export function FormComponent() {
  const [value, setValue] = useState<MyState>({ inputValue: "" });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue({ inputValue: event.target.value });
  };

  return <input type="text" value={value.inputValue} onChange={handleChange} />;
}
