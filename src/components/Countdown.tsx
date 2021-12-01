import React, {useEffect, useState} from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

type Props = {
  onTimeout: () => void  
}

const Countdown = React.forwardRef(({ onTimeout }: Props, ref) => {
    const [time, setTime] = useState(100)
  
    const resetTime = () => {
      setTime(100)
    }
  
    React.useImperativeHandle(ref, () => {
      return {
        resetTime
      }
    })
  
    useEffect(() => {
  
      const timeOut = setTimeout(() => {
        if (time <= 0) {
          setTime(100)
          onTimeout()
        } else {
          setTime(time - 1)
        }
      }, 100);
      return () => clearTimeout(timeOut)
    })
  
    return <ProgressBar now={time} label={`${time}%`} />
})

export default Countdown