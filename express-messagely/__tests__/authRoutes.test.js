 import request from "supertest";
 import { decode } from "jsonwebtoken";

 import app from "../app";
 import { register } from "../models/user";
 const router = require('express').Router();


 describe("Auth Routes Test", function () {

   beforeEach(async function () {
     await query("DELETE FROM messages");
     await query("DELETE FROM users");

     let u1 = await register({
       username: "test1",
       password: "password",
       first_name: "Test1",
       last_name: "Testy1",
       phone: "+14155550000",
     });
   });

   /** POST /auth/register => token  */

   describe("POST /auth/register", function () {
     test("can register", async function () {
       let response = await request(app)
         .post("/auth/register")
         .send({
           username: "bob",
           password: "secret",
           first_name: "Bob",
           last_name: "Smith",
           phone: "+14150000000"
         });

      let token = response.body.token;
       expect(decode(token)).toEqual({
         username: "bob",
         iat: expect.any(Number)
       });
     });
   });

   /** POST /auth/login => token  */

   describe("POST /auth/login", function () {
     test("can login", async function () {
       let response = await request(app)
         .post("/auth/login")
         .send({ username: "test1", password: "password" });

       let token = response.body.token;
       expect(decode(token)).toEqual({
         username: "test1",
         iat: expect.any(Number)
       });
     });

     test("won't login w/wrong password", async function () {
       let response = await request(app)
         .post("/auth/login")
         .send({ username: "test1", password: "WRONG" });
       expect(response.statusCode).toEqual(400);
     });

     test("won't login w/wrong password", async function () {
       let response = await request(app)
         .post("/auth/login")
         .send({ username: "not-user", password: "password" });
       expect(response.statusCode).toEqual(400);
     });
   });
 });


   import { query, end } from './db';

afterAll(() => {
     return end();
   });
   

