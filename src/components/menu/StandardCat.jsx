import React from "react"
import styled from "@emotion/styled"
import Image from "../image"
import JSONData from "../../content/menu.json"

export const CatDiv = styled.div({
  marginBottom: "1.45em",
})

export const CatTitle = styled.h2({
  paddingBottom: "0.25em",
  borderBottom: "1px solid gray",
  marginBottom: "0.25em",
  textAlign: "center",
})

const ItemDiv = styled.div({
  border: "1px solid gray",
  width: "45%",
  borderRadius: "15px",
  display: "flex",
  flexFlow: "column",
  padding: "0.5em 0.25em",
  margin: "1em 0.2em",
  "@media (min-width:426px)": {
    width: "30%",
  },
  "@media (min-width:570px)": {
    width: "25%",
  },
})

const ItemTitle = styled.h4({
  margin: "0",
  textAlign: "center",
})

const ItemDesc = styled.div({
  padding: "0.5em 0",
  p: {
    margin: 0,
    padding: 0
  }
})

const ItemPrice = styled.div({
  padding: "0.5em 0",
})

const ItemChoice = styled.ul({
  li: {
    marginBottom:0,
  }
})

const splitNewLines = (string) => {
  return string.split(/\n/)
}

const StandardCat = ({ category }) => (
  <CatDiv id={category.id} >
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
            <Image path={item.ImagePath} />
            <ItemPrice>{item.price}</ItemPrice>
            <ItemDesc>{item.desc && splitNewLines(item.desc).map(line=>{
              return <p>{line}</p>
            })}</ItemDesc>
            {item.hasChoice && <ItemChoice>{
                item.choices && item.choices.map(choice => <li>{choice}</li>)
              }</ItemChoice>}
          </ItemDiv>
        ))}
    </div>
  </CatDiv>
)

export default StandardCat
