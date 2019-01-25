import React from "react";
import { NavLink } from 'react-router-dom'

class Button extends React.Component {
    render() {
        return <NavLink to="/create">Create</NavLink>
    }
}

export default Button;
