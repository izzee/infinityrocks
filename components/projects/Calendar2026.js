'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import styles from '@/styles/projects/Calendar2026.module.scss'

const Calendar2026 = () => {
  const daysLateRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      if (daysLateRef.current) {
        const randomNum = Math.floor(Math.random() * 10000000)
        daysLateRef.current.innerText = String(randomNum).padStart(7, '0')
      }
    }, 10)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <section className={styles.left}>
        <Image className={styles.lightning} src="/images/projects/calendar2026/lightning2.gif" alt="" width={100} height={100} unoptimized />
        <Image className={styles.lightning} src="/images/projects/calendar2026/lightning2.gif" alt="" width={100} height={100} unoptimized />
        <div className={styles.gradientCurtain}>
          <Image className={styles.lightning} src="/images/projects/calendar2026/lightning.gif" alt="" width={100} height={100} unoptimized />
          <Image className={styles.lightning} src="/images/projects/calendar2026/lightning.gif" alt="" width={100} height={100} unoptimized />
        </div>
      </section>

      <section className={styles.center}>
        <Image className={styles.lightning} src="/images/projects/calendar2026/lightning.gif" alt="" width={100} height={100} unoptimized />
        <Image className={styles.lightning} src="/images/projects/calendar2026/lightning.gif" alt="" width={100} height={100} unoptimized />

        <div className={styles.banner}>
          <div className={styles.fastLayer}>
            <marquee behavior="scroll" direction="left">2026</marquee>
            <marquee behavior="scroll" direction="right">calendar</marquee>
            <marquee behavior="scroll" direction="left">2026</marquee>
            <marquee behavior="scroll" direction="right">calendar</marquee>
          </div>
          <marquee behavior="scroll" direction="left">infinity8rocks</marquee>
          <marquee behavior="scroll" direction="right">infinity8rocks</marquee>
          <marquee behavior="scroll" direction="left">infinity8rocks</marquee>
          <marquee behavior="scroll" direction="right">infinity8rocks</marquee>
          <marquee behavior="scroll" direction="left">infinity8rocks</marquee>
          <marquee behavior="scroll" direction="right">infinity8rocks</marquee>
        </div>

        <div className={styles.banner}>
          <div className={styles.fastLayer}>
            <marquee behavior="scroll" direction="left">888888888888888888888888888888888888888888888888</marquee>
            <marquee behavior="scroll" direction="right">888888888888888888888888888888888888888888888888</marquee>
          </div>
          <marquee behavior="scroll" direction="left">infinity8rocks</marquee>
          <marquee behavior="scroll" direction="right">infinity8rocks</marquee>
          <marquee behavior="scroll" direction="left">infinity8rocks</marquee>
          <marquee behavior="scroll" direction="right">infinity8rocks</marquee>
          <marquee behavior="scroll" direction="left">infinity8rocks</marquee>
          <marquee behavior="scroll" direction="right">infinity8rocks</marquee>
        </div>

        <div className={styles.banner}>
          <div className={styles.fastLayer}>
            <marquee behavior="scroll" direction="left">888888888888888888888888888888888888888888888888</marquee>
            <marquee behavior="scroll" direction="right">888888888888888888888888888888888888888888888888</marquee>
          </div>
          <marquee behavior="scroll" direction="left">infinity8rocks</marquee>
          <marquee behavior="scroll" direction="right">infinity8rocks</marquee>
          <marquee behavior="scroll" direction="left">infinity8rocks</marquee>
          <marquee behavior="scroll" direction="right">infinity8rocks</marquee>
          <marquee behavior="scroll" direction="left">infinity8rocks</marquee>
          <marquee behavior="scroll" direction="right">infinity8rocks</marquee>
        </div>

        <div className={styles.banner}>
          <div className={styles.fastLayer}>
            <marquee behavior="scroll" direction="left">888888888888888888888888888888888888888888888888</marquee>
            <marquee behavior="scroll" direction="right">888888888888888888888888888888888888888888888888</marquee>
          </div>
          <marquee behavior="scroll" direction="left">infinity8rocks</marquee>
          <marquee behavior="scroll" direction="right">infinity8rocks</marquee>
          <marquee behavior="scroll" direction="left">infinity8rocks</marquee>
          <marquee behavior="scroll" direction="right">infinity8rocks</marquee>
          <marquee behavior="scroll" direction="left">infinity8rocks</marquee>
          <marquee behavior="scroll" direction="right">infinity8rocks</marquee>
        </div>

        <div className={styles.banner}>
          <div className={styles.fastLayer}>
            <marquee behavior="scroll" direction="left">888888888888888888888888888888888888888888888888</marquee>
            <marquee behavior="scroll" direction="right">888888888888888888888888888888888888888888888888</marquee>
          </div>
          <marquee behavior="scroll" direction="left">infinity8rocks</marquee>
          <marquee behavior="scroll" direction="right">infinity8rocks</marquee>
          <marquee behavior="scroll" direction="left">infinity8rocks</marquee>
          <marquee behavior="scroll" direction="right">infinity8rocks</marquee>
          <marquee behavior="scroll" direction="left">infinity8rocks</marquee>
          <marquee behavior="scroll" direction="right">infinity8rocks</marquee>
        </div>

        <div className={styles.clock}>
          <Image src="/images/projects/calendar2026/clock-base.png" className={styles.clockBase} alt="" width={200} height={200} />
          <Image src="/images/projects/calendar2026/clock-hand-1.png" className={styles.clockHand1} alt="" width={200} height={200} />
          <Image src="/images/projects/calendar2026/clock-hand-2.png" className={styles.clockHand2} alt="" width={200} height={200} />
        </div>


        <div className={styles.platform}></div>

        <div className={styles.lateBanner}>
          <p>DAYS <span ref={daysLateRef} className={styles.daysLate}>0</span> LATE</p>
        </div>
      </section>

      <section className={styles.right}>
        <Image className={styles.lightning} src="/images/projects/calendar2026/lightning2.gif" alt="" width={100} height={100} unoptimized />
        <Image className={styles.lightning} src="/images/projects/calendar2026/lightning2.gif" alt="" width={100} height={100} unoptimized />

        <div className={styles.gradientCurtain}>
          <Image className={styles.lightning} src="/images/projects/calendar2026/lightning.gif" alt="" width={100} height={100} unoptimized />
          <Image className={styles.lightning} src="/images/projects/calendar2026/lightning.gif" alt="" width={100} height={100} unoptimized />
        </div>
      </section>
    </>
  );
};

export default Calendar2026
