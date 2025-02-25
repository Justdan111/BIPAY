import { useState } from "react"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"

export default function OTPPage() {
  const [otp, setOtp] = useState(["", "", "", ""])
  const isOtpFilled = otp.every((digit) => digit !== "")

  const handleChange = (element: React.ChangeEvent<HTMLInputElement>, index: number) => {
    if (isNaN(Number(element.target.value))) return false
    setOtp([...otp.map((d, idx) => (idx === index ? element.target.value : d))])
    if (element.target.nextSibling && element.target.value !== "") {
      ;(element.target.nextSibling as HTMLElement).focus()
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("OTP Submitted:", otp.join(""))
    //  send the OTP to the server for verification
  }

  const handleResend = () => {
    console.log("Resend OTP")
    //  call to API to resend the OTP
  }

  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Image Container  */}
      <div className="hidden w-[55%] md:block">
        <img
          src="/images/bipay.webp"
          alt="bipay"
          className="h-full w-full object-cover"
        />
      </div>

      {/* OTP Form Container  */}
      <div className="flex w-full flex-col justify-center px-4 md:w-[45%]">
        <div className="mx-auto w-full max-w-md">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">Enter OTP</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            We've sent a one-time password to your email
          </p>

          <div className="mt-8 p-8 ">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="flex justify-between space-x-4">
                {otp.map((data, index) => (
                  <Input
                    key={index}
                    type="text"
                    maxLength={1}
                    className="h-16 w-16 text-center text-2xl border-gray-300 rounded-md focus:ring-2 focus:ring-[#212143]"
                    value={data}
                    onChange={(e) => handleChange(e, index)}
                  />
                ))}
              </div>
              <div>
                <Button 
                  type="submit" 
                  disabled={!isOtpFilled} 
                  className="w-full bg-[#212143] hover:bg-[#2e2e5f] text-white"
                >
                  Verify OTP
                </Button>
              </div>
            </form>
            
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 text-gray-500">Didn't receive the OTP?</span>
                </div>
              </div>
              
              <div className="mt-6">
                <Button
                  onClick={handleResend}
                  className="w-full border border-[#212143] bg-white text-[#212143] hover:bg-gray-50"
                >
                  Resend OTP
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}