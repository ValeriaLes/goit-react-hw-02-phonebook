import { Wrapper } from "./ContactList.styled"

export const ContactList = ({contacts, onDelete}) => {

    const elements = contacts.map((contact) => 
    <Wrapper key={contact.id}>
        <li>{contact.name} {contact.number}</li>
    <button type="button" onClick={()=>onDelete(contact.id)}>Delete</button>
    </Wrapper>
    )
    return (
        <ul>
            {elements}
        </ul>
    )
}