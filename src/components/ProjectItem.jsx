import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export class ProjectItem extends Component {
  state = {
    imgUrl: '',
    author: '',
    isLoaded: false,
  };
  static propTypes = {
    project: PropTypes.object.isRequired,
  };
  componentDidMount() {
    const { featured_media, author, link } = this.props.project;
    const getImageUrl = axios.get(
      `https://wordpress-405477-4673781.cloudwaysapps.com/wp-json/wp/v2/media/${featured_media}`
    );
    const getAuthor = axios.get(
      `https://wordpress-405477-4673781.cloudwaysapps.com/wp-json/wp/v2/users/${author}`
    );

    Promise.all([getImageUrl, getAuthor]).then((res) => {
      console.log(res);
      this.setState({
        imgUrl: res[0].data.media_details.sizes.full.source_url,
        author: res[1].data.name,
        isLoaded: true,
      });
    });
  }
  render() {
    const { title, excerpt } = this.props.project;
    const { imgUrl } = this.state;

    return (
      <>
        <div className="project-cnc w-full border-2 border-black-600 flex flex-col p-4 my-4 hover:scale-105 duration-300">
          <img
            className="mx-auto"
            loading="lazy"
            src={imgUrl}
            alt={title.rendered}
          />
          <br />
          <div
            className="project-excerpt"
            dangerouslySetInnerHTML={{ __html: excerpt.rendered }}
          ></div>
        </div>
      </>
    );
  }
}

export default ProjectItem;
