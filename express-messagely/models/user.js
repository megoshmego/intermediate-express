const db = require('../db');
const bcrypt = require('bcrypt');
const BCRYPT_WORK_FACTOR = 10;  // adjust this as needed

class User {
  
  static async register({ username, password, first_name, last_name, phone }) {
    if (await User.userExists(username)) {
      throw new Error(`User with username ${username} already exists`);
    }

    const hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);

    const result = await db.query(
      `INSERT INTO users (username, password, first_name, last_name, phone)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING username, password, first_name, last_name, phone`,
      [username, hashedPassword, first_name, last_name, phone]
    );

    return result.rows[0];
  }

  static async userExists(username) {
    const result = await db.query(
      `SELECT username
       FROM users
       WHERE username = $1`,
      [username]
    );

    return result.rows.length > 0;
  }

  static async authenticate(username, password) {
    const result = await db.query(
      `SELECT password
       FROM users
       WHERE username = $1`,
      [username]
    );

    const user = result.rows[0];

    if (user) {
      if (await bcrypt.compare(password, user.password)) {
        return true;
      }
    }
    
    return false;
  }

  static async updateLoginTimestamp(username) {
    const result = await db.query(
      `UPDATE users
       SET last_login_at = current_timestamp
       WHERE username = $1
       RETURNING username`,
      [username]
    );

    if (!result.rows[0]) {
      throw new Error(`No such user: ${username}`);
    }
  }

  static async all() {
    const result = await db.query(
      `SELECT username, first_name, last_name, phone
       FROM users`
    );

    return result.rows;
  }

  static async get(username) {
    const result = await db.query(
      `SELECT username, first_name, last_name, phone, join_at, last_login_at
       FROM users
       WHERE username = $1`,
      [username]
    );

    if (!result.rows[0]) {
      throw new Error(`No such user: ${username}`);
    }

    return result.rows[0];
  }


  // User.js

  ...

  static async messagesFrom(username) {
    const result = await db.query(
      `SELECT m.id,
                m.to_username,
                t.first_name AS to_first_name,
                t.last_name AS to_last_name,
                t.phone AS to_phone,
                m.body,
                m.sent_at,
                m.read_at
          FROM messages AS m
            JOIN users AS t ON m.to_username = t.username
          WHERE m.from_username = $1`,
        [username]
    );

    return result.rows;
  }

  static async messagesTo(username) {
    const result = await db.query(
      `SELECT m.id,
                m.from_username,
                f.first_name AS from_first_name,
                f.last_name AS from_last_name,
                f.phone AS from_phone,
                m.body,
                m.sent_at,
                m.read_at
          FROM messages AS m
            JOIN users AS f ON m.from_username = f.username
          WHERE m.to_username = $1`,
        [username]
    );

    return result.rows;
  }

  ...

  // Implement methods `messagesFrom` and `messagesTo` based on your application requirements.
}

module.exports = User;
