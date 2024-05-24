const Contact = require("../Models/ContactModel");
const transporter = require("../utils/Nodemailer");

const ContactController = async(req,res) =>{
    try {
        console.log("hoojo")
        const {name,email,message}= req.body;
               console.log(name)
               console.log(email)
               console.log(message)
          const newMessage = await new Contact({name,email,message});
          const done = await newMessage.save();

          if(done)
            {
                const sendmail = await transporter.sendMail({
                    from: "rteja1230@gmail.com",
                    to: `${email}`,
                    subject: "change password",
                    text: "link ym gholia",
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