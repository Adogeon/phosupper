import React from "react"
import { CatDiv, CatTitle } from "./StandardCat"
import Image from "../image"
import JSONData from "../../content/menu.json"
import { faBorderNone } from "@fortawesome/free-solid-svg-icons"

const { dish, phoTopping } = JSONData

const PhoCat = ({ category }) => {
  return (
    <CatDiv id={category.id} css={{ display: "flex", flexFlow: "column" }}>
      <CatTitle>{category.title}</CatTitle>
      <div css={{ display: "flex", flexFlow: "column" }}>
        {dish
          .filter(dish => category.items.includes(dish.id))
          .map(dish => (
            <div
              css={{
                display: "flex",
                flexFlow: "row",
                width: "90%",
                justifyContent: "space-between",
                margin: "auto",
              }}
            >
              <div>{dish.name} <em css={{fontStyle: "normal", color: "#75DDDD"}}>{dish.desc}</em></div>
              <div>{dish.price}</div>
            </div>
          ))}
      </div>
      <div css={{ display: "flex", flexFlow: "row" }}>
        {phoTopping.map(topping => (
          <div
            css={{
              display: "flex",
              flexFlow: "column",
              width: "20%",
              margin: "0.25em",
            }}
          >
            <div css={{ width: "100%" }}>
              <Image path={topping.imagePath} />
            </div>
            <div css={{ font: "12px", textAlign: "center" }}>
              {topping.name}
            </div>
          </div>
        ))}
      </div>
    </CatDiv>
  )
}

export default PhoCat
