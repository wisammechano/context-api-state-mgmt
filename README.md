# Use React's Context and Reducers as your state management

In most React tutorials, authors talk mostly on how to useState hook or props to manage and pass data between components. 

You might have heard _about lifting the state_ which means when some two or more components use the same data, then that data need to sit in a parent component to these, wherever they meet in your components tree. If your component is some levels deep, then that piece of data should be passed all the way down from that parent to the child, along with its handlers. Quite the mess!

Some libraries have emerged to address this problem, like flux, mobx, redux.. etc. And being so great at what they do, they often come with boilerplate and configuration heck which sounds daunting for some prototyping project.

In this tutorial, we will try to solve that problem using Reacts Context, with and without a reducer, keeping everything neat and without the dependencies.

## Prerequisites
- React 16+
- React hooks knowledge
- Imagination!

## Setup
We will build an application using react alone that has user data that needs to be accessed everywhere.

## Creat react app

Use npx to create a brand new react application

```bash
npx create-react-app my-context-app
```