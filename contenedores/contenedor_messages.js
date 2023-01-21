const fs = require('fs');

class ContenedorMessage {
    constructor(filename) {
        this.filename = filename;
    }

    async save(message) {
        try {
            let content = await this.readFile();
            message.date = this.getDate();
            content.push(message);
            
            await this.writeFile(content);

            return message;
        } catch (error) {
            console.error(error);
        }
    }
    
    getAll() {
        try {
            return this.readFile();
        } catch (error) {
            console.error(error);
        }
    }
    
    async readFile() {
        try {
            return JSON.parse(await fs.promises.readFile(this.filename, 'utf-8'));
        } catch (error) {
            console.error(error);
        }
    }
    
    async writeFile(content) {
        try {
            await fs.promises.writeFile(this.filename, JSON.stringify(content));
        } catch (error) {
            console.error(error);
        }
    }

    getDate() {

        const day   = new Date().getDate();
        const month = new Date().getMonth() + 1;
        const year  = new Date().getFullYear();
        const time  = new Date().toLocaleTimeString()

        return `${day}/${month}/${year} ${time}`
    }
    
}

module.exports = ContenedorMessage;