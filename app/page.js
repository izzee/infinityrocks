import Nav from '@/components/Nav.js'
import Title from '@/components/Title.js'
import Section from '@/components/Section.js'

import styles from '@/styles/components/Main.module.scss'

import Projects from '@/data/projects.json'

const Home = () => {
  return (
    <main className={styles.main}> 
    
      <Nav/>
      <div className={styles.content}>
        <Title/>
        {
          Projects.map((project, index) => {
            return (
              <Section
                key={project.key}
                data={project}
              />
            )
          })
        }
      </div>
    </main>
  )
}

export default Home;
