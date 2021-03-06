import React, { Component } from 'react';
import PropTypes from 'prop-types';
const $ = window.$;

class TagCloud extends React.Component {
  componentDidMount() {
    const entries = this.props.tags.map(tag => ({
      label: tag
    }));
    const settings = {
      entries: entries,
      width: 1500,
      height: 1024,
      radius: '65%',
      radiusMin: 75,
      bgDraw: false,
      opacityOver: 1.00,
      opacityOut: 0.05,
      opacitySpeed: 6,
      fov: 800,
      speed: 0.2,
      fontFamily: 'Oswald, Arial, sans-serif',
      fontSize: '20',
      fontColor: '#eee',
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontStretch: 'normal',
      fontToUpperCase: false
    };
    this.$el = $(this.el);
    console.log(this.$el);
    this.$el.svg3DTagCloud( settings );
  }

  render() {
    return (
        <div className="tag-cloud" ref={el => this.el = el} />
    );
  }
}
TagCloud.PropTypes = {
  tags: PropTypes.array.isRequired,
};

export default TagCloud;
