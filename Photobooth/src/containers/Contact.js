import React from "react";
import Hero from "./../components/Hero";
import ContactForm from "./../components/ContactForm";
import { Grid } from "react-bootstrap";

import NavBar from "./../components/NavBar";
import Footer from "./../components/Footer";

class Contact extends React.Component {
    state = {
        name: '',
        phone: '',
        email: '',
        comments: ''
    }
    inputChange = e =>{
        const inputID = e.target.name;
        let value = e.target.value;

        this.setState({
            [inputID]: value
        })
    }
    sendMail = async() => {
        console.log("Sending Mail");
        const user = await fetch("API/contact", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            method: "POST",
            credentials: "include",
            body: JSON.stringify({
                name: this.state.name,
                phone: this.state.phone,
                email: this.state.email,
                comments: this.state.comments
            })
        }).then(res => res.json());

        console.log(user);
    }
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Grid fluid>
                    <Hero title={"Contactenos"} />
                    <ContactForm 
                        sendMail={this.sendMail} 
                        inputChange={this.inputChange}
                        name={this.state.name}
                        phone={this.state.phone}
                        mail={this.state.mail}
                        comments={this.state.comments} />
                </Grid>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Contact;
