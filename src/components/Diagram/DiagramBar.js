import "./DiagramBar.css";

function DiagramBar(props) {
  let barFillHeig = "0%";

  if (props.maxValue > 0) {
    barFillHeig = Math.random((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="diagram-bar">
      <div className="diagram-bar__inner">
        <div
          className="diagram-bar__fill"
          style={{ height: barFillHeig }}></div>
      </div>
      <div className="diagram-bar__label">{props.label}</div>
    </div>
  );
}

export default DiagramBar;
