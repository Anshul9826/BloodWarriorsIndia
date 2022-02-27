import { createContext } from 'react'

const dataPass = {
    id:"",
    name:"anshul"
}

const Context = createContext(dataPass);

const Provider = Context.Provider;
const Consumer = Context.Consumer;

export {Provider, Consumer};

export default Context;