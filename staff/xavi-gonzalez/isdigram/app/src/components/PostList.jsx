import utils from "../utils";

import logic from "../logic";

import { Component } from "react";

class PostList extends Component {
  constructor() {
    super();

    try {
      const posts = logic.retrievePosts();

      //

      this.state = { posts };
    } catch (error) {
      utils.showFeedback(error);
    }
  }

  componentWillReceiveProps(newProps) {
    console.log(this.props, newProps);

    if (newProps.refreshStamp !== this.props.stamp) {
      try {
        const posts = logic.retrievePosts();

        this.setState({ posts });
      } catch (error) {
        utils.showFeedback();
      }
    }
  }

  render() {
    return (
      <section>
        
        {this.state.posts.map((post) => (
          
          <article key={post.id}>
            <h3>{post.author.username}</h3>

            <img src={post.image} />

            <p>{post.text}</p>

            <time>{post.date}</time>
            
            {post.author.id === logic.getLoggedInUserId() &&
            
            <div>
            <button
               onClick={( ) => {
                
                this.props.onEditPostClick();
              }}
            >
              📝
            </button>
            
            <button
              onClick={() => {

                confirm ('delete post?')


                try {
                  logic.removePost(post.id);

                  const posts = logic.retrievePosts()

                  this.setState({ posts });
      
                } catch (error) {
                utils.showFeedback(error);
              
                
              }}
            }
            >
              🗑️
            </button>
            </div>
            }
           
            
          </article>
        ))}
      </section>
    );
  }
}

export default PostList;