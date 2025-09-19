import "./CreateTogether.css"
import Header from "./header"
import Paragraph from "./paragraph"
import Button from "./button.jsx"

function CreateTogether () {
    return (
        <div className="container">
        <Header/>
        <Paragraph/>
        <Button text="send email"/>
        <Button text="book a call"/>
        
        </div>
    )
    
}
export default CreateTogether
