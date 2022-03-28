import styled from 'styled-components';
import React, { useEffect } from 'react';
import { sizes } from '../../styles/globalStyles';
import { NavbarLeft } from '../NavbarLeft';
import { Modal } from '../Modal'
import Sidebar from '../Sidebar'
import { createQueryParamModalHelpers } from '../../utils/queryParamModal';
import { project } from '../../../api/mock';

const paddingLeft = sizes.appNavBarLeftWidth + sizes.secondarySideBarWidth + 40;

export const ProjectPage = styled.div`
  padding: 25px 32px 50px ${paddingLeft}px;

  @media (max-width: 1100px) {
    padding: 25px 20px 50px ${paddingLeft - 20}px;
  }
  @media (max-width: 999px) {
    padding-left: ${paddingLeft - 20 - sizes.secondarySideBarWidth}px;
  }
`;

const issueSearchModalHelpers = createQueryParamModalHelpers('issue-search');
const issueCreateModalHelpers = createQueryParamModalHelpers('issue-create');

const Project = () => {
  return (
    <ProjectPage>
      <NavbarLeft
        issueSearchModalOpen={issueSearchModalHelpers.open}
        issueCreateModalOpen={issueCreateModalHelpers.open}
      />
      
      <Sidebar project={project.project} />
      {/* {issueSearchModalHelpers.isOpen() && (
        <Modal
          isOpen
          testid="modal:issue-search"
          variant="aside"
          width={600}
          onClose={issueSearchModalHelpers.close}
        />
      )}

      {issueCreateModalHelpers.isOpen() && (
        <Modal
          isOpen
          testid="modal:issue-create"
          width={800}
          withCloseIcon={false}
          onClose={issueCreateModalHelpers.close}
        />
      )} */}
    </ProjectPage>
  );
};

export default Project;
