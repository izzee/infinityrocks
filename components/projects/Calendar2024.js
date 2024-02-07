"use client"

import { useState, useRef, useEffect } from 'react';
import styles from '@/styles/projects/Calendar2024.module.scss'

const Calendar2024 = () => {
  const bgRef = useRef(null)
  const [frameIndex, setFrameIndex] = useState(1)
  const [loaded, setLoaded] = useState(false)
  const [horizontalCellCount, setHorizontalCellCount] = useState(0)
  const [verticalCellCount, setVerticalCellCount] = useState(0)

  useEffect(() => {
    function calculateCellCount(size) {
      return Math.floor(Math.floor(size / 80)  / 4)
    }
    function setCellCount(){
      setHorizontalCellCount(calculateCellCount(bgRef.current.clientWidth))
      setVerticalCellCount(calculateCellCount(bgRef.current.clientHeight))
    }
    setCellCount()
    setLoaded(true)
    window.addEventListener('resize', setCellCount)
    return () => {
      window.removeEventListener('resize', setCellCount);
    };
  }, [bgRef])

  useEffect(() => {
    const interval = setInterval(() => {
      setFrameIndex(frameIndex < 4 ? frameIndex + 1 : 1);
    }, 500);

    return () => clearInterval(interval);
}, [frameIndex]);

  const renderCells = (count) => {
    const cellCountArray = Array.from(Array(count).keys())
    return cellCountArray.map((cell, index) => (
      <div 
        key={index}
        className={styles.cellgroup}
      >
        <div className={styles.cell1}></div>
        <div className={styles.cell2}></div>
        <div className={styles.cell3}></div>
        <div className={styles.cell4}></div>
      </div>
      )
    )
    
  }

  const renderMarquee = () => {
    if (!!verticalCellCount && !!horizontalCellCount){
      return (
        <div className={styles[`frame${frameIndex}`]}>
          <div className={styles.marqueetop}>
            {renderCells(horizontalCellCount)} 
          </div>
          <div className={styles.marqueeright}>
            {renderCells(verticalCellCount)} 
          </div>
          <div className={styles.marqueebottom}>
            {renderCells(horizontalCellCount)} 
          </div>
          <div className={styles.marqueeleft}>
            {renderCells(verticalCellCount)} 
          </div>
        </div>
      )
    }
  }

  return (
    <>
      <div className={styles.bg} ref={bgRef} />
      <div className={styles[`${!loaded ? 'loading' : 'loaded'}`]}>
        <div className={styles.glowborder}/>
        {renderMarquee()}
        <div className={styles.cta}>
          <a  href='https://www.printedmatter.org/catalog/64288' target="_blank">BUY NOW</a>
          <div className={styles.altbg}></div>
        </div>

      </div>
    </>
  );
};

export default Calendar2024