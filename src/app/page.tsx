'use client'
import { LoginApiClient } from "@/entities/users/api/login.api"
import { useGetProfilesQuery } from "@/entities/users/api/users.api"
import { setActiveProfileId, setGenerationPoints, setUser, useAppDispatch } from "@/views/store"
import { requestFullscreen, retrieveRawInitData } from "@telegram-apps/sdk"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Home() {
  const router = useRouter()
  const dispatch = useAppDispatch()

  useEffect(() => {
    const login = async () => {
      const init_data = retrieveRawInitData()
      try {
        if (init_data) {
          const data = await new LoginApiClient().loginByInitData(init_data);
          dispatch(setUser(data.user));
          dispatch(setGenerationPoints(data.user.tokensCount));
          
          if(data.user.role === 'new') {
            router.push('/onboarding');
          }
          else if(data.user.role === 'pending') {
            router.push('/profile-create-loading')
          }
          else {
            router.push('/home');
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
    if (requestFullscreen.isAvailable()) {
      requestFullscreen();
    }

    setTimeout(() => {
      if (window.Telegram && window.Telegram.WebApp) {
        const tg = window.Telegram.WebApp;
        alert(JSON.stringify(tg))
      
        tg.requestFullscreen();
      }
    }, 5000)

  }, [requestFullscreen]);

  return (
    <section className="w-screen h-screen bg-primary flex items-center justify-center">
      <h1 className="fs-30 font-medium text-background">AI.bot</h1>
    </section>
  )
}