import React, { Component } from 'react';
import axios from 'axios';
import ProjectItem from './ProjectItem';
export class Projects extends Component {
  state = {
    projects: [],
    isLoaded: false,
  };
  componentDidMount() {
    axios
      .get(
        'https://wordpress-405477-4673781.cloudwaysapps.com/wp-json/wp/v2/projects/'
      )
      .then((res) =>
        this.setState({
          projects: res.data,
          isLoaded: true,
        })
      )
      .catch((err) => console.log(err));
  }
  render() {
    console.log(this.state);
    const { projects } = this.state;
    return (
      <>
        <div id="projects" className="w-full py-[1rem] px-2 bg-white">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Some selected projects
          </h1>
          <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectItem key={project.id} project={project} />
            ))}
          </div>
        </div>
        ;
      </>
    );
  }
}

export default Projects;
