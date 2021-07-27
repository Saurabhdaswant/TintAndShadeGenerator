import { useEffect, useState } from "react";

const SingleColor = ({ index, hexValues }) => {
  const [copied, setcopied] = useState(false);
  const hexValue = `#${hexValues}`;

  const handleClick = () => {
    navigator.clipboard.writeText(hexValue);
    setcopied(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setcopied(false);
    }, 3000);
  }, [copied]);

  return (
    <>
      <p
        onClick={handleClick}
        style={{
          backgroundColor: `#${hexValues}`,
          color: ` ${index > 10 ? "white" : null} `,
        }}
        key={index}
      >
        {`#${hexValues}`}
      </p>
      <p>{copied ? "bhaii you are awesome  congratulaions" : null}</p>
    </>
  );
};

export default SingleColor;
// navigator.clipboard.writeText(hexValue);
