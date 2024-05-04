class MailService {
    constructor(sender) {
        this.sender = sender
    }
    sendMessage(message, receiver) {
        return console.log(`${this.sender} mengirim pesan "${message}" untuk ${receiver}`)
    }
}

class WhatsappService extends MailService {
    constructor(sender, isBusiness) {
        super(sender)
        this.isBusiness = isBusiness
    }

    sendMessageBroadcast(message, recievers) {
        for (const reciever of recievers) {
            return this.sendMessage(message, reciever)
        }
    }

    checkAccount() {
        if (this.isBusiness === true) return console.log(`${this.sender} menggunakan akun bisnis`)
        if (this.isBusiness === false) return console.log(`${this.sender} tidak menggunakan akun bisnis`)
    }
}

let whatsapp = new WhatsappService("085870388515", true)
console.log(whatsapp)
whatsapp.sendMessageBroadcast("Hello Kamu", ['08123456789', '0876543210'])
whatsapp.checkAccount()