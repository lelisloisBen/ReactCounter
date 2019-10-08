# Simple Counter with React

## Instructions

Create a seconds-counter component, called SecondsCounter.

The whole purpose of the component is to display how many seconds have passed since the website finished loading (onLoad).
Use the ReactDOM.render() to render the component into the webapp.
Use the setInterval() function to re-render de component on every second.
The component does not need a local state, you can pass the number of seconds as props like this:

```
<SecondsCounter seconds={3434} />
```

You can find the clock icon on the left of the component in font-awesome.