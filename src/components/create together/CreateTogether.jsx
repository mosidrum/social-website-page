import './CreateTogether.css'
import Header from './header.jsx'
import Paragraph from './paragraph.jsx'
import Button from './button.jsx'

function CreateTogether() {
  return (
    <div className="containerA">
      <Header />
      <Paragraph />
      <div className="btn-box">
        <Button
          text="send email"
          classname="btn-one"
          fontClass="fa-regular fa-envelope"
        />
        <Button
          text="book a call"
          classname="btn-two"
          fontClass="fa-regular fa-calendar"
        />
      </div>
    </div>
  )
}
export default CreateTogether
