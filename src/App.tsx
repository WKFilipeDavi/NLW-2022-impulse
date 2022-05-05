import { useState } from 'react';
import { Widget } from './components/widget';

interface ButtonProps {
  text: String;
}

function Button(props: ButtonProps) {
  return <button>{props.text}</button>
}

function App() {
  return (
    <div>
       <h1>Hello NLW World</h1>
       <Button text='botãozinho' />
       <h1 className="text-3xl font-bold underline text-purple-600">
        Hello Tailwind world!
      </h1>
    </div>
  )
}

export default App
