const fs = require('fs')

class Account {
    static loadAccounts() {
        const data = fs.readFileSync('accounts.json', 'utf-8');
        const jsonData = JSON.parse(data);

        return jsonData;

    }

    static findAccount(email) {
        const accounts = this.loadAccounts();
        
        return accounts.hasOwnProperty(email);

    }

    static getAccount(token) {
        // get the account from the token provided
        const accounts = this.loadAccounts();
        
        for(let i = 0; i < Object.keys(accounts).length; i++) {
            if(accounts[Object.keys(accounts)[i]]['token'] == token) {
                return accounts[Object.keys(accounts)[i]];
            }
        }

        return null;
    }

    static createAccount(email, password, admin = false, state, zip, address, name, city) {
        const accounts = this.loadAccounts();

        const accountData = {
            token: genToken(),
            cart: [],
            password: password,
            admin: admin,
            state: state,
            zip: zip,
            address: address,
            name: name,
            city: city,
        }

        accounts[email] = accountData;

        fs.writeFileSync('accounts.json', JSON.stringify(accounts), 'utf-8');
    }

}

const genToken = () => {
    let token = '';
    let lowercase = 'abcdefgkllmnopqrszxyw';
    let uppercase = 'ABCDEFGHJKLMNPQRSZXYW';
    let template = "xxxxxxxx.XXXxxXxX.XXXXxxxxxxx.xxxxXXxxXXxxxxXx"
    for(let i = 0; i < template.length; i++) {
        if(template[i] == 'x') {
            if(Math.random() > 0.5) {
                token += lowercase[Math.floor(Math.random() * lowercase.length)];
            } else {
                token += uppercase[Math.floor(Math.random() * uppercase.length)];
            }
        } else if(template[i] == 'X') {
            if(Math.random() > 0.5) {
                token += uppercase[Math.floor(Math.random() * uppercase.length)];
            } else {
                token += lowercase[Math.floor(Math.random() * lowercase.length)];
            }
        } else {
            token += template[i];
        }
        
    }


    return token;
};

module.exports = Account;