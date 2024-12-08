# react-learn
Created with CodeSandbox

## Folder Thinking-in-react: On design in react
You're not alone! Making a functional mental model with React takes some time.

One way to visualize a react component is "a fancy html generator". After all the state updates and calculations are settled, the final output is an html string that will be rendered to the page.

This is a very common starting place for the question you have about structure: https://reactjs.org/docs/thinking-in-react.html

Also, a helpful mental model around a react app is to visualize it as a tree. There will usually be a top level component that instantiates other components. If you think about html on the page as a tree of nested elements, you can start to visualize the mapping that will be required between components and the elements that they output.

One important thing to keep in mind is also data flow. Always think of data flowing "down" the tree from parent components to children. When using "vanilla react" (without redux, etc), the way you pass information back up to change state "higher" in the tree, like when a user clicks an element on a child component is by passing callback functions "down" to the child components.

Those are some starting thoughts... please ask if there's any specific part you'd like more info on. Or better yet, share your starting mental model and folks can chime in about what sounds right, or what could use some correction
