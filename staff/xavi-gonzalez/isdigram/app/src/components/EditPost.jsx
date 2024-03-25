import utils from "../utils";

import logic from "../logic.mjs";

import { Component } from "react";

class EditPost extends Component {
  constructor(post) {
    super();
  }

  render() {
    return (
      <form onSubmit={(event) => {
          event.preventDefault();

          const form = event.target;

          const text = form.text.value;

          try {
            logic.editPost(text);

            form.reset();

            this.props.onPostCreated();
          } catch (error) {
            utils.showFeedback(error);
          }
        }}
        ><label>Image Link</label>
        <input id="image" type="text" />
        <label>Text</label>
        <input id="text" type="text" />
        <button className="round-button submit-button" type="submit">
          Create Post
        </button>
      </form>
    );
  }
}

export default EditPost;

/*
this.addClass("edit-post");

    const title = new Component("h2");
    title.setText("Edit Post");

    const form = new Form

    const textLabel = new Label
    textLabel.setFor("text");
    textLabel.setText("Text");

    const textInput = new Input
    textInput.setId("text");
    textInput.setType("text");
    textInput.setValue(post.text);

    const editButton = new SubmitButton
    editButton.setType("submit");
    editButton.setText("Save");

    form.add(textLabel, textInput, editButton);

    const cancelButton = new CancelButton
    cancelButton.setText("Cancel");

    this._cancelButton = cancelButton;

    this.add(form, cancelButton);

    form.onSubmit((event) => {
      event.preventDefault();

      const text = textInput.getValue();

      try {
        logic.modifyPost(post.id, text);

        this._onPostEditedCallback();
      } catch (error) {
        utils.showFeedback(error);
      }
    });

    this._onPostEditedCallback = null;

    EditPost.active = true;
  }

  static active = false;

  onCancelClick(callback) {
    if (typeof callback !== "function")
      throw new TypeError("callback is not a function");

    this._cancelButton.onClick(() => {
      EditPost.active = false;

      callback();
    });
  }

  onPostEdited(callback) {
    if (typeof callback !== "function")
      throw new TypeError("callback is not a function");

    this._onPostEditedCallback = () => {
      EditPost.active = false;

      callback();
    };
  }
}

export default EditPost;
*/
