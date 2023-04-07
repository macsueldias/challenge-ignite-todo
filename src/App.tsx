import './global.css'
import { Header } from './components/header'
import { FormAddTask } from './components/formAddTask'
import { Tasks } from './components/tasks'

function App() {
  return (
    <div className="App">
      <Header />
      <FormAddTask />
      <Tasks />
    </div>
  )
}

export default App
