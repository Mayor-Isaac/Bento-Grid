export default function Grid({imgUrl, imgAlt, w, h, row, column,ps, children}) {
  const imgStyle ={
    width: `${w}px`,
    height:`${h}px`,
    margin: `1.5rem 0`
  }

  const gridStyle={
    backgroundColor:"#fed7a6",
    gridRow: `${row ? row : ""}`,
    gridColumn:`${column ? column : ""}`,
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
    </div>
  );
}
