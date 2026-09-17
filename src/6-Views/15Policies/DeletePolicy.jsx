import React from 'react'
import Navigation from '../../2-Components/Navigation/Navigation'
import Footer from '../../2-Components/Footer/Footer'
import Buttons from '../../2-Components/Buttons/Buttons'
import { useNavigate } from 'react-router-dom'

const DeletePolicy = () => {
  let navigate = useNavigate()
  return (
    <div className='relative px-0 w-full h-full bg-secondary-800 overflow-x-hidden select-none'>
      <Navigation />

      <div className="flex flex-col w-full h-full gap-0 space-0">
        <div className="min-h-[60vh] h-full lg:min-h-screen flex flex-col bg-[#141118] items-center justify-center px-[30px] py-16 sm:px-16 md:py-16 lg:py-16 w-screen overflow-hidden relative max-w-[1020px]">
          <div className="w-full h-full flex flex-col lg:flex-col mt-16 lg:mt-[60px] justify-between items-center md:px-[5%] md:mt-[60px] py-0 gap-10">
            {/** Title */}
            <div className="flex flex-col gap-4">
              <h1 className="text-xl text-left md:text-4xl lg:text-5xl text-[#F2F2F2] font-bold capitalize font-[Inter-Bold]">Nyatiflix App Delete Account</h1>

              <p className="text-xs md:text-base lg:text-lg font-[Inter-Regular] text-[#fffaf6] text-opacity-70 text-justify">Thank you for using Nyatiflix, the on-demand streaming service brought to you by Nyati Motion Pictures. We understand that users may need to delete their accounts, and we are committed to providing a clear and straightforward process for handling account deletion requests. Below, we’ve outlined the steps required to delete your account and what happens to your data when this action is completed.</p>
            </div>

            {/** How to Delete */}
            <div className="flex flex-col gap-4 w-full pb-4 border-b border-b-[#5A575B] border-opacity-70">
              <h1 className="text-xl text-left md:text-2xl lg:text-3xl text-[#F2F2F2] font-bold capitalize font-[Inter-Bold]">How to Delete Your Nyatiflix Account</h1>

              <div className='flex flex-col gap-3'>
                <p className="text-xs md:text-base lg:text-lg font-[Inter-Regular] text-[#fffaf6] text-opacity-70">To delete your Nyatiflix account, please follow these steps:</p>

                <ol className="list-decimal text-xs md:text-base lg:text-lg font-[Inter-Regular] text-[#fffaf6] text-opacity-70 list-inside indent-8 flex flex-col gap-1">
                  <li>Log into your Nyatiflix account</li>
                  <li>Go to Account Settings in your profile menu.</li>
                  <li>Select Change Password. Here, you will see the &quot;Delete Account&quot; option</li>
                  <li>Click on the &quot;Delete Account&quot; button and carefully read through the instructions provided.</li>
                  <li>Confirm Account Deletion.</li>
                </ol>

                <p className="text-xs md:text-base lg:text-lg font-[Inter-Regular] text-[#fffaf6] text-opacity-70">Once you confirm, your account and related data will be scheduled for deletion. Please note that this action is permanent and cannot be undone.</p>
              </div>
            </div>

            {/** Data Rentention */}
            <div className="flex flex-col gap-4 w-full pb-4 border-b border-b-[#5A575B] border-opacity-70">
              <h1 className="text-xl text-left md:text-2xl lg:text-3xl text-[#F2F2F2] font-bold capitalize font-[Inter-Bold]">Data Deletion and Retention</h1>

              <div className='flex flex-col gap-3'>
                <p className="text-xs md:text-base lg:text-lg font-[Inter-Regular] text-[#fffaf6] text-opacity-70">Upon confirming the deletion of your Nyatiflix account, the following data will be permanently removed from our systems:</p>

                <ul className="list-disc text-xs md:text-base lg:text-lg font-[Inter-Regular] text-[#fffaf6] text-opacity-70 list-inside indent-8 flex flex-col gap-1">
                  <li>Username</li>
                  <li>Email & Password</li>
                  <li>Watch History</li>
                  <li>Rented Videos</li>
                  
                </ul>

                <p className="text-xs md:text-base lg:text-lg font-[Inter-Regular] text-[#fffaf6] text-opacity-70">Please be aware that once deleted, this data cannot be recovered.</p>
              </div>

              <div className='flex flex-col gap-3'>
                
                <p className="text-xs md:text-base lg:text-lg font-[Inter-Regular] text-[#fffaf6] text-opacity-70"><span className="tracking-wide font-[Inter-SemiBold]">Retained Data</span> <br />To comply with legal and financial record-keeping requirements, Nyatiflix will retain the following information for a specified period after account deletion:</p>

                <ul className="list-disc text-xs md:text-base lg:text-lg font-[Inter-Regular] text-[#fffaf6] text-opacity-70 list-inside indent-8 flex flex-col gap-1">
                  <li>Payment History (for billing purposes)</li>
                  <li>Phone Number linked to Mobile Payments</li>
                

                </ul>

                <p className="text-xs md:text-base lg:text-lg font-[Inter-Regular] text-[#fffaf6] text-opacity-70">This data will be stored securely and will only be accessed for purposes required by law or for any remaining financial transactions.</p>
              </div>
            </div>

            {/** Support */}
            <div className="flex flex-col gap-4 w-full pb-4 ">
              <div className='flex flex-col gap-3'>
                <p className="text-xs md:text-base lg:text-lg font-[Inter-Regular] text-[#fffaf6] text-opacity-70">Should you have any questions or concerns regarding your data or account deletion process, please contact us at support@nyatimotionpictures.com. We are here to help.</p>
              </div>

              <div className="flex flex-col gap-4 w-full pt-4 ">
                <p className="text-xs md:text-base lg:text-lg font-[Inter-SemiBold] text-[#fffaf6] text-opacity-70">Other Links</p>

                <div className="flex flex-col sm:flex-row gap-5">
                  <Buttons className='w-max text-primary-500 bg-[#1A171E] rounded-md min-w-[150px] px-6 py-3 italic font-[Inter-Bold] tracking-wider text-xs  sm:text-sm md:text-base' onClick={() => navigate("/policies/privacypolicy")} >PRIVACY POLICY</Buttons>
                  <Buttons className='w-max text-primary-500 bg-[#1A171E] rounded-md min-w-[150px] px-6 py-3 italic font-[Inter-Bold] tracking-wider text-xs  sm:text-sm md:text-base' onClick={() => navigate("/policies/termsofservice")}>TERMS OF SERVICE</Buttons>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default DeletePolicy