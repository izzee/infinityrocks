import Projects from '@/data/projects.json'

import Nav from '@/components/Nav.js'
import Title from '@/components/Title.js'
import Section from '@/components/Section.js'

import styles from '@/styles/components/Main.module.scss'

const Home = () => {


  return (
    <main className={styles.main}> 
    
      <Nav />
      <div className={styles.content}>
        <Title/>
        {
          Projects.map((year, index) => {
            return (
              <div
                className={styles.wrapper}
                key={index}
                id={year.year}
              >
                {
                  year.projects.map((project, index) => {
                    return (
                      <Section
                        key={index}
                        data={project}
                      />
                    )
                  })
                }
              </div>
            )
          })
        }
      </div>
    </main>
  )
}

export default Home;
