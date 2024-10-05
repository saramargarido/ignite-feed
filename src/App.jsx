import { Header } from './components/Header'
import './global.css'
import styles from "./App.module.css"
import { Sidebar } from './components/Sidebar'

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
      <Sidebar />
      <main>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi necessitatibus sed dicta dolor veritatis saepe, expedita soluta nostrum ut mollitia earum, eius non quia a, nihil corrupti quos ratione voluptate?
      </main>  
      </div>  
    </div>
  )
}

