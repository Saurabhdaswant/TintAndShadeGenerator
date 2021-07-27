import { useEffect, useState } from "react";
import values from "values.js";
import Single from "./Single";

export default function App() {
  const [color, setColor] = useState("");
  const [hexValue, setHexValue] = useState([]);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const tintAndShades = new values(color).all(10);
      setHexValue(tintAndShades);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setError(false);
    }, 3000);
  }, [error]);

  return (
    <>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className={error ? "error" : null}
          />
          <button type="submit">generatoro</button>
        </form>
        {hexValue.map((obj, index) => {
          const { hex } = obj;
          return <Single key={index} {...obj} index={index} hexValues={hex} />;
        })}
      </div>
    </>
  );
}
