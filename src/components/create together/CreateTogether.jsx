import './CreateTogether.css'
import Header from './header.jsx'
import Paragraph from './paragraph.jsx'
import Button from './button.jsx'

function CreateTogether() {
  return (
    <div className="containerA">
      <Header />
      <Paragraph />
      <Button text="send email" classname="btn-one" />
      <Button text="book a call" classname="btn-two" />
    </div>
  )
}
export default CreateTogether
