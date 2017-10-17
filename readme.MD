## SelectiveComponent

### Wrapper over a React Component which won't rerender unless there is a change in props. 👌😎

### Benefits

#### There are two major advantages to use a SelectiveComponent

##### 1. Won't allow to rerender 🙅 if there is an change in props. Imagine in redux you have multiple presentational components in a container components and you have dispatched an action from a presentational  component. What happens? Boom!! all your presentational components are updated. Now what a Selective Component does it won't allow you to update your component unless there is a change in your props. So in redux language only those presentational components will be updated which the action is targeting. Isn't it cool 👍.

##### 2. Won't allow to ```setState``` 🙅 if your component is unmounted. Imagine you have made a promise call, updating the state when the promise is resolved and the promise is taking a lot of time to be resolved  and in the mean time you have removed the component from the react tree. What will happen now 😰? Relax nothing major will happen but will give a warning in the console you are trying to setState for an unmounted component thereby will reduce the performance of React. There are lot of ways to tackle this situation. But with SelectiveComponent you can easily tackle this situation 👍.

### Usage

#### Install the package

```
    npm install react-selective-component
```

#### Using in your code.
```
    import SelectiveComponent from 'react-selective-component'
    class DummyComponent extends SelectiveComponent {
        constructor(props) {
            super(props)
        }
        .... Do anything 👍
    }
```
