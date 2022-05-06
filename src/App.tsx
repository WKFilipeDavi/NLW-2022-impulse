import { useState } from 'react';
import { Widget } from './components/Widget';

interface ButtonProps {
  text: String;
}

function Button(props: ButtonProps) {
  return <button>{props.text}</button>
}

function App() {
  return (
    <div>
    <h1 className="text-orange-600">teste</h1>
    <Widget />
    </div>
  )
}

export default App
