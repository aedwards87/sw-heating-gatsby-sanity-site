import { useState } from 'react'

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
  const [isOn, setOn] = useState(false)
  const toggle = () => setOn(!isOn)

  return children({
    isOn, toggle, setOn
  })
}

export default Toggle
