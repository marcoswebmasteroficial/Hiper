import React, { useEffect, useState } from 'react'
import { IconBaseProps } from 'react-icons'
import { Container, Nav } from './styles'
import config from '../../config/aside'
import MenuDropdown from '../MenuDropdown'
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <Container>
      <Nav>
        {config.map(
          (
            item: {
                id: string;
                title: string;
                route: string;
                icon?: React.ComponentType<IconBaseProps>;
                dropdown?: boolean;
                dropdownlinks?: {
                  id: string;
                  title: string;
                  route: string;
                  icon?: React.ComponentType<IconBaseProps>;
                }[];
              },
            index: number
          ) =>
            !item.dropdown ? (
              <li key={item.id} >
                <NavLink to={item.route}  activeClassName="active">
                  {item.icon && <item.icon />}
            <span>{item.title} </span>
              </NavLink>
              </li>
            ) : (
              item.dropdownlinks && <MenuDropdown key={index} data={item} />
            )
        )}
      </Nav></Container>
  )
}

export default Sidebar
