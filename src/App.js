import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from "./components/Greet"
import Hello from "./components/Hello";
import Welcome from "./components/Welcome"
import Message from "./components/message"
import Counter from "./components/Counter"
import ClassClick from "./components/ClassClick"
import BindEvent from "./components/BindEvent"
import Parent from "./components/Parent"
import UserGreeting from "./components/userGreeting"
import NameList from "./components/nameList"
import PersonList from "./components/PersonList"
import Style from "./components/style"
import Form from "./components/Form"
import FragmentDemo from "./components/fragmentDemo"
import PureComp from "./components/PureComponent"
import RefsDemo from "./components/RefsDemo"
import PortDemo from "./components/PortalDemo"
import ErrorBoundary from "./components/ErrorBoundary"
import Hero from "./components/Hero"
import ClickCounter from './components/ClickCounter'
import HoverCounter from "./components/HoverCoutner"
import { UserProvider } from "./components/userContext"
import ComponentC from "./components/ComponentC"
import PostList from "./components/PostList"
import PostForm from './components/PostForm';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookwithArray from './components/HookwithArray';
import ClassCounter from './hooks/ClassCount'

function App() {
  return (
    <div className="App">
      {/* <Parent/>
      <Greet name ="bruce"/>
        <p>children nodes</p>
      <Greet/>
      <Welcome name = "daidai"/>
      <Greet name ="chen" firstName="Shuang"/>
      <Message/>
      <Counter/>
      <ClassClick/>
      <BindEvent/> */}
      {/* <UserGreeting/>
      <NameList/> */}
      {/* <PersonList />
      <Style />
      <Form />
      <FragmentDemo />
      <PureComp /> */}
      {/* <PortDemo />
      <ErrorBoundary>
        <Hero heroName="Superman"/>
        <Hero heroName="joker"/>
      </ErrorBoundary> */}
      {/* <ClickCounter />
      <HoverCounter />
      <UserProvider value="shawn">
        <ComponentC/>
      </UserProvider>
      <PostForm /> */}
      {/* <HookCounterTwo />
      <HookwithArray /> */}
      <ClassCounter />
    </div>

  );
}

export default App;
