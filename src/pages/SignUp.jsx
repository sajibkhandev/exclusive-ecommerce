import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Button from '../components/Button'
import LoginImage from '../assets/login.png'   // your image

const Signup = () => {
  return (
    <section className="py-[100px] bg-gray-200">
      <Container>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          
          <Flex>
            
            {/* LEFT IMAGE */}
            <div className="w-1/2">
              <img
                src={LoginImage}
                alt="signup"
                className="w-full h-full object-cover"
              />
            </div>

            {/* RIGHT FORM */}
            <div className="w-1/2 px-12 py-16">

              <h2 className="text-2xl font-semibold mb-2">
                Create an account
              </h2>
              <p className="text-gray-500 mb-6">
                Enter your details below
              </p>

              {/* Name */}
              <input
                type="text"
                placeholder="Name"
                className="w-full border-b border-gray-300 py-2 mb-4 outline-none"
              />

              {/* Email */}
              <input
                type="text"
                placeholder="Email or Phone Number"
                className="w-full border-b border-gray-300 py-2 mb-4 outline-none"
              />

              {/* Password */}
              <input
                type="password"
                placeholder="Password"
                className="w-full border-b border-gray-300 py-2 mb-6 outline-none"
              />

              {/* Create Account Button */}
              <div className="mb-4">
                <button className="w-full bg-red-500 text-white py-2 rounded">
                  Create Account
                </button>
              </div>

              {/* Google Button */}
              <div className="mb-4">
                <button className="w-full border border-gray-300 py-2 rounded flex items-center justify-center gap-2">
                  <img
                    
                    
                    className="w-5 h-5"
                  />
                 <h4>Sign up with Google </h4> 
                </button>
              </div>

              {/* Login Link */}
              <p className="text-center text-gray-500 text-sm">
                Already have account?{" "}
                <span className="text-black cursor-pointer">
                  Log in
                </span>
              </p>

            </div>

          </Flex>

        </div>

      </Container>
    </section>
  )
}

export default Signup