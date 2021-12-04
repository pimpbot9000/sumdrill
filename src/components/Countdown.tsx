import React, { useEffect, useState } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

type Props = {
  onTimeout: () => void
}

const Countdown = React.forwardRef(({ onTimeout }: Props, ref) => {
  const [time, setTime] = useState(100)
  const [pause, setPause] = useState(true)

  const resetTime = () => {
    setTime(100)
    pauseTimer()
  }

  const pauseGame = () => {
    setPause(true)
  }


  React.useImperativeHandle(ref, () => {
    return {
      resetTime,
      startGame,
      pauseGame

    }

  })

  const startGame =() => {
    resetTime()
  }

  const pauseTimer = () => {
    setPause(true)
    setTimeout(() => {
      setPause(false)
    }
      , 1000)
  }

  useEffect(() => {

    const timeOut = setTimeout(() => {
      if (time <= 0) {
        setTime(100)
        onTimeout()
        pauseTimer()
      } else {
        if (!pause) setTime(time - 1)
      }
    }, 100);
    return () => clearTimeout(timeOut)
  })

  return <ProgressBar now={time} label={`${time}%`} />
})

export default Countdown