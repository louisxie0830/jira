import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../Icon'
import Link from 'next/link'

// import { Icon, AboutTooltip } from 'shared/components';

import { NavLeft, LogoLink, StyledLogo, Bottom, Item, ItemText } from './Styles';

const propTypes = {
  issueSearchModalOpen: PropTypes.func.isRequired,
  issueCreateModalOpen: PropTypes.func.isRequired,
};

export const NavbarLeft = ({ issueSearchModalOpen, issueCreateModalOpen }) => (
  <NavLeft>
    <Link href="/">
      <LogoLink>
        <StyledLogo color="#fff" />
      </LogoLink>
    </Link>
    

    <Item onClick={issueSearchModalOpen}>
      <Icon type="search" size={22} top={1} left={3} />
      <ItemText>Search issues</ItemText>
    </Item>

    <Item onClick={issueCreateModalOpen}>
      <Icon type="plus" size={27} />
      <ItemText>Create Issue</ItemText>
    </Item>

    {/* <Bottom> */}
      {/* <AboutTooltip
        placement="right"
        offset={{ top: -218 }}
        renderLink={linkProps => (
          <Item {...linkProps}>
            <Icon type="help" size={25} />
            <ItemText>About</ItemText>
          </Item>
        )}
      /> */}
    {/* </Bottom> */}
  </NavLeft>
);

NavbarLeft.propTypes = propTypes;
