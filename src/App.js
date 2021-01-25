import React, { Component } from 'react';
// import {Editor, EditorState} from 'draft-js';
// import '../node_modules/draft-js/dist/Draft.css';
import { Editor } from 'react-draft-wysiwyg';
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
//import logo from './logo.svg';
// import {Editor, EditorState} from 'draft-js';
// import 'draft-js/dist/Draft.css';
// import { Editor } from 'react-draft-wysiwyg';
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
 import './App.css';

// function MyEditor() {
//   const [editorState, setEditorState] = React.useState(
//     () => EditorState.createEmpty(),
//   );

//   return <Editor editorState={editorState} onChange={setEditorState} />;
// }




const EditorComponent = () => <Editor />
const  App=()=> {
  // const [editorState, setEditorState] = React.useState(
  //   () => EditorState.createEmpty(),
  // );

  // return <Editor editorState={editorState} onChange={setEditorState} />;
  // const [editorState, setEditorState] = React.useState(
  //   () => EditorState.createEmpty(),
  // );

  // return <Editor editorState={editorState} onChange={setEditorState} />;
  // return (
  //   <div className="App">
  //     <MyEditor />
  //   </div>
  // );
  return <EditorComponent />
}

export default App;
