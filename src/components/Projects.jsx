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
    const { projects, isLoaded } = this.state;
    return (
      <>
        <div>
          {projects.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </div>
        ;
      </>
    );
  }
}

export default Projects;
