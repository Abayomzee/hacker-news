import { Component } from "react";
import Joi from "joi";
import Input from "./Input";
import TextArea from "./TextArea";

class Form extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderInput = this.renderInput.bind(this);
    this.renderButton = this.renderButton.bind(this);
  }

  // Validate the full form data
  validate = () => {
    const schema = this.schema;
    const data = this.state.data;
    const schemaData = Joi.object({ ...schema });

    const { error } = schemaData.validate(data, { abortEarly: false });
    if (error) {
      this.setErrors(error);
      return error;
    }
  };

  // validate a single input onChange
  validateInput = ({ name, value }) => {
    const data = { [name]: value };
    const schemaObj = { [name]: this.schema[name] };
    const schema = Joi.object(schemaObj);
    const { error } = schema.validate(data);

    if (error) {
      this.setErrors(error);
      return error;
    }
  };

  //   Set errors
  setErrors = (error) => {
    const dataError = this.state.error;
    for (let err of error.details) {
      const { path, message } = err;
      dataError[path[0]] = message;
    }

    this.setState({ error: dataError });
  };

  //   Handle change
  handleChange = ({ currentTarget: input }) => {
    const { data, error } = this.state;
    const errorCheck = this.validateInput(input);
    if (!errorCheck) error[input.name] = "";

    data[input.name] = input.value;
    this.setState({ data, error });
  };

  //   Handle submit
  handleSubmit = (e) => {
    e.preventDefault();

    const error = this.validate();
    if (error) return;
    this.doSubmit();
  };

  // Render input
  renderInput = (label, name, type = "text") => {
    const { data, error } = this.state;

    return (
      <Input
        label={label}
        onChange={this.handleChange}
        value={data[name]}
        name={name}
        error={error[name]}
        type={type}
      />
    );
  };
  // Render select

  // Render text area
  renderTextArea = (name, rows) => {
    const { data, error } = this.state;

    return (
      <TextArea
        name={name}
        onChange={this.handleChange}
        value={data[name]}
        error={error[name]}
        rows={rows}
        placeholder="Post content"
      />
    );
  };

  //   Render Button
  renderButton = (label) => {
    return (
      <button type="submit" className="btn-form">
        {label}
      </button>
    );
  };
}

export default Form;
