import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navigation from '../../2-Components/Navigation/Navigation'
import Footer from '../../2-Components/Footer/Footer'
import Buttons from '../../2-Components/Buttons/Buttons'

const TermsOfService = () => {
  let navigate = useNavigate()
  return (
    <div className='relative px-0 w-full h-full bg-secondary-800 overflow-x-hidden select-none'>
      <Navigation />
      <div className="flex flex-col w-full h-full gap-0 space-0">
        <div className="min-h-[60vh] h-full lg:min-h-screen flex flex-col bg-[#141118] items-center justify-center px-[30px] py-16 sm:px-16 md:py-16 lg:py-16 w-screen overflow-hidden relative max-w-[1020px]">
          <div className="w-full h-full flex flex-col lg:flex-col mt-16 lg:mt-[60px] justify-between items-center md:px-[5%] md:mt-[60px] py-0 gap-10">
            {/** title */}
            <div className="flex flex-col gap-4">
              <h1 className="text-xl text-left md:text-4xl lg:text-5xl text-[#F2F2F2] font-bold capitalize font-[Inter-Bold]">Terms of Service</h1>

              <h2 className="text-xl text-left md:text-2xl lg:text-3xl text-[#F2F2F2] font-bold capitalize font-[Inter-SemiBold]">Effective Date:  14th November 2024</h2>
              <div className="flex flex-col gap-4">
                

                <p className="text-xs md:text-base lg:text-lg font-[Inter-Regular] text-[#fffaf6] text-opacity-70 text-justify">Welcome to the Nyati Motion Pictures (NMP) website. These Terms of Service (&quot;Terms&quot;) govern your access to and use of our website, mobile application, and related services (collectively referred to as &quot;NMP Services&quot;). By accessing or using NMP Services, you agree to comply with these Terms. If you do not agree to these Terms, please do not use NMP Services.</p>

              </div>

            </div>

            <div className='w-full flex flex-col'>
              <ol className="list-inside list-decimal flex flex-col gap-10 w-full">

                {/** Company Information */}
                <div className='flex flex-col gap-1 justify-start pb-4 border-b border-b-[#5A575B] border-opacity-70'>
                  <li className="text-xl text-left md:text-2xl lg:text-3xl text-[#F2F2F2] font-bold capitalize font-[Inter-Bold]">
                    Company Information
                  </li>

                  <div className="flex flex-col gap-3">
                    <h3 className=" text-base md:text-lg lg:text-xl font-[Inter-Bold] text-[#fffaf6] text-opacity-70">Nyati Motion Pictures (NMP)</h3>

                    <div className='flex flex-col gap-1'>
                    

                      <p className="text-xs md:text-base lg:text-lg font-[Inter-Regular] text-[#fffaf6] text-opacity-70">P.O. Box 74733, Wakiso, Uganda</p>
                      <p className="text-xs md:text-base lg:text-lg font-[Inter-Regular] text-[#fffaf6] text-opacity-70">Phone: +256 778 787 660</p>
                      <p className="text-xs md:text-base lg:text-lg font-[Inter-Regular] text-[#fffaf6] text-opacity-70">Email: info@nyatimotionpictures.com</p>
                    </div>
                    <p className="text-xs md:text-base lg:text-lg font-[Inter-Regular] text-[#fffaf6] text-opacity-70">Nyati Motion Pictures is a Ugandan film and video production company established in 2005 with a focus on the East African market.</p>

                  </div>

                
                </div>

                {/** Eligibility */}
                <div className='flex flex-col gap-4 justify-start pb-4 border-b border-b-[#5A575B] border-opacity-70 '>
                  <li className="text-xl text-left md:text-2xl lg:text-3xl text-[#F2F2F2] font-bold capitalize font-[Inter-Bold]">
                    Eligibility
                  </li>


                  <div className="flex flex-col gap-3">


                    <p className="text-xs md:text-base lg:text-lg font-[Inter-Regular] text-[#fffaf6] text-opacity-70">To access or use NMP Services, you must be at least 18 years old or have reached the legal age of consent in your jurisdiction, or have received permission from a parent or legal guardian if under the age of majority. By using NMP Services, you represent and warrant that you have the right, authority, and capacity to enter into these Terms.</p>

                  </div>

                </div>

                {/**  User Accounts */}
                <div className='flex flex-col gap-4 justify-start pb-4 border-b border-b-[#5A575B] border-opacity-70 '>
                  <li className="text-xl text-left md:text-2xl lg:text-3xl text-[#F2F2F2] font-bold capitalize font-[Inter-Bold]">
                    User Accounts
                  </li>

                  <p className="text-xs md:text-base lg:text-lg font-[Inter-Regular] text-[#fffaf6] text-opacity-70">To access certain features of NMP Services, you may need to register for an account. You are responsible for safeguarding your account information, including your password, and for any activities or actions under your account. NMP is not liable for any loss or damage arising from unauthorized access to your account.</p>

                  <div className="flex flex-col gap-3">


                    <p className="text-xs md:text-base lg:text-lg font-[Inter-SemiBold] text-[#fffaf6] text-opacity-70">Account Registration Requirements:</p>



                    <ul className="list-disc text-xs md:text-base lg:text-lg font-[Inter-Regular] text-[#fffaf6] text-opacity-70 ml-14 list-outside flex flex-col gap-1  indent-0">
                      <li >Provide accurate and up-to-date information during registration.</li>
                      <li>Immediately notify NMP of any unauthorized use of your account or other security breaches.</li>
                    
                    </ul>


                  </div>

                </div>

                {/** Intellectual Property */}
                <div className='flex flex-col gap-4 justify-start pb-4 border-b border-b-[#5A575B] border-opacity-70 '>
                  <li className="text-xl text-left md:text-2xl lg:text-3xl text-[#F2F2F2] font-bold capitalize font-[Inter-Bold]">
                    Intellectual Property
                  </li>


                  <div className="flex flex-col gap-3">


                    <p className="text-xs md:text-base lg:text-lg font-[Inter-Regular] text-[#fffaf6] text-opacity-70">All content available on NMP Services, including but not limited to video content, graphics, logos, text, and images, is owned or licensed by Nyati Motion Pictures and is protected by Ugandan and international copyright, trademark, and other intellectual property laws.</p>



                    <ul className="list-disc text-xs md:text-base lg:text-lg font-[Inter-Regular] text-[#fffaf6] text-opacity-70 ml-14 list-outside flex flex-col gap-1  indent-0">
                      <li ><span className="font-[Inter-Bold]">Restrictions: </span> You may not copy, reproduce, distribute, modify, or create derivative works of any NMP content without express permission.</li>
                      <li><span className="font-[Inter-Bold]">Usage License:</span> NMP grants you a limited, non-exclusive, non-transferable, revocable license to access and use NMP Services for personal, non-commercial use.</li>
                    </ul>
                  </div>

                </div>

                {/** User Content */}
                <div className='flex flex-col gap-4 justify-start pb-4 border-b border-b-[#5A575B] border-opacity-70 '>
                  <li className="text-xl text-left md:text-2xl lg:text-3xl text-[#F2F2F2] font-bold capitalize font-[Inter-Bold]">
                    User Content
                  </li>

                  <p className="text-xs md:text-base lg:text-lg font-[Inter-Regular] text-[#fffaf6] text-opacity-70">NMP Services may allow you to upload, share, or post content (&quot;User Content&quot;). By submitting User Content, you grant NMP a worldwide, non-exclusive, royalty-free, sublicensable, and transferable license to use, reproduce, modify, and display your content in connection with NMP Services.</p>

                  <div className="flex flex-col gap-3">


                    <p className="text-xs md:text-base lg:text-lg font-[Inter-SemiBold] text-[#fffaf6] text-opacity-70">User Content Requirements:</p>



                    <ul className="list-disc text-xs md:text-base lg:text-lg font-[Inter-Regular] text-[#fffaf6] text-opacity-70 ml-14 list-outside flex flex-col gap-1  indent-0">
                      <li >User Content must not infringe upon third-party rights or violate any law.</li>
                      <li>NMP reserves the right to remove or modify User Content that violates these Terms or is deemed inappropriate.</li>

                    </ul>


                  </div>

                </div>

                {/** Payments and Refunds */}
                <div className='flex flex-col gap-4 justify-start pb-4 border-b border-b-[#5A575B] border-opacity-70 '>
                  <li className="text-xl text-left md:text-2xl lg:text-3xl text-[#F2F2F2] font-bold capitalize font-[Inter-Bold]">
                    Payments and Refunds
                  </li>


                  <div className="flex flex-col gap-3">


                    <p className="text-xs md:text-base lg:text-lg font-[Inter-Regular] text-[#fffaf6] text-opacity-70">Certain features of NMP Services may require payment, including purchases and subscriptions. By making a payment, you agree to the pricing, payment, and billing policies set forth in these Terms and any relevant third-party app store policies.</p>



                    <ul className="list-disc text-xs md:text-base lg:text-lg font-[Inter-Regular] text-[#fffaf6] text-opacity-70 ml-14 list-outside flex flex-col gap-1  indent-0">
                      <li ><span className="font-[Inter-Bold]">Refund Policy: </span>  NMP does not provide refunds</li>
                      <li><span className="font-[Inter-Bold]">Payment Information:</span> Payments are processed through secure third-party payment processors.</li>
                    </ul>
                  </div>

                </div>

                {/** Third-Party Links and Services */}
                <div className='flex flex-col gap-4 justify-start pb-4 border-b border-b-[#5A575B] border-opacity-70 '>
                  <li className="text-xl text-left md:text-2xl lg:text-3xl text-[#F2F2F2] font-bold capitalize font-[Inter-Bold]">
                    Third-Party Links and Services
                  </li>


                  <div className="flex flex-col gap-3">


                    <p className="text-xs md:text-base lg:text-lg font-[Inter-Regular] text-[#fffaf6] text-opacity-70">NMP Services may contain links to third-party websites, services, or resources that are not owned or controlled by NMP. NMP is not responsible for the content, policies, or practices of any third-party sites. Accessing third-party services is at your own risk.</p>

                  </div>

                </div>

                {/** Privacy Policy */}
                <div className='flex flex-col gap-4 justify-start pb-4 border-b border-b-[#5A575B] border-opacity-70 '>
                  <li className="text-xl text-left md:text-2xl lg:text-3xl text-[#F2F2F2] font-bold capitalize font-[Inter-Bold]">
                    Privacy Policy
                  </li>


                  <div className="flex flex-col gap-3">


                    <p className="text-xs md:text-base lg:text-lg font-[Inter-Regular] text-[#fffaf6] text-opacity-70">Your use of NMP Services is also governed by our Privacy Policy, which explains how we collect, use, and share your personal information. By using NMP Services, you consent to our <span className='text-primary-500 cursor-pointer' onClick={()=>navigate("/policies/privacypolicy")}>Privacy Policy</span>.</p>

                  </div>

                </div>

                {/** App Store Compliance */}
                <div className='flex flex-col gap-4 justify-start pb-4 border-b border-b-[#5A575B] border-opacity-70 '>
                  <li className="text-xl text-left md:text-2xl lg:text-3xl text-[#F2F2F2] font-bold capitalize font-[Inter-Bold]">
                    App Store Compliance
                  </li>


                  <div className="flex flex-col gap-3">


                    <p className="text-xs md:text-base lg:text-lg font-[Inter-Regular] text-[#fffaf6] text-opacity-70">NMP entertainment services, through NyatiFlix, are available through the Google Play Store or Apple App Store are subject to Google and Apple’s policies. You agree to use NyatiFlix in compliance with these policies, including any guidelines related to data privacy, security, and acceptable content.</p>



                    <ul className="list-disc text-xs md:text-base lg:text-lg font-[Inter-Regular] text-[#fffaf6] text-opacity-70 ml-14 list-outside flex flex-col gap-1  indent-0">
                      <li ><span className="font-[Inter-Bold]">Device and Software Requirements: </span>  Using NyatiFlix requires compatible hardware and software, which may require periodic updates.</li>
                      <li><span className="font-[Inter-Bold]">License Limitations:</span> Your license to use NyatiFlix is limited to the devices authorized by Google or Apple based on the applicable store’s terms.</li>
                    </ul>
                  </div>

                </div>

                {/** Limitation of Liability */}
                <div className='flex flex-col gap-4 justify-start pb-4 border-b border-b-[#5A575B] border-opacity-70 '>
                  <li className="text-xl text-left md:text-2xl lg:text-3xl text-[#F2F2F2] font-bold capitalize font-[Inter-Bold]">
                    Limitation of Liability
                  </li>


                  <div className="flex flex-col gap-3">


                    <p className="text-xs md:text-base lg:text-lg font-[Inter-Regular] text-[#fffaf6] text-opacity-70">To the fullest extent permitted by Ugandan law, NMP and its directors, employees, and affiliates are not liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from your use or inability to use NMP Services.</p>



                    <ul className="list-disc text-xs md:text-base lg:text-lg font-[Inter-Regular] text-[#fffaf6] text-opacity-70 ml-14 list-outside flex flex-col gap-1  indent-0">
                      <li ><span className="font-[Inter-Bold]">No Warranty: </span>  NMP Services are provided &quot;as is&quot; and &quot;as available.&quot; NMP makes no warranties, express or implied, regarding the accuracy, reliability, or availability of NMP.</li>
                    </ul>
                  </div>

                </div>

                {/** Indemnification */}
                <div className='flex flex-col gap-4 justify-start pb-4 border-b border-b-[#5A575B] border-opacity-70 '>
                  <li className="text-xl text-left md:text-2xl lg:text-3xl text-[#F2F2F2] font-bold capitalize font-[Inter-Bold]">
                    Indemnification
                  </li>


                  <div className="flex flex-col gap-3">


                    <p className="text-xs md:text-base lg:text-lg font-[Inter-Regular] text-[#fffaf6] text-opacity-70">You agree to indemnify, defend, and hold NMP and its affiliates from any claims, losses, damages, liabilities, and expenses (including legal fees) arising out of or related to:</p>



                    <ul className="list-disc text-xs md:text-base lg:text-lg font-[Inter-Regular] text-[#fffaf6] text-opacity-70 ml-14 list-outside flex flex-col gap-1  indent-0">
                      <li >Your use or misuse of NMP Services.</li>
                      <li >Violation of these Terms or infringement of any third-party rights.</li>
                    </ul>
                  </div>

                </div>

                {/** Termination */}
                <div className='flex flex-col gap-4 justify-start pb-4 border-b border-b-[#5A575B] border-opacity-70 '>
                  <li className="text-xl text-left md:text-2xl lg:text-3xl text-[#F2F2F2] font-bold capitalize font-[Inter-Bold]">
                    Termination
                  </li>


                  <div className="flex flex-col gap-3">


                    <p className="text-xs md:text-base lg:text-lg font-[Inter-Regular] text-[#fffaf6] text-opacity-70">NMP reserves the right to suspend or terminate your access to its entertainment services, through NyatiFlix, at any time and for any reason, including violation of these Terms. Upon termination, your right to use NMP Services will cease immediately.</p>

                  </div>

                </div>

                {/** Governing Law */}
                <div className='flex flex-col gap-4 justify-start pb-4 border-b border-b-[#5A575B] border-opacity-70 '>
                  <li className="text-xl text-left md:text-2xl lg:text-3xl text-[#F2F2F2] font-bold capitalize font-[Inter-Bold]">
                    Governing Law
                  </li>


                  <div className="flex flex-col gap-3">


                    <p className="text-xs md:text-base lg:text-lg font-[Inter-Regular] text-[#fffaf6] text-opacity-70">These Terms are governed by the laws of Uganda. Any disputes arising out of or relating to these Terms shall be resolved in the courts of Uganda.</p>

                  </div>

                </div>

                {/** Changes to These Terms */}
                <div className='flex flex-col gap-4 justify-start pb-4 border-b border-b-[#5A575B] border-opacity-70 '>
                  <li className="text-xl text-left md:text-2xl lg:text-3xl text-[#F2F2F2] font-bold capitalize font-[Inter-Bold]">
                    Changes to These Terms
                  </li>


                  <div className="flex flex-col gap-3">


                    <p className="text-xs md:text-base lg:text-lg font-[Inter-Regular] text-[#fffaf6] text-opacity-70">NMP may modify these Terms from time to time. When we do, we will post the updated Terms on our website and mobile app, with an updated “Effective Date” at the top. Your continued use of NMP Services following any changes constitutes your acceptance of the revised Terms.</p>

                  </div>

                </div>

                {/** Contact us */}
                <div className='flex flex-col gap-4 justify-start pb-4 border-b border-b-[#5A575B] border-opacity-70 '>
                  <li className="text-xl text-left md:text-2xl lg:text-3xl text-[#F2F2F2] font-bold capitalize font-[Inter-Bold]">
                    Contact Us
                  </li>


                  <div className="flex flex-col gap-3">


                    <p className="text-xs md:text-base lg:text-lg font-[Inter-Regular] text-[#fffaf6] text-opacity-70">If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>

                    <div className='flex flex-col gap-1'>
                      <p className="text-xs md:text-base lg:text-lg font-[Inter-Regular] text-[#fffaf6] text-opacity-70"><span className="font-[Inter-Bold]">Email: </span> info@nyatimotionpictures.com</p>

                      <p className="text-xs md:text-base lg:text-lg font-[Inter-Regular] text-[#fffaf6] text-opacity-70"><span className="font-[Inter-Bold]">Mailing Address: </span> P.O Box 74733, Kampala</p>
                    
                    </div>
                  </div>

                </div>

                {/** Support */}
                <div className="flex flex-col gap-4 w-full pb-4 ">
                  <div className='flex flex-col gap-3'>
                    <p className="text-xs md:text-base lg:text-lg font-[Inter-Regular] text-[#fffaf6] text-opacity-70">By using NMP Services, you acknowledge that you have read, understood, and agree to these Terms of Service.</p>
                  </div>

                  <div className="flex flex-col gap-4 w-full pt-4 ">
                    <p className="text-xs md:text-base lg:text-lg font-[Inter-SemiBold] text-[#fffaf6] text-opacity-70">Other Links</p>

                    <div className="flex flex-col sm:flex-row gap-5">
                      <Buttons className='w-max text-primary-500 bg-[#1A171E] rounded-md min-w-[150px] px-6 py-3 italic font-[Inter-Bold] tracking-wider text-xs  sm:text-sm md:text-base uppercase' onClick={() => navigate("/policies/deletepolicy")} >DELETE ACCOUNT  Policy</Buttons>
                      <Buttons className='w-max text-primary-500 bg-[#1A171E] rounded-md min-w-[150px] px-6 py-3 italic font-[Inter-Bold] tracking-wider text-xs  sm:text-sm md:text-base uppercase' onClick={() => navigate("/policies/privacypolicy")}>PRIVACY POLICY</Buttons>
                    </div>
                  </div>
                </div>
              </ol>
            </div>





          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default TermsOfService