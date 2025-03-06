import Card from "../components/Card";


const Projects = () => {
  return (
    <section id="projects" className="container flex flex-col">
      <h2>Projects</h2>
      <div className="flex gap-2.5">
        <Card title="DTIF Marketing" />
        <Card title="Neptune Buy/Sell GUI" />
        <Card title="DSB Project" />
        {/* <div></div>
        <div>Regitry Search</div>
        <div>Token Forms</div>
        <div>DSB ISIN GUI</div>
        <div>DTIF ADMIN GUI</div> */}
      </div>
    </section>
  );
};

export default Projects;
