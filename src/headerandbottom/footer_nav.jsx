import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import '../css/footer.css';

const footer_nav = () =>{
    return(
        
            <Nav className="bottom-nav"> 
            {/* justify-content-center */}
            
                <NavItem>
                    <NavLink to="/officalpage" className="nav-link">
                    Petie offical
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink to="/petinfo" className="nav-link">
                    Pet info
                    </NavLink>
                </NavItem>
                
                <NavItem>
                    <NavLink to="/temperature" className="nav-link">
                    Temperature
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink to="/Location" className="nav-link">
                    Location
                    </NavLink>
                </NavItem>
            
            </Nav>
            
    )
};

export default footer_nav;

