import Form from "./Form";
import Joi from "joi";
import { createPost } from "./../../../services/postServices";
import FormStatusLabel from "../form-status-label/FormStatusLabel";

class LoginForm extends Form {
  constructor(props) {
    super(props);

    this.state = {
      data: { title: "", post: "" },
      error: { title: "", post: "" },
      createdSuccessful: false,
    };
  }

  schema = {
    title: Joi.string().required().label("Title"),
    post: Joi.string().required().label("Post"),
  };

  doSubmit = () => {
    const { title, post } = this.state.data;
    const data = { title, post };

    createPost(data).then((data) => {
      console.log("Form submitted");

      const post = {
        userId: 1,
        id: data.data.id,
        title: JSON.parse(data.config.data).title,
        body: JSON.parse(data.config.data).post,
      };

      this.props.handleNewPost(post);
      this.setState({ createdSuccessful: true });
      this.setState({ data: { title: "", post: "" } });
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.state.createdSuccessful && <FormStatusLabel /> }
        {this.renderInput("Post title", "title")}
        {this.renderTextArea("post", "5")}
        {this.renderButton("Create post")}
      </form>
    );
  }
}

export default LoginForm;
