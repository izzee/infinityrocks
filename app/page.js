"use client"

import { useState} from 'react';

import Projects from '@/data/projects.json'

import Nav from '@/components/Nav.js'
import Title from '@/components/Title.js'
import Section from '@/components/Section.js'

import styles from '@/styles/components/Main.module.scss'

const Home = () => {

  const [navCollapsed, setNavCollapsed] = useState(false)

  const toggleExpand = () => {
    setNavCollapsed(!navCollapsed)
  }

  return (
    <main className={styles.main}> 
    
      <Nav collapsed={navCollapsed} />
      <div className={styles.content}>
        <Title collapsed={navCollapsed}/>
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
                        toggleExpand={toggleExpand}
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
