import React, { useState } from 'react';
import { IconBaseProps } from 'react-icons';
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from 'react-icons/md';

import { Container, Dropdown } from './styles';

interface MenuProps {
  data: {
    id: string;
    title: string;
    route: string;
    icon?: React.ComponentType<IconBaseProps>;
    dropdown?: boolean;
    dropdown_links?: {
      id: string;
      title: string;
      route: string;
      icon?: React.ComponentType<IconBaseProps>;
    }[];
  };
}

const MenuNav: React.FC<MenuProps> = ({ data }) => {
  const [displayDropdown, setDisplayDropdown] = useState(false);
  const toggleMenuDropdown = () => {
    setDisplayDropdown(!displayDropdown);
  };

  return (
    <>
      <Dropdown key={`${data.id}_dropdown`}>
        <a onClick={toggleMenuDropdown}>
          {data.icon && <data.icon />}
          <span>
            {data.title} 
          </span>

          {displayDropdown ? <MdKeyboardArrowRight /> : <MdKeyboardArrowDown />}
        </a>
        {data.dropdown_links && (
          <Container visible={displayDropdown}>
            {data.dropdown_links.map((item) => (
              <li key={item.id}>
                <a href={item.route}>{item.title}</a>
              </li>
            ))}
          </Container>
        )}
      </Dropdown>
    </>
  );
};

export default MenuNav;
