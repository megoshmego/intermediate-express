import { query, end } from "../db";
import { register, authenticate, get, updateLoginTimestamp, all, messagesFrom, messagesTo } from "../models/user";
import { create } from "../models/message";


describe("Test User class", function () {
  beforeEach(async function () {
    await query("DELETE FROM messages");
    await query("DELETE FROM users");
    let u = await register({
      username: "test",
      password: "password",
      first_name: "Test",
      last_name: "Testy",
      phone: "+14155550000",
    });
  });

  test("can register", async function () {
    let u = await register({
      username: "joel",
      password: "password",
      first_name: "Joel",
      last_name: "Burton",
      phone: "+14155551212",
    });

    expect(u.username).toBe("joel");
    expect(u.password).not.toBe(undefined);
  });

  test("can authenticate", async function () {
    let isValid = await authenticate("test", "password");
    expect(isValid).toBeTruthy();

    isValid =  await authenticate("test", "xxx");
    expect(isValid).toBeFalsy();
  });


  test("can update login timestamp", async function () {
    await query("UPDATE users SET last_login_at=NULL WHERE username='test'");
    let u = await get("test");
    expect(u.last_login_at).toBe(null);

    updateLoginTimestamp("test");
    let u2 = await get("test");
    expect(u2.last_login_at).not.toBe(null);
  });

  test("can get", async function () {
    let u = await get("test");
    expect(u).toEqual({
      username: "test",
      first_name: "Test",
      last_name: "Testy",
      phone: "+14155550000",
      last_login_at: expect.any(Date),
      join_at: expect.any(Date),
    });
  });

  test("can get all", async function () {
    let u = await all();
    expect(u).toEqual([{
      username: "test",
      first_name: "Test",
      last_name: "Testy",
      phone: "+14155550000"
    }]);
  });
});

describe("Test messages part of User class", function () {
  beforeEach(async function () {
    await query("DELETE FROM messages");
    await query("DELETE FROM users");
    await query("ALTER SEQUENCE messages_id_seq RESTART WITH 1");

    let u1 = await register({
      username: "test1",
      password: "password",
      first_name: "Test1",
      last_name: "Testy1",
      phone: "+14155550000",
    });
    let u2 = await register({
      username: "test2",
      password: "password",
      first_name: "Test2",
      last_name: "Testy2",
      phone: "+14155552222",
    });
    let m1 = await create({
      from_username: "test1",
      to_username: "test2",
      body: "u1-to-u2"
    });
    let m2 = await create({
      from_username: "test2",
      to_username: "test1",
      body: "u2-to-u1"
    });
  });

  test('can get messages from user', async function () {
    let m = await messagesFrom("test1");
    expect(m).toEqual([{
      id: expect.any(Number),
      body: "u1-to-u2",
      sent_at: expect.any(Date),
      read_at: null,
      to_user: {
        username: "test2",
        first_name: "Test2",
        last_name: "Testy2",
        phone: "+14155552222",
      }
    }]);
  });

  test('can get messages to user', async function () {
    let m = await messagesTo("test1");
    expect(m).toEqual([{
      id: expect.any(Number),
      body: "u2-to-u1",
      sent_at: expect.any(Date),
      read_at: null,
      from_user: {
        username: "test2",
        first_name: "Test2",
        last_name: "Testy2",
        phone: "+14155552222",
      }
    }]);
  });
});



afterAll(() => {
    return end();
  });
  
