import { useState } from 'react';
function MyComponent (props) {
const [count, setCount] = useState(0);
const [text, setText] = useState('');
function handleIncrement() {
setCount (count + 1);
}
function handleTextChange(event) {
setText (event, target.value);
}
return (
<div>
<p>Count: {count}</p>
<button onClick={handleIncrement}>Increment</button>
<br />
<input type="text" value={text} onChange={handleTextChange} />
<p>Text: {text}</p>
</div>
) ;
}


// Alternate code :-

import { useState } from 'react';
function MyComponent (props) {
const [state, setState] = useState(
{ count: 0, text:''}
);
function handleIncrement() {
setState(
prevState = (
{ prevState, count: prevState.count + 1 }
)
) ;
}
function handleTextChange(event) {
setState(
prevState => (
{ prevState, text: event. target.value }
)
);
}
return (
    <div>
    <p>Count: {state.count}</p>
    <button onClick={handleIncrement}>Increment</button>
    <br />
    <input type="text" value={state.text} onChange={handleTextChange} />
    <p>Text: {state. text}</p>
    </div>
) ;
}