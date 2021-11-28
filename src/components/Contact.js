import React, {useState, useEffect} from 'react';
const {GoogleSpreadsheet} = require('google-spreadsheet');
const creds = require('../client_secret.json');
let doc = {}

const Contact = () => {
    
    const makeInitialCall = async () => {
        doc = new GoogleSpreadsheet ('1JzTwCbl_LcFOcTanSYOa8AkjAcxF6TbBkmqECbIs2a8')
        await doc.useServiceAccountAuth(creds)
        await doc.loadInfo()
        let rows=await doc.sheetsByIndex[0].getRows()
        console.log(rows)
    }

    useEffect(()=> {
        makeInitialCall()
    }, [])

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async () => {
        let newRow = {
            Name: name,
            Email: email,
            Message: message
        }

        let sheet = await doc.sheetsByIndex[0];
        sheet.addRow(newRow)
    }

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleMessageChange = (e) => {
        setMessage(e.target.value)
    }
    
    return (
        <div className="contactContainer">
            <div className="contact">
            <h1 className="title">Contact</h1>
            <div className="sectionSeparator"></div>
            
                <div className="contactDescription">Let's chat! I'm currently open to work, and would love to hear about new opportunities! Or just say hi! </div>
                <div><input className="contactName" value={name} onChange={handleNameChange} type='text' placeholder="Name" /></div>
                <div><input className="contactEmail" value={email} onChange={handleEmailChange} type='text' placeholder="Email" /></div>
                <div><textarea className="contactMessage" id="message" value={message} onChange={handleMessageChange} type='text' placeholder="Message" /></div>
                <input className="submitButton" onClick={handleSubmit} type='submit'/>
            </div>

        </div>
    );
};

export default Contact;