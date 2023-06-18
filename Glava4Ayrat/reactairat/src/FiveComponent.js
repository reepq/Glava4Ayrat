import React, {useState, useContext} from 'react';

const ClickCountContext = React.createContext();

const Button = () => {
  const {setCount} = useContext(ClickCountContext);
  const onButtonClick = () => {
    setCount(c => c + 1);
  };

  return (
    <button onClick={onButtonClick}>Жми!</button>
  );
};

const PyatiiComponent = () => {
  return (

    <ClickCountContext.Consumer>
      {({count}) => <p>Кнопка нажата {count} раз</p>}
    </ClickCountContext.Consumer>
  );
};



const Chetvirtii = () => {
  return (
    <div>
      <h3>Четвёртый компонент</h3>
      <PyatiiComponent />
    </div>
  );
};

const Tretii = () => {
  return (
    <div>
      <h3>Третий компонент</h3>
      <Chetvirtii />
    </div>
  );
};

const Vtoroi = () => {
  return (
    <div>
      <h3>Второй компонент</h3>
      <Tretii />
    </div>
  );
};

const Five = () => {

  const [count, setCount] = useState(0);

  return (
    <ClickCountContext.Provider value={{count, setCount}}>
      <div>
        <h3>Родительский компонент</h3>
        <p>Кнопка нажата {count} раз</p>
        <Vtoroi />
        <Button />
      </div>
    </ClickCountContext.Provider>
  );
};

export default Five;