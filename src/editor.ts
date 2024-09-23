import './styles/sass/editor.scss'
import { Editor } from "./components";

const editor = new Editor('tusk-editor', { 
    language: "javascript" 
}).create();

