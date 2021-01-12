import React from 'react';
import Article from "./Article";

class Blog extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const authorName = "inabakenji"
    return(
      <>
        <Article 
            title={"propsの渡し方1"}
            order={3}
            inPublished={true}
            author={authorName}
        />
        <Article title={"propsの渡し方2"}/>
      </>
    );
  }
}

export default Blog