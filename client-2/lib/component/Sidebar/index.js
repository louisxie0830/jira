import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from '../NavLink';
import { useRouter } from 'next/router'

import { Icon } from '../Icon'
import ProjectAvatar from '../ProjectAvatar';

import {
  Sidebar,
  ProjectInfo,
  ProjectTexts,
  ProjectName,
  ProjectCategory,
  Divider,
  LinkItem,
  LinkText,
  NotImplemented,
} from './Styles';

const propTypes = {
  project: PropTypes.object.isRequired,
};

const ProjectSidebar = ({ project }) => {
  const match = useRouter();
  return (
    <Sidebar>
      <ProjectInfo>
        <ProjectAvatar />
        <ProjectTexts>
          <ProjectName>{project.name}</ProjectName>
          <ProjectCategory>{project.category} project</ProjectCategory>
        </ProjectTexts>
      </ProjectInfo>

      {renderLinkItem(match, 'Kanban Board', 'board', '/board')}
      {renderLinkItem(match, 'Project settings', 'settings', '/settings')}
      <Divider />
      {renderLinkItem(match, 'Releases', 'shipping')}
      {renderLinkItem(match, 'Issues and filters', 'issues')}
      {renderLinkItem(match, 'Pages', 'page')}
      {renderLinkItem(match, 'Reports', 'reports')}
      {renderLinkItem(match, 'Components', 'component')}
    </Sidebar>
  );
};

const renderLinkItem = (match, text, iconType, path) => {
  const isImplemented = !!path;

  const linkItemProps = isImplemented
    ? { as: NavLink, exact: true, href: `${match.pathname}${path}` }
    : { as: 'div' };

  return (
    <LinkItem {...linkItemProps}>
      <Icon type={iconType} />
      <LinkText>{text}</LinkText>
      {!isImplemented && <NotImplemented>Not implemented</NotImplemented>}
    </LinkItem>
  );
};

ProjectSidebar.propTypes = propTypes;

export default ProjectSidebar;
