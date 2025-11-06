import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Sprout } from 'lucide-react'

export function LoginPage() {
  const [isLogin, setIsLogin] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleGoogleAuth = () => {
    // Placeholder for Google OAuth
    console.log('Google OAuth will be implemented')
  }

  const handleEmailAuth = () => {
    // Placeholder for email authentication
    console.log('Email auth will be implemented', { email, password })
  }

  return (
    <div className="flex h-screen">
      {/* Left Side - Image */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=1200&h=1200&fit=crop"
          alt="Nature background"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right Side - Auth Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-[#1a1a1a] dark">
        <div className="w-full max-w-md px-8">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-12">
            <Sprout className="w-6 h-6 text-white" />
            <span className="text-white text-lg font-semibold">Wellspring</span>
          </div>

          {/* Heading */}
          <div className="mb-8">
            <h1 className="text-white text-3xl font-bold mb-3">
              {isLogin ? 'Welcome back' : 'Get started in seconds'}
            </h1>
            <p className="text-gray-400 text-sm">
              {isLogin
                ? 'Log in to your account to continue'
                : 'Create your account to begin managing your practice.'}
            </p>
          </div>

          {/* Google Button */}
          <Button
            onClick={handleGoogleAuth}
            variant="outline"
            className="w-full bg-white text-black hover:bg-gray-100 h-11 mb-6"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </Button>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-gray-700"></div>
            <span className="text-gray-500 text-sm">or</span>
            <div className="flex-1 h-px bg-gray-700"></div>
          </div>

          {/* Email Form (shown when not in login mode initially) */}
          {!isLogin ? (
            <div className="text-center mb-6">
              <button
                onClick={() => setIsLogin(true)}
                className="text-gray-400 text-sm hover:text-white transition-colors"
              >
                Continue with your email
              </button>
            </div>
          ) : (
            <div className="space-y-4 mb-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-300">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#2a2a2a] border-gray-700 text-white placeholder:text-gray-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-300">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-[#2a2a2a] border-gray-700 text-white placeholder:text-gray-500"
                />
              </div>
              <Button
                onClick={handleEmailAuth}
                className="w-full bg-white text-black hover:bg-gray-100 h-11"
              >
                Continue
              </Button>
            </div>
          )}

          {/* Terms */}
          <p className="text-gray-500 text-xs text-center mb-6">
            By continuing, you accept these{' '}
            <a href="#" className="text-white hover:underline">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-white hover:underline">
              Privacy Policy
            </a>
          </p>

          {/* Toggle Login/Signup */}
          <p className="text-gray-400 text-sm text-center">
            {isLogin ? (
              <>
                Don't have an account?{' '}
                <button
                  onClick={() => setIsLogin(false)}
                  className="text-white hover:underline"
                >
                  Sign up
                </button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button
                  onClick={() => setIsLogin(true)}
                  className="text-white hover:underline"
                >
                  Log in
                </button>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  )
}
