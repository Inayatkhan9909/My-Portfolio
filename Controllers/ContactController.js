const Contact = require("../Models/ContactModel");
const transporter = require("../utils/Nodemailer");
require("dotenv").config();

const ContactController = async(req,res) =>{
    try {
      
        const {name,email,message}= req.body;
               console.log(name)
               console.log(email)
               console.log(message)
          const newMessage = await new Contact({name,email,message});
          const done = await newMessage.save();

          if(done)
            {
                const sendmail = await transporter.sendMail({
                    from: process.env.MY_EMAIL,
                    to: process.env.MY_EMAIL,
                    subject: `sender's email : ${email}`,
                    name:`${name}`,
                    text: `${message}`,
                    replyTo:`${email}`
                });
        
        
                if (sendmail) {
                    res.render('contact', { message: "Message sent succesfully" });
        
                } else {
                    res.render('contact', { message: "Message not sent" });
                }
            }
            else
            {
                res.render('contact', { message: "Message not sent" });
            }

    }
     catch (error) {
        console.log(error);
        res.render('contact', { message: "Something went wrong" });
    }
}

module.exports = ContactController