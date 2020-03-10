import { useState, useCallback } from 'react'

// export default class Toggle extends Component {



//   toggle = () => {
//     this.setState({
//       on: !this.state.on
//     })
//   }

//   render() {
//     const { children } = this.props
//     return children({
//       on: this.state.on,
//       toggle: this.toggle
//     })
//   }
// }



const Toggle = ({ children }) => {
  const [on, setOn] = useState(false)
  const toggle = useCallback(() => { setOn(!on) }, [on])
  const toggleOn = useCallback(() => { setOn(true) }, [])
  const toggleOff = useCallback(() => { setOn(false) }, [])

  return children({
    on, toggle, toggleOn, toggleOff
  })
}

export default Toggle
