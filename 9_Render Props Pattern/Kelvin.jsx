export function Kelvin({ value }) {
  return (
    <div className="temp-card">
      The temperature in Kelvin is:
      <span className="temp">{value} K</span>
    </div>
  );
}
