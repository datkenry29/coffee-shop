"use client";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Password} from "@/components/shared/common/password";
import {useState} from "react";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const {id, value} = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const signIn = () => {
    console.log(formData);
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Coffee Shop</h1>
          <span className="text-gray-500">Sign in to continue</span>
        </div>
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="username" className="text-gray-700">
              Username
            </Label>
            <Input
              id="username"
              type="text"
              placeholder="Username"
              className="w-full"
              onChange={handleInputChange}
              value={formData.username}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-700">
              Password
            </Label>
            <Password
              id="password"
              name="password"
              placeholder="Password"
              className="w-full"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <Button type="button" className="w-full" onClick={signIn}>
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
}
