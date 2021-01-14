import React from 'react';
import Article from "./Article";
import * as FooBar from "./components/FooBar";
import Hoge from "./components/Hoge";
import LikeButton from './LikeButton';

const Blog = () => {



//   componentDidMount() {
//     // ボタンがクリックされたらいいねをする
//     document.getElementById('counter').addEventListener('click',this.countUp)
//   }

// componentDidUpdate() {
//   if(this.state.count >= 10) {
//     this.setState({ count: 0})
//   }
// }

// componentWillUnmount() {
//   document.getElementById('counter').removeEventListener('click',this.countUp)
// }

//   公開状態を反転させる関数
//   togglePublished = () => {
//     this.setState( {
//       isPublished: !this.state.isPublished
//     })
//   };

//   countUp = () => {
//     this.setState({
//       count: this.state.count + 1
//     })
//   };



    return(
      <>
        <Article
        　　　　　title={"Reactの使い方"}
        />
        <LikeButton/>
        <FooBar.Bar/>
        <FooBar.Foo/>
        <Hoge/>
        
      </>
    );
}

export default Blog