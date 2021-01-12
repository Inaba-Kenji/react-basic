import React from 'react';

const Article = (props) => {

  let publishState = "";

  if (props.inPublished) {
    publishState = "公開"
  } else {
    publishState = "非公開"
  }

  return (
    <div>
      <h2>{props.title}</h2>
      <p>順位は{props.order}位</p>
      <p>{props.author}</p>
      <p>{publishState}</p>
    </div>
  )

};

export default Article;