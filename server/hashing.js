import jwt from "jsonwebtoken";

const signed = jwt.sign("Hello World", "secret123");
console.log(signed);

const verify = jwt.verify(signed, "secret123");
console.log(verify);