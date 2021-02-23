import React, { useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertToHTML } from "draft-convert";
import DOMPurify from "dompurify";
import Avatar from "react-avatar-edit";
import { Form, Button } from "react-bootstrap";
import { Bar, Doughnut } from "react-chartjs-2";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

var passwordValidator = require("password-validator");

// Create a schema
var schema = new passwordValidator();
schema
  .is()
  .min(8) // Minimum length 8
  .is()
  .digits(1) // Must have at least 2 digits
  .has()
  .not()
  .spaces() // Should not have spaces
  .is()
  .not();

const App = () => {
  const imagePath = "./einshtein.jpg";
  const [convertedContent, setConvertedContent] = useState();
  const [preview, setPreview] = useState(null);
  const [src, setSrc] = useState(imagePath);
  const [errorState, setErrorState] = useState();
  const [isEmailValid, setIsEmailValid] = useState();
  const onClose = () => {
    setPreview(null);
  };

  const onCrop = (preview) => {
    setPreview(preview);
  };

  const onFinish = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target),
      formDataObj = Object.fromEntries(formData.entries());
    console.log(formDataObj);
  };

  const validatePassword = (e) => {
    e.preventDefault();
    console.log(e.currentTarget.value);
    console.log(schema.validate(e.currentTarget.value));
    setErrorState(schema.validate(e.currentTarget.value));
  };

  const validateEmail = (e) => {
    if (
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        e.currentTarget.value
      )
    ) {
      setIsEmailValid(true);
      return true;
    }
    // alert("You have entered an invalid email address!");
    setIsEmailValid(false);
    return false;
  };

  // const [editorState, setEditorState] = useState(() =>
  //   EditorState.createEmpty()
  // );
  // const [convertedContent, setConvertedContent] = useState();
  // const handleEditorChange = (state) => {
  //   setEditorState(state);
  //   convertContentToHTML();
  // };
  // const convertContentToHTML = () => {
  //   let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
  //   console.log(currentContentAsHTML);
  //   setConvertedContent(currentContentAsHTML);
  // };
  // const createMarkup = (html) => {
  //   return {
  //     __html: DOMPurify.sanitize(html),
  //   };
  // };
  const data = {
    labels: ["No of men ", "Married", "Single", "Divorced", "Age Range"],
    datasets: [
      {
        label: "Men",
        data: [12, 19, 3, 5, [10, 40]],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 2,
      },
    ],
  };

  // const dataDonut = {
  //   data: {
  //     labels: ["Men", "Women"],
  //     datasets: [
  //       {
  //         label: "Women/Men",
  //         data: [10, 50],
  //         backgroundColor: [
  //           "rgb(255, 99, 132)",
  //           "rgb(54, 162, 235)",
  //           // "rgb(255, 205, 86)",
  //         ],
  //         hoverOffset: 4,
  //       },
  //     ],
  //   },
  // };
  const dataDonut = {
    maintainAspectRatio: false,
    responsive: false,
    labels: ["Men", "Wome"],
    datasets: [
      {
        data: [10, 50],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
        hoverBackgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
      },
    ],
  };

  const options = {
    legend: {
      display: false,
      position: "right",
    },
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
  };

  const styles = {
    pieContainer: {
      width: "40%",
      height: "40%",
      top: "50%",
      left: "50%",
      position: "absolute",
      transform: "translate(-50%, -50%)",
    },
    relative: {
      position: "relative",
    },
  };
  return (
    <div className="App">
      <Bar
        data={data}
        width={50}
        height={150}
        options={{ maintainAspectRatio: false }}
      />
      {/* <Doughnut data={dataDonut} options={options} /> */}
      <div style={styles.relative}>
        <Doughnut data={dataDonut} options={options} />
        {/* <div style={styles.pieContainer}>
          <Pie
            data={data}
            options={pieOptions}
            ref={input => {
              chartInstance = input;
            }}
          />
        </div> */}
        <div id="legend" />
      </div>
      {/* <header className="App-header">Rich Text Editor Example</header>
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />
      <div
        className="preview"
        dangerouslySetInnerHTML={createMarkup(convertedContent)}
      ></div> */}
      {/* <Avatar
        width={390}
        height={295}
        onCrop={onCrop}
        onClose={onClose}
        src={src}
      />
      <img src={preview} alt="Preview" /> */}
      {/* 
      <Form onSubmit={onFinish}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={validateEmail}
          />
          {isEmailValid === false ? (
            <Form.Text className="text-danger">Email is valid</Form.Text>
          ) : isEmailValid === true ? (
            <Form.Text className="text-success">Email is Invalid</Form.Text>
          ) : null}
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            onChange={validatePassword}
          />
          {errorState === false ? (
            <Form.Text className="text-danger">
              Password me 8 characters long and must be alphanumeric
            </Form.Text>
          ) : errorState === true ? (
            <Form.Text className="text-success">Password acceptable</Form.Text>
          ) : null}
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form> */}
    </div>
  );
};

export default App;
