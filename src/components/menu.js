import React from "react"
import styled from "@emotion/styled"

import JSONData from "../content/menu.json"
import Image from "../components/image"

const CatDiv = styled.div({
  marginBottom: "1.45em",
})

const CatTitle = styled.h2({
  paddingBottom: "0.25em",
  borderBottom: "1px solid gray",
  marginBottom: "0.25em",
  textAlign: "center",
})

const ItemDiv = styled.div({
  border: "1px solid gray",
  width: "90%",
  borderRadius: "15px",
  display: "flex",
  flexFlow: "column",
  padding: "1em 1em",
  margin: "1em 0",
  "@media (min-width:426px)": {
    width: "45%",
    margin: "2em 0.125em",
  },
  "@media (min-width:570px)": {
    width: "40%",
    margin: "2em 2em",
  },
})

const ItemTitle = styled.h4({
  margin: "0",
  textAlign: "center",
})

const ItemDesc = styled.div({
  padding: "0.5em 0",
  fontSize: "16px",
  lineHeight:"18px",
  height: "90px"
})

const ItemPrice = styled.div({
  padding: "0.5em 0",
})

const Menu = () => {
  return (
    <div className="menu" css={{ marginBottom: "5em" }}>
      {JSONData.categories.map((category, index) => (
        <CatDiv id={category.id} key={index}>
          <CatTitle>{category.title}</CatTitle>
          <div
            css={{
              display: "flex",
              flexFlow: "row wrap",
              justifyContent: "space-evenly",
            }}
          >
            {JSONData.dish
              .filter(dish => category.items.includes(dish.id))
              .map((item, index) => (
                <ItemDiv key={index}>
                  <ItemTitle>{item.name}</ItemTitle>              
                  <ItemDesc>{item.desc}</ItemDesc>
                  <Image />
                  <ItemPrice>{item.price}</ItemPrice>
                </ItemDiv>
              ))}
          </div>
        </CatDiv>
      ))}
    </div>
  )
}

export default Menu
