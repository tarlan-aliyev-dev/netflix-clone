import TransitionEffect from '@/components/TransitionEffect'
import Info from '@/components/info/Info'
import useAuth from '@/hooks/useAuth'
import { useState, useCallback } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

interface Inputs {
  name: string
  email: string
  password: string
}

function Login() {
  const [login, setLogin] = useState(false)
  const { signIn, signUp } = useAuth()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    // console.log(data)
    if (login) {
      await signIn(data.email, data.password)
    } else {
      await signUp(data.email, data.password)
    }
  }

  const [variant, setVariant] = useState('login')

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === 'login' ? 'register' : 'login'
    )
  }, [])

  return (
    <div className="relative h-full w-full bg-[url('https://rb.gy/p2hphi')] bg-no-repeat bg-center bg-fixed bg-cover">
      <TransitionEffect />
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <title>Netflix</title>
          <img
            src="https://rb.gy/ulxxee"
            className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
            width={150}
            height={150}
          />
        </nav>
        <div className="flex justify-center">
          <form
            className="mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="text-4xl font-semibold">Sign In</h1>
            <div className="flex flex-col gap-4">
              {/* <div className='relative'>
            {variant === 'register' && (
              <input
              id="name"
              type="text"
              placeholder=" "
              {...register('email', { required: true })}
              className={`
              block 
              rounded-md
              px-6
              pt-6
              pb-1
              w-full
              text-md
              text-white
              bg-neutral-700
              appearance-none
              focus:outline-none
              focus:ring-0
              peer
              invalid:border-b-1 input ${
                errors.email && 'border-b-2 border-orange-500'
              }`}
              />
              )}
              {errors.email && (
                <p className="p-1 text-[13px] font-light  text-orange-500">
                Please enter a valid email.
                </p>
                )}
                <label
                htmlFor="name"
                className="
                inline-block w-full
                absolute 
                text-md
                text-zinc-400
                duration-150 
                transform 
                -translate-y-3 
                scale-75 
                top-4 
                z-10 
                origin-[0] 
                left-6
                peer-placeholder-shown:scale-100 
                peer-placeholder-shown:translate-y-0 
                peer-focus:scale-75
                peer-focus:-translate-y-3"
                >
                Name
                </label>
              </div> */}

              <div className="relative">
                <input
                  id="email"
                  type="email"
                  placeholder=" "
                  className={`
              block 
              rounded-md
              px-6
              pt-6
              pb-1
              w-full
              text-md
              text-white
              bg-neutral-700
              appearance-none
              focus:outline-none
              focus:ring-0
              peer
              invalid:border-b-1 input ${
                errors.email && 'border-b-2 border-orange-500'
              }`}
                  {...register('email', { required: true })}
                />
                {errors.email && (
                  <p className="p-1 text-[13px] font-light  text-orange-500">
                    Please enter a valid email.
                  </p>
                )}
                <label
                  htmlFor="email"
                  className="
              inline-block w-full
              absolute 
              text-md
              text-zinc-400
              duration-150 
              transform 
                -translate-y-3 
                scale-75 
                top-4 
                z-10 
                origin-[0] 
                left-6
                peer-placeholder-shown:scale-100 
                peer-placeholder-shown:translate-y-0 
                peer-focus:scale-75
                peer-focus:-translate-y-3"
                >
                  Email
                </label>
              </div>

              <div className="relative">
                <input
                  id="password"
                  type="password"
                  placeholder=" "
                  {...register('password', { required: true })}
                  className={`
              block
              rounded-md
                px-6
                pt-6
                pb-1
                w-full
                text-md
                text-white
                bg-neutral-700
                appearance-none
                focus:outline-none
                focus:ring-0
                peer
                invalid:border-b-1
                input ${errors.password && 'border-b-2 border-orange-500'}`}
                />
                {errors.password && (
                  <p className="p-1 text-[13px] font-light  text-orange-500">
                    Your password must contain between 4 and 60 characters.
                  </p>
                )}
                <label
                  htmlFor="password"
                  className="
              absolute
              text-md
              text-zinc-400
              duration-150 
              transform 
              -translate-y-3 
              scale-75 
              top-4 
              z-10 
              origin-[0] 
              left-6
              inline-block w-full
              peer-placeholder-shown:scale-100 
              peer-placeholder-shown:translate-y-0 
              peer-focus:scale-75
              peer-focus:-translate-y-3"
                >
                  Password
                </label>
              </div>
            </div>
            <button
              className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition"
              onClick={() => setLogin(true)}
              // onClick={(event) => { func1(event); func2();}}
              type="submit"
            >
              {variant === 'login' ? 'Sign in' : 'Sign up'}
            </button>

            <div className="flex flex-row items-center gap-4 mt-8 justify-center">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                <FcGoogle size={32} />
              </div>
              <div className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                <FaGithub size={32} />
              </div>
            </div>

            <p className="text-neutral-500 mt-12">
              {variant === 'login'
                ? 'First time using Netflix?'
                : 'Already have an account?'}
              <button
                className="cursor-pointer ml-1 text-white hover:underline"
                onClick={() => setLogin(false)}
                type="submit"
              >
                <span
                  onClick={toggleVariant}
                  className="text-white ml-1 hover:underline cursor-pointer"
                >
                  --
                </span>
                {variant === 'login' ? 'Create an account' : 'Login'}
              </button>
            </p>
          </form>
        </div>
      </div>
      <div className='bg-black'>
      <Info />
      </div>
    </div>
  )
}

export default Login
