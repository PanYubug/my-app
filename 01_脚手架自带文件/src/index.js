import React from 'react';
import ReactDOM from 'react-dom';
import MenuList from './mytest/getSnapshotBeforeUpdateDemo';
//App组件


ReactDOM.render(
  <React.StrictMode>
    {/* <TodoList /> */}
    {/* <Tick /> */}
    {/* <Weather /> */}
    {/* <Login /> */}
    {/* <Life /> */}
    {/* <Count count={199}/> */}
    <MenuList />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
