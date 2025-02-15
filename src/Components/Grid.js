export default function Grid({afterText,end, side, unique, imgUrl, imgAlt, w, h, row, column,ps, bg,text, children}) {
  const imgStyle ={
    width: `${w}px`,
    height:`${h}px`,
  }

  const gridStyle={
    backgroundColor:`${bg}`,
    gridRow: `${row ? row : ""}`,
    gridColumn:`${column ? column : ""}`,
    color: `${text ? text : "black"}`,
    padding: `${ps ? "0 0 0 20px" :"0 2rem"}`,
    display: "flex",
    flexDirection:`${unique === "column-reverse" ? unique : side ? "row-reverse":"column"}`,
    alignItems:"center",
    justifyContent: `${end ? "flex-end" : "center"}`,
    borderRadius: "15px",
    cursor: "pointer",
    gap: "20px",
  }
  const childrenStyle={
    // margin: `1rem`
  }
  return (
    <div style={gridStyle}>
      <h1 style={childrenStyle}>
        {children}
      </h1>
      <img
        src={imgUrl}
        alt={imgAlt}
        style={imgStyle}
      />
      {afterText && <p>{afterText}</p>}
    </div>
  );
}
