// const { password } = require('pg/lib/defaults');
const pool = require('./db.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
exports.signIn = async (username, password)=>{ //for login
    try {
        
        const query = {
            text: 'SELECT * FROM login WHERE  username = $1;',
            values: [username]
        }
        const result = await pool.query(query);
        if (result.rows.length === 0) { // Check if user exists
            return res.status(404).json('User not found');
        }
        const user = result.rows[0];
    
        const passwordValid = await bcrypt.compare(password, user.password);
        if(!passwordValid){
            return res.status(404).json('Incorrect email and password combination');
        }
        const token = jwt.sign({userid: user.id, username: user.username}, 'mehedi', {expiresIn: '1h'});
        return token;
    } catch (error) {
        throw new Error('Issues signing in') 
    }
}

exports.signUp = async (username, password)=>{  //for logout
    try {
        password = await bcrypt.hash(password, 15);
        const query = {
            text: 'INSERT INTO login (username , password) VALUES  ($1, $2);',
            values: [username, password]
        }
        await pool.query(query);
    } catch (error) {
        throw new Error('Issus signing up') 
    }
}