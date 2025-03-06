import { useState } from "react";

const Tooth = (props) => {
  const [clicked, setClicked] = useState(false);
  const colorClick = "#ff6961";

  const toothParts = [
    { name: "top", position: { top: 0, left: 0 }, borderRadius: "100% 0 0 0", clickOn: props.vestibularC, clickOff: props.vestibularU },
    { name: "left", position: { bottom: 0, left: 0 }, borderRadius: "0 0 0 100%", clickOn: props.distialC, clickOff: props.distialU },
    { name: "bottom", position: { bottom: 0, right: 0 }, borderRadius: "0 0 100% 0", clickOn: props.palastinaC, clickOff: props.palastinaU },
    { name: "right", position: { top: 0, right: 0 }, borderRadius: "0 100% 0 0", clickOn: props.mastialC, clickOff: props.mastialU },
    { name: "center", position: { top: "25%", right: "25%" }, borderRadius: "50%", clickOn: props.oclusalC, clickOff: props.oclusalU },
  ];

  // Encontra a parte correspondente do dente com base nas props
  const selectedPart = toothParts.find(part => props[part.name]);

  if (!selectedPart) {
    return <p>Selecciona un prop (top, left, bottom, right, center)</p>;
  }

  const handleClick = () => {
    setClicked(!clicked);
    clicked ? selectedPart.clickOff() : selectedPart.clickOn();
  };

  return (
    <div
      className={`tooth ${clicked ? selectedPart.name : "unselected"}`}
      style={{
        width: "20px",
        height: "20px",
        outline: "2px solid #000",
        position: "absolute",
        backgroundColor: clicked ? colorClick : "#fff",
        borderRadius: selectedPart.borderRadius,
        ...selectedPart.position,
      }}
      onClick={handleClick}
    ></div>
  );
};

export default Tooth;
