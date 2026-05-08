import React from 'react'
import Container from '../components/Container'
import Button from '../components/Button'
import Flex from '../components/Flex'
import CategoryHeading from '../components/CategoryHeading'
import CategoryText from '../components/CategoryText'
import AccountInputFiled from '../components/AccountInputFiled'

const Account = () => {
  return (
    <section className='pt-20 pb-[140px]'>
      <Container>
        <Flex className={`justify-between pb-20`}>
          <p>Home / My Account</p>
          <p className='text-sm text-[#000000] font-pop font-normal'>Welcome! <span className='text-secondary'>Md Rimel</span></p>
        </Flex>

        <Flex>
          <div className='w-3/12'>
          <CategoryHeading title="Manage My Account"/>
         
          <Flex className='flex-col gap-y-2 pt-4 pl-9 pb-6'>
            <CategoryText text="My Profile"/>
            <CategoryText text="Address Book"/>
            <CategoryText text="My Payment Options"/>

          </Flex>
          <CategoryHeading title="My Orders"/>


          <Flex className='flex-col gap-y-2 pt-4 pl-9 pb-6'>
            <CategoryText text="My Returns"/>
            <CategoryText text="My Cancellations"/>

          </Flex>

          <CategoryHeading title="My WishList"/>

            
         
          
          </div>
          <div className='w-9/12 '>
             <div className='w-full py-10 px-20 bg-[#FFFFFF] shadow-lg rounded '>
              <CategoryHeading className="text-xl text-secondary pb-4" title="Edit Your Profile"/>

              <Flex className='flex-wrap justify-between gap-y-4'>
                <AccountInputFiled labaltext="First Name"   htmlForAndId="firstname" placeholder="Md" />
                <AccountInputFiled labaltext="Last Name"   htmlForAndId="lastname" placeholder="Rimel" />
                <AccountInputFiled labaltext="Email"   htmlForAndId="email" placeholder="rimel1111@gmail.com" />
                <AccountInputFiled labaltext="Address"   htmlForAndId="address" placeholder="Kingston, 5236, United   State" />
              </Flex>

              <AccountInputFiled labaltext="Password Changes" labalclassName="w-full mt-6"   htmlForAndId="current" placeholder="Current Passwod" />
              <AccountInputFiled  labalclassName="w-full mt-4"   htmlForAndId="firstname" placeholder="New Passwod" />
              <AccountInputFiled  labalclassName="w-full mt-4"   htmlForAndId="firstname" placeholder="Confirm New Passwod" />

              <Flex className='justify-end pt-6 gap-x-2'>
                <Button className='bg-transparent text-secondary' text="Cancel"/>
               <Button text="Save Changes"/>
              </Flex>



             </div>
          
          
          </div>
        </Flex>

      </Container>
    </section>
  )
}

export default Account