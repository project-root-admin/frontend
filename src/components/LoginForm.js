import React, { useState } from "react";
import Card from "./common/Card";
import Input from "./common/Input";
import Button from "./common/Button";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../graphql/mutation";
import storeData from "@utils/storeData";
const LoginForm = () => {
  const [login, { data, loading, error }] = useMutation(LOGIN);
  const [payload, setPayload] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = payload;
    await login({
      variables: {
        email: email,
        password: password,
      },
    })
      .then((result) => {

        console.log("User Successfully Logged In", result.data.login.token);
        storeData("token", result.data.login.token);
      })
      .catch((error) => {
        console.log("Unable to login", error.msg);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPayload({
      ...payload,
      [name]: value,
    });
  };
  return (
    <Card className="w-full h-auto grid grid-cols-2 bg-black" >
      <div className="w-full h-auto grid grid-cols-2">
        <div class="flex h-screen items-center justify-center bg-black">
          <div class="w-80 rounded bg-white p-8 shadow-md">
            <h2 class="mb-4 text-2xl font-semibold">Login</h2>
            <form onSubmit={handleSubmit}>
              <div class="mb-4">
                <label for="email" class="block font-medium text-gray-600">
                  Email Address
                </label>
                <Input
                  type="email"
                  name="email"
                  placeholder="Please Enter your Email"
                  className="w-full rounded-lg border px-4 py-2 focus:ring focus:ring-blue-200"
                  onChange={handleChange}
                />
              </div>
              <div class="mb-4">
                <label for="password" class="block font-medium text-gray-600">
                  Password
                </label>
                <Input
                  type="password"
                  name="password"
                  className="w-full rounded-lg border px-4 py-2 focus:ring focus:ring-blue-200"
                  placeholder="Please Enter your password"
                  onChange={handleChange}
                />
              </div>
              <Button
                className="w-full rounded-lg bg-blue-500 py-2 text-white transition duration-300 hover:bg-blue-600"
                text="Login"
              />
            </form>
            <p class="mt-4 text-gray-600">
              Don't have an account?{" "}
              <a href="#" class="text-blue-500 hover:underline">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default LoginForm
;
