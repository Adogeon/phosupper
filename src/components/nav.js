import React from "react"
import styled from "@emotion/styled"
import { Link as ScrollLink } from "react-scroll"

const NavList = styled.ul({
  listStyle: "none",
  borderBottom: "1px solid gray",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  margin: "0.25em 0",
})

const NavItem = styled.li({
  display: "flex",
  flexFlow: "column",
  justifyContent: "center",
  marginBottom: 0,
  "> .activeLink": {
    paddingBottom: "calc(0.625em - 3px)",
    borderBottom: "3px solid black",
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

const NavBar = () => (
  <nav
    css={{ position: "sticky", top: "0px", background: "#fff", zIndex: "1" }}
  >
    <NavList>
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
  </nav>
)

export default NavBar
