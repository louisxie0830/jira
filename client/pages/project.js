import styled from 'styled-components';
import { sizes } from '../lib/styles/globalStyles';
import { NavbarLeft } from '../lib/component/NavbarLeft';

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

const Project = () => {
  return (
    <ProjectPage>
      <NavbarLeft
      />
      <p>ProjectPage</p>
    </ProjectPage>
  );
};

export default Project;
