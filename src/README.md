# Frontend Mentor - Bento grid solution

This is a solution to the [Bento grid challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/bento-grid-RMydElrlOj). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview
Bento Grid is a challenge to enhance your skills in grid CSS for developing awesome websites.


### Screenshot

![](./preview.jpg)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library


### What I learned
 I learned how to dynamically design different elements in a component based  on the React Props given

```js
function Grid({afterText,end, side, unique, imgUrl, imgAlt, w, h, row, column,ps, bg,text, children}) {
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
```


## Author

- Frontend Mentor - [@Mayor-Isaac](https://www.frontendmentor.io/profile/Mayor-Isaac)

- LinkedIn - [Ogunyileka Feranmi](https://www.linkedin.com/in/feranmi-ogunyileka-359a1723b)
