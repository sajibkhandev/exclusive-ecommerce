import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Button from '../components/Button'
import LoginImage from '../assets/login.png'   

const Login = () => {
  return (
    <section className="py-[100px] ">
      <Container>

        <div className=" overflow-hidden">
          
          <Flex>
            
            {/* LEFT IMAGE */}
            <div className="w-1/2">
              <img
                src={LoginImage}   
                alt="login"
                className="w-full h-full object-cover"
              />
            </div>

            {/* RIGHT FORM */}
            <div className="w-1/2 px-12 py-16">

              <h2 className="text-2xl font-semibold mb-2">
                Log in to Exclusive
              </h2>
              <p className="text-gray-500 mb-6">
                Enter your details below
              </p>

             


              <input
                type="text"
                placeholder="Email or Phone Number"
                className="w-full border-b border-gray-300 py-2 mb-4 outline-none"
              />

              

              <input
                type="password"
                placeholder="Password"
                className="w-full border-b border-gray-300 py-2 mb-6 outline-none"
              />

              

              <Flex className="justify-between items-center">
                <Button text="Log In" />
                <p className="text-red-500 text-sm cursor-pointer">
                  Forget Password?
                </p>
              </Flex>

            </div>

          </Flex>

        </div>

      </Container>
    </section>
  )
}

export default Login

