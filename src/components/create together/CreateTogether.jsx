import "./CreateTogether.css"
import Header from "./header"
import Paragraph from "./paragraph"
import Button from "./button.jsx"

function CreateTogether () {
    return (
        <div className="container">
        <Header/>
        <Paragraph/>
        <Button text="send email" classname="btn-one"/>
        <Button text="book a call" classname = "btn-two"/>
        
        </div>
    )
    
}
export default CreateTogether
