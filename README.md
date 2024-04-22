
        REACT : Frond end Technology 
    ------------------------------------

    Basic Commands
    --------------
    1. to create react app : npx create-react-app project-name
    2. to run react app : npm start / npm run dev
    3. install vite: npm i -g create-vite
    4. to create project using vite: npm create vite@latest /
        npm create vite@latest react-app-name -- --template react
    5. to run vite app:  npm run dev
    6. Installing MUI : npm install @mui/material @emotion/react @emotion/styled
    7. Installing React Bootstrap : npm install react-bootstrap bootstrap
        - Add bootstrap themes : using https://bootswatch.com/ website, download bootstrap.min.css file and add it in src folder, import css file into main.jsx
    8. install axios : npm i axios
    9. Install REDUX: npm install @reduxjs/toolkit react-redux
    10. Install react-router-dom package : npm i react-router-dom
    11. Install react toastify : npm i react-toastify

    Basic Features
    --------------
    1. Is a collection of JS Libraries : design UI 
    2. Create a single page application : Facebook , Twitter, GMAIL
    3. Features
        - Declarative Approach : 
        - Mutable & Immutable data 
        - Pure Functions : that accept Immutable objects and return a new object that doesnot cause any change
        - JSX (Javascript XML) : ex: const heading = <h1>Heading 1</h1>
            - JSX expressions must be inside a single parent element
            - React fragments : <></> similiar to container tag
            - Changes in attribute : using camel case
                - class become className
                - for become htmlFor
            - to display js expressions isdie JSX : to place js expressions inside {} in JSX Code
            - JSX requires ending tag for all tags : Self closing tags: <tag-name/>
            - to style jsx elements using CSS : 
                - Inline CSS : style should be an object, property should be in camelCase
                - External CSS : import External css file into Components
                - CSS Module : create a file with extension as .module.css
            - Transpiling : conversion of JSX to HTML using babel Library
        - React Components : part of UI, react app is a collection of Components, all the Components are arranged in tree structure, root or parent node : "App" Component
            - to create a Component : create a js/jsx file, filename must starts with capital letter, it always return or render JSX code 
            - Different ways Components
                - Class Based Component / stateful Component
                - Functional Based Component / stateless Component
        - Data sharing Between Components
            - sharing only from Parent to Child : use props
                - props : Property of Component  , its type is object, to access props from Component argument
            - Share data between Sibling : State Lifting
            - Sharinig data without props drilling
                - REDUX
                - Context API : Share data using context between any compoent in react app
                    - Create Context :
                        - create a component
                        - create context using createContext globally in the component
                    - Provide context to entire react app : render entire app inside context component
                    - access Context using useContext Hook in component 
        - React Events handling
            - event binding without argument : event-name={function-name}
            - event binding with argument : event-name={()=>function-name(arg)}
            - event binding with event as argument : event-name={(event)=>function-name(event)}
        - React State : used to store values, it can access and update anywhere in the Component, it will re render Component.
        - React Hooks : To provide react Component Features to function Based Component, is a pre defined function in react, Hooks name always starts with 'use' keyword
            - How to use a Hooks in a Functional based Component
                - it should call the hook at the top level of Component
                - Hooks are not conditional
            - Types of Hooks
                - Predefined Hooks
                    -   useState() : use to create state in Functional based Component
                    -   useEffect(callback,dependency) : used to provide side effects to functional component
                         - Based on depenedency we can provide side effects
                            - if depenedency is not provided, apply side effects all times
                            - if depenedency is empty array : apply side effects at the time of compoenet creation
                            - if depenedency is array with state/props : apply side effects at the time of compoenet creation as well as when values of state/props changes
                    -   useNavigate() : used to redirect from one location to another
                    - useParams() : used to fetch path parameter from route associated with a component
                - Customized hook : function with name starts "use"
        - Conditional rendering : based on a condition we can decide the visiblity of JSX element in DOM
            - if statements :  &&
            - if else statements : ?: ternary
        - Rendering List : use map method, use key attribute to set unique key for each duplicated item
        - Component Life Cycle methods - React Component
            - Mounting Phase : putting all elements into DOM
                - constructor()
                - getDerivedFromProps()
                - render()
                - componentDidMount()
            - Updating Phase : when Component is updated
                - getDerivedStateFromProps()
                - shouldComponentUpdate()
                - render()
                - getSnapshotBeforeUpdate()
                - componentDidUpdate()
            - Unmounting Phase : remove element from DOM
                - componentWillUnMount()
                
        - Functional Based Component            - Class Based Component
        --------------------------------    ---------------------------------
        1. JS Pure function accept props    1. Class extended from react component
         as argument and return jsx          and its render function return jsx
        2. No need of render function to    2. Need render function to return jsx
        to return jsx
        3. Run code from top to bottom,     3. Component alive depending upon its Life
        once jsx returns it cannot alive    Cycle
        4. Stateless Component              4. Stateful Component
        5. hooks used                       5. No need to use hook 
        6. constructor is not available     6. constructor used to assign state

        - React Form 
            - Controlled Component : managed by react compoent, set state to its value field of user inputs
            - Uncontrolled Component : managed by Real DOM
        - Set up path for React component
            - can set up path in App / Root Component
            - Install react-router-dom package : npm i react-router-dom
                - Entire react app should be render in BrowserRouter Selector
                - Place all compenent that need path in Routes Selector
                - Set up path using Route Selector for each component
        - API Call - Axios package
            - install axios
            - Create request instance of axios to make api call
                - create service folder in src folder
                - create serverUrl.js file to define server url in service folder
                - create commonAPI.js file for defining axios request instance
                - create allAPI.js file to define different api call


                            --------------------------------------
                                REDUX - STATE MENANGEMENT TOOL 
                            --------------------------------------

        - To avoid props drilling to acheive state management
        - Installation : npm install @reduxjs/toolkit react-redux
        - REDUX TOOLKIT 
            - configureStore() : creating a Redux store
            - Provider from react-redux : Provide store to react App 
            - createSlice() : used to hold both action and reducer together and it return reducer, actions
            - useSelector : hook used to access state from store to compoenet
            - useDispatch : hook used dispatch/execute the action from component
            - createAsyncThunk : A function that accepts a Redux action type string and a callback function that should return a promise.
            - extraReducers : used to handle action returing promise


            ------------------------------------------------------------------------------
                                NODE JS - SERVER SIDE TECHNOLOGY
            ------------------------------------------------------------------------------

            1. Open source server environment - Resolving client request
            2. Run JS outside browser also uses js in server
            3. Node.js uses Asynchrnous Programming 
            4. Modules in Node.js : JS Libraries
                - Built-in Modules : Predefined Library
                    - http,https,os,url,fs etc.
                    - require() : to import modules in js file use require('library') method
                - userDefined Modules : 
                    - module.exports / exports. : used to export data from a js file
            5. Global Objects/Variable node JS
                - Without importing we can use a data throughout our code
                - ex: process variable : 
                    - process.env : Environmental variable - used to share runtime data throughout process
            6. Frameworks Of NODE JS
                - Express JS : Used in Client -server/ event driven application
            7. CORS : Cross Origin Resource Shairing - used to share resouces between 2 application in internet
            8. Middleware : Is a function Used to resolve a task before resolving the client request
                - Is function with 3 argument: req,res,next
                    - next argument controls the client request processing
                - Types of Middlewares
                    - Application Specific Middleware : Middleware become active whenever a client request recived by the server
                    - Router specific Middleware : Middleware active only at the route where we apply 

                ---------------------------------------------------------------------------
                                EXPRESS JS - NODE JS FRAMEWORK
                ---------------------------------------------------------------------------
           
            - Steps to build express server
                1. Create a folder for server
                2. Create package.json file : npm init -y 
                3. Update scripts in package.json file as "start": "node index.js" instead of "test"
                4. Install external packages to build server
                    - express, cors, dotenv (Load contents of .env file to process.env)
                    - npm i express cors dotenv
                5. Create .env file to add environmetal variable : used to store secret data regarding the app
                6. Create .gitignore file to add files tobe ignored
                    - node_modules .env
                7. Create index.js file : define server
                    - import dotenv,cors, express
                    - create express server
                    - Use cors in express server
                    - use express.json() middleware in server to parse json data in request
                    - use router in server
                    - use static files in server using express.static() method
                    - Set up port where we have to run server
                    - Run the server to listen client request
                    - To resolve http request using express
                        - express-server.httprequest(path,callback)
                    - To setup independent routes for each request in express server
                        - Create routes folder : to set up path for each http request
                            - Inside routes folder create router.js file to define route/path for resolving each request
                            - import express
                            - create object for Router class of express to set up routes
                            - export router and use it in server app
                        - Crate controller folder to define logic to resolve request
                            - Inside folder, create js file
                8. To Run server app : node index.js / nodemon index.js

                ---------------------------------------------------------------------------
                                        MONGODB - DATABASE
                ---------------------------------------------------------------------------

            - Databases are used to store and manipulate data permanently
            - NOSQL Database : Structureless DB
            - Data stored as document - Document Oriented DB
                - document is similar as JSON
                - _id : every document has unique id generated by mongodb 
            - Collection : collection of documents 
            - Multiple collections be hold in single db
            - Common Commands in MongoDB
                - show databases : display all db
                - show db-name : shift control to specific db
                - show collections : display all collections in a db
                - collection-name.find() : to display all documents in a collection
                - collection-name.findOne({key:value}) : to display single document which is in the collection
                - collection-name.insertOne({key:value}) : to add single document  in a collection
                - collection-name.insertMany([{key:value}]) : to add multiple documents  in a collection
                - collection-name.updateMany([{source},{$set:{target}}]) : to update multiple documents  in a collection
                - collection-name.updateOne([{source},{$set:{target}}]) : to update single documents  in a collection
                - collection-name.deleteMany() : to delete multiple documents  in a collection
                - collection-name.deleteOne() : to delete single documents  in a collection
                - count() : display total count of items in a collection
                - Querying statements
                    - $exists
                    - $nin
                    - $gt/gte/lt/lte
                    - $eq
                    - $and
                    - $or
                    - $expr
                    - $push
                    - $pull
                    - $regex
                - $lookup(aggregation) : Performs a left outer join to a collection in the same database to filter in documents from the "joined" collection for processing
                    db.collection-name.aggregate([{
                        $lookup: {
                                    from: <collection to join>,
                                    localField: <field from the input documents>,
                                    foreignField: <field from the documents of the "from" collection>,
                                    as: <output array field>
                                }
                    }])

                    ---------------------------------------------------------------------------
                             MONGOOSE - ODM (Object Data Model for Mongodb to Nodejs)
                    ---------------------------------------------------------------------------

            1. Install mongoose : npm install mongoose
            2. Connect db with nodejs
                - Create a DB Folder for defining db connection and create connection js file
                - import mongoose
                - connect db via mongoose 
                - Schema : structure of data / document tobe stored in db
                    - create object for mongoose.Schema class
                    - Schema types
                - Model : collection of documents
                    - mongoose.model(model-name,schema)
                    - Node app will communicate with model instead of monogdb directly


                    -----------------------------------------------------------------------------
                                    JWT - Json Web Token (Authorization)
                    -----------------------------------------------------------------------------

            1. Install jwt : npm i jsonwebtoken
            2. Import library whre you want to use
            3. To generate token 
                - jwt.sign(payload, secretOrPrivateKey, [options, callback])
                    - payload : data to be stored inside token
                    - secretOrPrivateKey : similar to password/ secret data
            4. To verify token
                - jwt.verify(token,secretOrPrivateKey)

                    -----------------------------------------------------------------------------
                                        MULTER - Node js Middleware 
                    -----------------------------------------------------------------------------

            1. Used to handle multipart/form-data, which is primarily used for uploading files in node js
            2. Install Multer : npm i multer
            3. Multer adds a 'body' object and a 'file' or 'files' object to the 'request' object.
            4. The body object contains the values of the text fields of the form
            5. file or files object contains the files uploaded via the form.
            6. It can manage upload file in server



