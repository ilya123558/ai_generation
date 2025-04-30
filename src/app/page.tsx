'use client'
import { LoginApiClient } from "@/entities/users/api/login.api"
import { useGetProfilesQuery } from "@/entities/users/api/users.api"
import { setActiveProfileId, setGenerationPoints, setUser, useAppDispatch } from "@/views/store"
import { retrieveRawInitData } from "@telegram-apps/sdk"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Home() {
  const router = useRouter()
  const dispatch = useAppDispatch()

  const {data: profile} = useGetProfilesQuery()

  useEffect(() => {
    const login = async () => {
      const init_data = retrieveRawInitData()
      try {
        if (init_data) {
          const data = await new LoginApiClient().loginByInitData(init_data);
          dispatch(setUser(data.user));
          dispatch(setGenerationPoints(data.user.tokensCount));
          
          if(data.user.role === 'new') {
            setTimeout(() => {
              router.push('/onboarding');
            }, 1000)
          }
          else if(data.user.role === 'pending') {
            setTimeout(() => {
              router.push('/profile-create-loading')
            }, 1000)
          }
          else {
            setTimeout(() => {
              router.push('/home');
            }, 1000)
          }

        } else {
          alert("initData не доступно");
        }
      }
      catch (e) {
        alert(JSON.stringify(e))
      }
    };

    login();
  }, [dispatch, router]);

  useEffect(() => {
    if(profile) {
      dispatch(setActiveProfileId(profile.profiles?.[0].id || 1))
    }
  }, [dispatch, profile])

  return (
    <section className="w-screen h-screen bg-primary flex items-center justify-center">
      <h1 className="fs-30 font-medium text-background">AI.bot</h1>
    </section>
  )
}