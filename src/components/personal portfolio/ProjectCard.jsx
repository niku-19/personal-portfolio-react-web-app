import React from "react";
import ProjectDatas from "../Data/ProjectsData";

const ProjectCard = () => {
  return (
    <>
      {ProjectDatas.map((datas) => {
        return (
          <>
            <article key={datas.id} className="portfolio__items">
              <div className="portfolio__items-image">
                <img src={datas.image} alt="" />
              </div>
              <h3>{datas.title}</h3>
              <div className="portfolio__itmes-cta">
                <a href={datas.link} className="btn">
                  GithUb
                </a>
              </div>
            </article>
          </>
        );
      })}
    </>
  );
};

export default ProjectCard;
