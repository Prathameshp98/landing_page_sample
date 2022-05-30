import React, {useState} from 'react';


function HomePage() {

    const [contact, setContact] = useState({
        Name: "",
        Email: "",
        Phone: "",
        Comment: ""

    });
    
    function handleChange(event) {
        const { name, value } = event.target;
    
        setContact(prev => {
            if (name === "Name") {
                return {
                    Name: value,
                    Email: prev.Email,
                    Phone: prev.Phone,
                    Comment: prev.Comment
                };
            } else if (name === "Email") {
                return {
                    Name: prev.Name,
                    Email: value,
                    Phone: prev.Phone,
                    Comment: prev.Comment
                };
            } else if (name === "Phone") {
                return {
                    Name: prev.Name,
                    Email: prev.Email,
                    Phone: value,
                    Comment: prev.Comment
                };
            } else if (name === "Comment") {
                return {
                    Name: prev.Name,
                    Email: prev.Email,
                    Phone: prev.Phone,
                    Comment: value
                };
            }
        });
        
    }


    function handleSubmit(event) {
        console.log(JSON.stringify({data:contact}));
        // event.preventDefault();

        try {
            fetch('http://localhost:1337/api/forms', {
                method: 'POST',
                headers: {
                     "Content-Type": "application/json"
                    },
                body: JSON.stringify({data:contact}),  
            })
        } 
        catch (error) {
            console.log("Opps something went wrong.");
        }
    }


    return (

        <div className="contact-us">
            <form id="landing" action="#" onSubmit={handleSubmit}>
                <label>NAME <em>&#x2a;</em></label>
                <input 
                    id="Name" 
                    name="Name" 
                    required="" 
                    type="text"
                    onChange={handleChange} 
                    value={contact.Name}
                    />

                <label>EMAIL <em>&#x2a;</em></label>
                <input 
                    id="Email" 
                    name="Email" 
                    required="" 
                    type="email" 
                    onChange={handleChange}
                    value={contact.Email}
                    />
                
                <label>PHONE <em>&#x2a;</em></label>
                <input 
                    id="Phone" 
                    name="Phone" 
                    required="" 
                    pattern="[0-9]{3}[0-9]{3}[0-9]{4}" 
                    type="tel" 
                    onChange={handleChange}
                    value={contact.Phone}
                    />
                
                <label>YOUR COMMENTS </label>
                <textarea 
                    id="Comment" 
                    name="Comment" 
                    rows="4"
                    onChange={handleChange}
                    value={contact.Comment}
                    >
                </textarea>

                <h3>Please provide all the information and mention your query.</h3>

                <input type="submit" value="submit"></input>

            </form>
        </div>
    );

}
    
export default HomePage;
