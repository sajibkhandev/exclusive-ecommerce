import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Button from '../components/Button'

// icons (use your image paths)
import CallIcon from '../assets/icons-phone.png'
import MailIcon from '../assets/icons-mail.png'

const Contact = () => {
  return (
    <section className="py-[100px]">
      <Container>

        <Flex className="gap-10">

          {/* LEFT SIDE INFO */}
          <div className="w-1/3 space-y-6">

            {/* Call Box */}
            <div className="p-6 shadow-md border border-gray-100 rounded-md">
              <Flex className="items-center gap-3 mb-3">
                <img src={CallIcon} alt="call" className="w-6 h-6" />
                <h3 className="font-semibold text-lg">Call To Us</h3>
              </Flex>

              <p className="text-gray-500 text-sm">
                We are available 24/7, 7 days a week.
              </p>

              <p className="mt-2 text-sm">
                Phone: +8801611112222
              </p>
            </div>

            {/* Email Box */}
            <div className="p-6 shadow-md border border-gray-100 rounded-md">
              <Flex className="items-center gap-3 mb-3">
                <img src={MailIcon} alt="mail" className="w-6 h-6" />
                <h3 className="font-semibold text-lg">Write To Us</h3>
              </Flex>

              <p className="text-gray-500 text-sm">
                Fill out our form and we will contact you within 24 hours.
              </p>

              <p className="mt-2 text-sm">
                Email: customer@exclusive.com
              </p>
              <p className="text-sm">
                Email: support@exclusive.com
              </p>
            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <div className="w-2/3 p-10 shadow-md border border-gray-100 rounded-md">

            <Flex className="gap-4 mb-4">

              <input
                type="text"
                placeholder="Your Name *"
                className="w-1/3 border border-gray-200 px-4 py-2 outline-none"
              />

              <input
                type="email"
                placeholder="Your Email *"
                className="w-1/3 border border-gray-200 px-4 py-2 outline-none"
              />

              <input
                type="text"
                placeholder="Your Phone *"
                className="w-1/3 border border-gray-200 px-4 py-2 outline-none"
              />

            </Flex>

            <textarea
              rows="8"
              placeholder="Your Message"
              className="w-full border border-gray-200 px-4 py-3 outline-none mb-6"
            />

            <div className="flex justify-end">
              <Button text="Send Message" />
            </div>

          </div>

        </Flex>

      </Container>
    </section>
  )
}

export default Contact

