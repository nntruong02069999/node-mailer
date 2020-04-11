const nodemailer = require('nodemailer')
require('dotenv').config()
async function NodeMailer(req, res) {
   
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth : {
            user : process.env.username,
            pass : process.env.password
        }
    })
    
    const output = `
        <p>You have a new contact request</p>
        <h3>Contact details</h3>
        <ul>
            <li>Name : ${req.body.name}</li>
            <li>Company : ${req.body.company}</li>
            <li>Email : ${req.body.email}</li>
            <li>Phone : ${req.body.phone}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>
    `;
    // send mail with defined transport object
    let mailOptions = {
        from: '"Node mailer contact" <nntruong020699@gmail.com>', // sender address
        to: "anhtt@media-one.vn", // list of receivers
        subject: "Node Contact request", // Subject line
        text: "Hello world?", // plain text body
        html: output // html body
    };

    transporter.sendMail(mailOptions, (err,info) => {
        if(err)
            console.log(err)
        else
            console.log(info)
    })

}

module.exports = NodeMailer