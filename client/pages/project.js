import dynamic from 'next/dynamic'

const ProjectPage = dynamic(
  () => import('../lib/component/ProjectPage'),
  { ssr: false }
)

const Project = () => {
  return (
    <ProjectPage />
  );
};

export default Project;
