import Form from "./Form";
import Joi from "joi";
import { updateAPost } from "../../../services/postServices";
import FormStatusLabel from "./../form-status-label/FormStatusLabel";

class UpdateForm extends Form {
  constructor(props) {
    super(props);

    this.state = {
      data: { title: "", post: "" },
      error: { title: "", post: "" },
      createdSuccessful: false,
    };
  }

  componentDidMount() {
    const { title, body: post } = this.props.updatePost;
    this.setState({
      data: {
        title,
        post,
      },
    });
  }

  schema = {
    title: Joi.string().required().label("Title"),
    post: Joi.string().required().label("Post"),
  };

  doSubmit = () => {
    const { title, post } = this.state.data;
    const { id } = this.props.updatePost;
    const data = { title, post };

    updateAPost(id, data).then((data) => {
      const post = {
        userId: 1,
        id: id,
        title: JSON.parse(data.config.data).title,
        body: JSON.parse(data.config.data).post,
      };
      this.props.handleUpdatedPost(id, post);
      this.setState({ createdSuccessful: true });
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.state.createdSuccessful && <FormStatusLabel />}
        {this.renderInput("Post title", "title")}
        {this.renderTextArea("post", "8")}
        {this.renderButton("Update post")}
      </form>
    );
  }
}

export default UpdateForm;
