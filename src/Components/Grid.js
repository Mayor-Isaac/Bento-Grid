export default function Grid({afterText, imgUrl, imgAlt, w, h, row, column,ps, bg,text, children}) {
  const imgStyle ={
    width: `${w}px`,
    height:`${h}px`,
    margin: `1.5rem 0`
  }

  const gridStyle={
    backgroundColor:`${bg}`,
    gridRow: `${row ? row : ""}`,
    gridColumn:`${column ? column : ""}`,
    color: `${text ? text : "black"}`,
    padding: `0 ${ps}rem`,
    display: "flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent: "center",
    borderRadius: "10px",
    cursor: "pointer",
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
