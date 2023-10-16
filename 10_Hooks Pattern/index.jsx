import useHover from "./useHover";

function App() {
  const [ref, isHovering] = useHover();

  return <div ref={ref}>Hello</div>;
}
