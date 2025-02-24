import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">NavBar</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Home
          </NavLink>
          <NavLink to="/list-manager" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            List Manager
          </NavLink>
          <NavLink to="/color-changer" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Color Changer
          </NavLink>
          <NavLink to="/notes" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Notes
          </NavLink>
          <NavLink to="/todo-list" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Todo List
          </NavLink>
          <NavLink to="/event" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Events
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationBar