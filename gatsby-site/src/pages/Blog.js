import React from 'react';
import Wood from '../components/Wood'
import SiteNavigation from '../components/SiteNavigation'

const Blog = () => {
    return (
      <div>
        <SiteNavigation/>
        <picture>
          <h1>Wood</h1>
          <Wood/>
        </picture>
      </div>
    )

}

export default Blog;