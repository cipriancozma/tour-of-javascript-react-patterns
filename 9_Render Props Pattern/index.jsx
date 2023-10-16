import { useState } from "react";
import { Fahrenheit } from "./Fahrenheit";
import { Kelvin } from "./Kelvin";

export default function TemperatureConverter(props) {
  const [value, setValue] = useState(0);

  return (
    <div className="card">
      <input
        type="number"
        placeholder="Degrees Celsius"
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      {/*Component variant */}
      {/* <Kelvin value={Math.floor(value + 273.15)} /> */}
      {/* <Fahrenheit value={Math.floor((value * 9) / 5 + 32)} /> */}
      {props.renderKelvin({ value: Math.floor(value + 273.15) })}
      {props.renderFahrenheit({ value: Math.floor((value * 9) / 5 + 32) })}
    </div>
  );
}
