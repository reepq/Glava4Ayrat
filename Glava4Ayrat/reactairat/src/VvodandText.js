import React, {useState, useEffect} from 'react';

const CounterRe = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    console.log(`Кол-во рендеров: ${count}`);
  }, [count]);

  const onButtonClick = () => {
    setCount(count + 1);
  };

  const onInputChange = event => {
    setText(event.target.value);
  };

  return (
    <div>
      <h3>Кол-во рендеров: {count}</h3>
      <h3>Текст: {text}</h3>
      <input type="text" value={text} onChange={onInputChange} />
      <button onClick={onButtonClick}>Жми</button>
    </div>
  );
};
export default CounterRe;