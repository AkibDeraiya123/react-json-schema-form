import React, { Component } from 'react';
import Form from 'react-jsonschema-form'

const mySchema = {
  "title": "Custom validation",
  "description": "This form defines custom validation rules checking that the two passwords match.",
  "type": "object",
  "properties": {
    "fullname": {
      title: "Fullname",
      "type": "string"
    },
    "email": {
      title: "E-mail",
      "type": "string"
    },
    "pass1": {
      "title": "Password",
      "type": "string",
      "minLength": 3
    },
    "pass2": {
      "title": "Repeat password",
      "type": "string",
      "minLength": 3
    },
    "age": {
      "title": "Age",
      "type": "number",
      "minimum": 18
    },
    "salary": {
      "title": "Salary",
      "type": "integer",
      "minimum": 0,
      "maximum": 100,
      "multipleOf": 10
    },
    gender: {
      title: "Gender",
      type: "string",
      enum: [
        "male",
        "female"
      ]
    },
    hobby: {
      type: "array",
      title: "Hobby",
      items: {
        type: "string",
        enum: [
          "Listen Music",
          "Play Guiter",
          "Pay Cricket"
        ]
      },
      "uniqueItems": true
    },
    expectedSalary: {
      "type": "string",
      title: "Expected salary range",
      "enum": [
        "1 - 2 Lacs",
        "2 - 3 Lacs",
        "3 Lacs above"
      ]
    },
    aboutYou: {
      type: "string",
      title: "Tell us something about you"
    },
    cv: {
      type: "string",
      format: "data-url",
      title: "Resume"
    },
    last5yearphotos: {
      type: "array",
      "items": {
        "type": "string",
        "format": "data-url"
      },
      title: "Last 5 years passport photos"
    },
    country: {
      type: "number",
      "enum": [
        1,
        2
      ],
      "enumNames": [
        "India",
        "South Africa"
      ],
      title: "Country"
    },
  }
}

const uiSchema = {
  "pass1": {
    "ui:widget": "password"
  },
  "pass2": {
    "ui:widget": "password"
  },
  "salary": {
    "ui:widget": "range"
  },
  "gender": {
    "ui:widget": "radio"
  },
  "hobby": {
    "ui:widget": "checkboxes"
  },
  "expectedSalary": {
    "ui:widget": "radio"
  },
  "aboutYou": {
    "ui:widget": "textarea"
  },
  country: {
    "ui:widget": "select"
  }
}

export default class MyForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit({ formData }) {
    console.log(formData);
  }

  render() {
    return (
      <Form
        id="edit-form"
        className="form form-wide"
        schema={mySchema}
        onSubmit={this.handleSubmit}
        uiSchema={uiSchema}
        liveValidate={true}
      />
    )
  }
}