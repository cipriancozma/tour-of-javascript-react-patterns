import TemperatureConverter from ".";
import { Fahrenheit } from "./Fahrenheit";
import { Kelvin } from "./Kelvin";

export default function App() {
  return (
    <TemperatureConverter
      renderKelvin={({ value }) => <Kelvin value={value} />}
      renderFahrenheit={({ value }) => <Fahrenheit value={value} />}
    />
  );
}
