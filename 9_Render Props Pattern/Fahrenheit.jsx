export function Fahrenheit({ value }) {
  return (
    <div className="temp-card">
      The temperature in Fahrenheit is:
      <span className="temp">{value} F</span>
    </div>
  );
}
