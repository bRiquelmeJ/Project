const Medal = ({ unlocked }) => {
    const medalStyle = unlocked ? "medal unlocked" : "medal";
    return <div className={medalStyle}></div>;
  };
  