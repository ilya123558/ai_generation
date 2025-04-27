'use client'
import { useCheckServerIsWorkQuery } from "@/entities/health/api/health.api"
import { LoginApiClient } from "@/entities/users/api/login.api"
import { setUser, useAppDispatch } from "@/views/store"
import { retrieveRawInitData } from "@telegram-apps/sdk"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Home() {
  const router = useRouter()
  const dispatch = useAppDispatch()

  const { data, isError, error } = useCheckServerIsWorkQuery()

  useEffect(() => {
    if(data) {
      alert(JSON.stringify(data))
    }
  }, [data])

  useEffect(() => {
    if(isError) {
      alert(JSON.stringify(error))
    }
  }, [isError, error])

  // useEffect(() => {
  //   const login = async () => {
  //     const init_data = retrieveRawInitData()
  //     try {
  //       if (init_data) {
  //         const data = await new LoginApiClient().loginByInitData(init_data);
  //         dispatch(setUser(data.user));
  //         router.push('/home');
  //       } else {
  //         alert("initData не доступно");
  //       }
  //     }
  //     catch (e) {
  //       alert(JSON.stringify(e))
  //     }
  //   };

  //   login();
  // }, [dispatch, router]);

  return (
    <section className="w-screen h-screen bg-primary flex items-center justify-center">
      <h1 className="fs-30 font-medium text-background">AI.bot</h1>
    </section>
  )
}