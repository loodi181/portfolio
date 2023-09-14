import React from "react";
import { IconBrandGithub, IconArrowUpRight } from "@tabler/icons-react";
import data from "../../data/index.json";

function MyPortfolio() {
  return (
    <section id="MyPortfolio" className="portfolio--section">
      <div className="portfolio--container--box">
        <div className="portfolio--container">
          <p className="sub--title">Recent Projects</p>
          <h2 className="section--heading">My Portfolio</h2>
        </div>
        <div className="github--link">
          <a href="https://github.com/loodi181" target="_blank">
            <button className="btn btn-github">
              <IconBrandGithub size={26} stroke={2.5} strokeLinejoin="miter" />
              Visit My Github
            </button>
          </a>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-lg">{item.description}</p>
              </div>
              <p className="text-md protfolio--link">
                <a href={item.href}>
                  {item.link}
                  <IconArrowUpRight
                    size={26}
                    stroke={2}
                    strokeLinejoin="miter"
                  />
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MyPortfolio;
