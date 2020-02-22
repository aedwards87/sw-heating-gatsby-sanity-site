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
  const [on, setOn] = useState(false)
  const toggle = () => setOn(!on)

  return children({
    on, toggle
  })
}

export default Toggle
