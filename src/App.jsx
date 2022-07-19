import { Header } from './components/header';
import {Post} from './Post';

function App() {

  return (
    <>
     <Header />
     <h1>Hello World</h1>
      <Post 
      author="Daniel" 
      content="fjsdnflkdjsnflkjdnflkdsjn" />
    </>
   )
}

export default App
