import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import ProjectContent from "../components/Fragments/ProjectContent";
import ProjectContentWeb from "../components/Layouts/ProjectContentWeb";

const Project = () => {
  return (
    <>
      <Navbar />
      <ProjectContent content={<ProjectContentWeb />} height="300vh" />
      <Footer />
    </>
  );
};

export default Project;
