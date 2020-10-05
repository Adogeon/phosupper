import React, { useState } from "react"
import styled from "@emotion/styled"
import { Link as ScrollLink } from "react-scroll"

const StyledNav = styled.nav({
  position: "sticky",
  top: "0px",
  background: "#fff",
  zIndex: "1",
  display: "flex",
  flexFlow: "row-reverse nowrap",
})

const NavList = styled.ul(props => ({
  listStyle: "none",
  borderBottom: "1px solid gray",
  justifyContent: "space-evenly",
  width: "100%",
  margin: "0.25em 0",
  display: "inline-block",
  overflow: "hidden",
  height: props.expand ? "calc(43px * 7)" : "43px",
  transition: "height 800ms",
  "@media (min-width:764px)": {
    display: "flex",
    flexFlow: "row nowrap",
    visibility: "visible",
  },
}))

const MobileNav = styled.div({
  display: "inline-block",
  width: "20vw",
  position: "relative",
  top: "0px",
  "@media (min-width:764px)": {
    display: "none",
  },
})

const NavItem = styled.li({
  display: "flex",
  flexFlow: "column",
  justifyContent: "center",
  marginBottom: 0,
  with: "100vw",
  "> .activeLink": {
    paddingBottom: "calc(0.625em - 3px)",
    borderBottom: "3px solid black",
    with: "auto",
  },
})

const StyledLink = styled.a({
  textDecoration: "none",
  textAlign: "center",
  padding: "0.625em 1em",
  ":hover": {
    cursor: "pointer",
    paddingBottom: "calc(0.625em - 3px)",
    borderBottom: "3px solid gray",
  },
})

const NavLink = StyledLink.withComponent(ScrollLink)

const NavBar = () => {
  const [expand, setExpand] = useState(false)

  return (
    <StyledNav>
      <MobileNav>
        <button
          onClick={() => {
            const current = expand
            setExpand(!current)
          }}
        >
          {" "}
          hi{" "}
        </button>
      </MobileNav>
      <NavList expand={expand}>
        <NavItem>
          <NavLink
            activeClass="activeLink"
            to="app"
            smooth={true}
            offset={-50}
            spy={true}
          >
            Appetizer
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="pho"
            activeClass="activeLink"
            smooth={true}
            offset={-50}
            spy={true}
          >
            Pho
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="spec"
            activeClass="activeLink"
            smooth={true}
            offset={-50}
            spy={true}
          >
            House Special
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="rice"
            activeClass="activeLink"
            smooth={true}
            offset={-50}
            spy={true}
          >
            Rice
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="vermi"
            activeClass="activeLink"
            smooth={true}
            offset={-50}
            spy={true}
          >
            Vermicelli
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="kid"
            activeClass="activeLink"
            smooth={true}
            offset={-50}
            spy={true}
          >
            Kid
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="drink"
            activeClass="activeLink"
            smooth={true}
            offset={-50}
            spy={true}
          >
            Beverages
          </NavLink>
        </NavItem>
      </NavList>
    </StyledNav>
  )
}

export default NavBar
