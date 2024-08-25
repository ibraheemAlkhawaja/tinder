import "./Projects.css";
import { Footer } from "../../Sections";
import DataService from "../../Services/DataService";
import UseGet from "../../Custoom Hooks/useGet";
import DataProjects from "../../Assets/DataProjects/DataProjects";
const projects = () => {
  const [loading, data] = UseGet(DataService.getAll());
  console.log(data);
  return (
    <>
      <div className="container projects">
        <div className="filter-projects">
          <p>all</p>
          <p>DESIGN</p>
          <p>FITOUT</p>
          <p>FINISHING MATERILAS</p>
        </div>
        <div className="row row-cols-md-3 row-cols-1">
          {DataProjects.map((item) => (
            <div className="col" key={item.id}>
              <div className="content-projects">
                <div className="img-projects">
                  <img src={item.img} />
                </div>
                <div className="text-projects">
                  <p>{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default projects;
