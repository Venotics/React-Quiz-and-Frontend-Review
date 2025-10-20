interface Questions {
  id: number;
  question: string;
  options: string[];
  answer: string;
}

const qBank: Questions[] = [
  {
    id: 1,
    question: "What is React?",
    options: [
      "A JavaScript library for building user interfaces",
      "A CSS framework",
      "A database management system",
      "A server-side programming language",
    ],
    answer: "A JavaScript library for building user interfaces",
  },
  {
    id: 2,
    question: "What are components in React?",
    options: [
      "Reusable pieces of UI",
      "Database tables",
      "Server endpoints",
      "CSS stylesheets",
    ],
    answer: "Reusable pieces of UI",
  },
  {
    id: 3,
    question: "What are the differences between Props vs State?",
    options: [
      "Props are immutable and passed from parent to child, while State is mutable and managed within the component",
      "Props are mutable and managed within the component, while State is immutable and passed from parent to child",
      "Both Props and State are immutable",
      "Both Props and State are mutable",
    ],
    answer:
      "Props are immutable and passed from parent to child, while State is mutable and managed within the component",
  },
  {
    id: 4,
    question: "What is JSX?",
    options: [
      "A syntax extension for JavaScript that looks similar to XML or HTML",
      "A type of database",
      "A CSS preprocessor",
      "A server-side language",
    ],
    answer:
      "A syntax extension for JavaScript that looks similar to XML or HTML",
  },
  {
    id: 5,
    question: "What is the Virtual DOM in React?",
    options: [
      "A lightweight copy of the actual DOM that React uses to optimize updates",
      "A type of database",
      "A CSS framework",
      "A server-side rendering engine",
    ],
    answer:
      "A lightweight copy of the actual DOM that React uses to optimize updates",
  },
  {
    id: 6,
    question: "Why are keys used in lists?",
    options: [
      "To help React identify which items have changed, are added, or are removed",
      "To style the list items",
      "To sort the list items",
      "To filter the list items",
    ],
    answer:
      "To help React identify which items have changed, are added, or are removed",
  },
  {
    id: 7,
    question: "What are React Hooks?",
    options: [
      "Functions that let you use state and other React features in functional components",
      "A type of database",
      "A CSS framework",
      "A server-side rendering engine",
    ],
    answer:
      "Functions that let you use state and other React features in functional components",
  },
  {
    id: 8,
    question: "What is the purpose of useEffect Hook?",
    options: [
      "To perform side effects in functional components, such as data fetching or subscriptions",
      "To manage state in functional components",
      "To create context in React",
      "To optimize performance",
    ],
    answer:
      "To perform side effects in functional components, such as data fetching or subscriptions",
  },
  {
    id: 9,
    question: "What is Context API in React?",
    options: [
      "A way to pass data through the component tree without having to pass props down manually at every level",
      "A type of database",
      "A CSS framework",
      "A server-side rendering engine",
    ],
    answer:
      "A way to pass data through the component tree without having to pass props down manually at every level",
  },
  {
    id: 10,
    question: "What is a lifecycle method in React?",
    options: [
      "A method that gets called at specific points in a component’s life, such as mounting, updating, and unmounting",
      "A method to manage state",
      "A method to create context",
      "A method to optimize performance",
    ],
    answer:
      "A method that gets called at specific points in a component’s life, such as mounting, updating, and unmounting",
  },
  {
    id: 11,
    question:
      "What is the difference between a class component and a functional component?",
    options: [
      "Class components can have state and lifecycle methods, while functional components were originally stateless but can now use Hooks to manage state and side effects",
      "Functional components can have state and lifecycle methods, while class components are stateless",
      "Both can have state and lifecycle methods",
      "Neither can have state or lifecycle methods",
    ],
    answer:
      "Class components can have state and lifecycle methods, while functional components were originally stateless but can now use Hooks to manage state and side effects",
  },
  {
    id: 12,
    question: "Why were hooks introduced?",
    options: [
      "To allow functional components to use state and other React features without needing to convert them to class components",
      "To replace class components entirely",
      "To improve performance of React applications",
      "To provide a new way to style components",
    ],
    answer:
      "To allow functional components to use state and other React features without needing to convert them to class components",
  },
  {
    id: 13,
    question: "What does useState do?",
    options: [
      "It allows you to add state to functional components",
      "It allows you to perform side effects in functional components",
      "It allows you to create context in React",
      "It allows you to optimize performance",
    ],
    answer: "It allows you to add state to functional components",
  },
  {
    id: 14,
    question: "What does useEffect do?",
    options: [
      "It allows you to perform side effects in functional components",
      "It allows you to add state to functional components",
      "It allows you to create context in React",
      "It allows you to optimize performance",
    ],
    answer: "It allows you to perform side effects in functional components",
  },
  {
    id: 15,
    question: "What is the difference between useEffect([]) and useEffect()?",
    options: [
      "useEffect([]) runs only once after the initial render, while useEffect() runs after every render",
      "useEffect([]) runs after every render, while useEffect() runs only once after the initial render",
      "Both run only once after the initial render",
      "Both run after every render",
    ],
    answer:
      "useEffect([]) runs only once after the initial render, while useEffect() runs after every render",
  },
  {
    id: 16,
    question: "What is useRef used for?",
    options: [
      "To persist values across renders without causing re-renders and to access DOM elements directly",
      "To manage state in functional components",
      "To perform side effects in functional components",
      "To create context in React",
    ],
    answer:
      "To persist values across renders without causing re-renders and to access DOM elements directly",
  },
  {
    id: 17,
    question: "What is useReducer",
    options: [
      "A Hook that is used for state management in complex scenarios, providing an alternative to useState",
      "A Hook that is used to perform side effects in functional components",
      "A Hook that is used to create context in React",
      "A Hook that is used to optimize performance",
    ],
    answer:
      "A Hook that is used for state management in complex scenarios, providing an alternative to useState",
  },
  {
    id: 18,
    question: "What triggers a re-render in a React component?",
    options: [
      "Changes in state or props",
      "Changes in CSS styles",
      "Changes in the database",
      "Changes in server configuration",
    ],
    answer: "Changes in state or props",
  },
  {
    id: 19,
    question: "What is reconciliation in React?",
    options: [
      "The process by which React updates the DOM to match the Virtual DOM",
      "The process of managing state in React components",
      "The process of creating context in React",
      "The process of optimizing performance in React applications",
    ],
    answer:
      "The process by which React updates the DOM to match the Virtual DOM",
  },
  {
    id: 20,
    question: "What is React.memo?",
    options: [
      "A higher-order component that memoizes a functional component to prevent unnecessary re-renders",
      "A method to manage state in functional components",
      "A method to perform side effects in functional components",
      "A method to create context in React",
    ],
    answer:
      "A higher-order component that memoizes a functional component to prevent unnecessary re-renders",
  },
  {
    id: 21,
    question: "What is the purpose of the useCallback Hook?",
    options: [
      "To memoize functions to prevent unnecessary re-creations on every render",
      "To manage state in functional components",
      "To perform side effects in functional components",
      "To create context in React",
    ],
    answer:
      "To memoize functions to prevent unnecessary re-creations on every render",
  },
  {
    id: 22,
    question:
      "What is the difference between controlled and uncontrolled components in React?",
    options: [
      "Controlled components have their state managed by React, while uncontrolled components manage their own state using refs",
      "Uncontrolled components have their state managed by React, while controlled components manage their own state using refs",
      "Both have their state managed by React",
      "Both manage their own state using refs",
    ],
    answer:
      "Controlled components have their state managed by React, while uncontrolled components manage their own state using refs",
  },
  {
    id: 23,
    question: "How do we handle events?",
    options: [
      "By using camelCase syntax and passing a function as the event handler",
      "By using lowercase syntax and passing a string as the event handler",
      "By using uppercase syntax and passing a number as the event handler",
      "By using special event attributes",
    ],
    answer:
      "By using camelCase syntax and passing a function as the event handler",
  },
  {
    id: 24,
    question: "How to render a list in React?",
    options: [
      "By using the map() function to iterate over an array and return JSX elements",
      "By using a for loop to create HTML elements",
      "By using the filter() function to select items",
      "By using the reduce() function to aggregate items",
    ],
    answer:
      "By using the map() function to iterate over an array and return JSX elements",
  },
  {
    id: 25,
    question: "Conditional rendering example?",
    options: [
      "{isLoggedIn ? <LogoutButton /> : <LoginButton /> }",
      "<if (isLoggedIn) {<LogoutButton />} else {<LoginButton />} />",
      "{for isLoggedIn in user: <LogoutButton /> else: <LoginButton /> }",
      "<switch isLoggedIn: case true: <LogoutButton />; case false: <LoginButton />; />",
    ],
    answer: "{isLoggedIn ? <LogoutButton /> : <LoginButton /> }",
  },
  {
    id: 26,
    question: "How does parent-child communication work in React?",
    options: [
      "Parents pass data to children via props, and children can communicate back to parents using callback functions passed as props",
      "Children pass data to parents via props, and parents can communicate back to children using callback functions passed as props",
      "Both parents and children use a global state management system",
      "Both parents and children communicate through direct DOM manipulation",
    ],
    answer:
      "Parents pass data to children via props, and children can communicate back to parents using callback functions passed as props",
  },
  {
    id: 27,
    question: "What is lifting state up in React?",
    options: [
      "Moving state to the closest common ancestor of components that need to share it",
      "Moving state to a global state management system",
      "Moving state to individual components to isolate it",
      "Moving state to the server for centralized management",
    ],
    answer:
      "Moving state to the closest common ancestor of components that need to share it",
  },
  {
    id: 28,
    question: "What is Context API in React?",
    options: [
      "A way to share values between components without passing props through every level of the tree",
      "A method to manage state in functional components",
      "A method to perform side effects in functional components",
      "A method to optimize performance in React applications",
    ],
    answer:
      "A way to share values between components without passing props through every level of the tree",
  },
  {
    id: 29,
    question: "What is Redux in React?",
    options: [
      "A predictable state container for JavaScript apps, often used with React for state management",
      "A CSS framework",
      "A server-side rendering engine",
      "A database management system",
    ],
    answer:
      "A predictable state container for JavaScript apps, often used with React for state management",
  },
  {
    id: 30,
    question: "What is the purpose of React Router?",
    options: [
      "To handle navigation and routing in React applications",
      "To manage state in React applications",
      "To perform side effects in React applications",
      "To optimize performance in React applications",
    ],
    answer: "To handle navigation and routing in React applications",
  },
];

export default qBank;
