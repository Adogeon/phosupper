import React from "react"

import JSONData from "../../content/menu.json"
import StandardCat from "./StandardCat"
import PhoCat from "./PhoCat"

const Menu = () => {
  return (
    <div className="menu" css={{ marginBottom: "5em" }}>
      {JSONData.categories.map((category, index) => {
        if (index !== 1) {
          return <StandardCat category={category} key={index} />
        } else {
          return <PhoCat category={category} key={1} />
        }
      })}
    </div>
  )
}

export default Menu
