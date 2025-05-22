"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { createClient, type SupabaseClientOptions, type SupabaseClient } from "@supabase/supabase-js"

const SupabaseContext = createContext<SupabaseClient | undefined>(undefined)

interface SupabaseProviderProps {
  children: React.ReactNode
  supabaseUrl: string
  supabaseKey: string
  options?: SupabaseClientOptions<"public"> | undefined
}

export const SupabaseProvider: React.FC<SupabaseProviderProps> = ({ children, supabaseUrl, supabaseKey, options }) => {
  const [supabaseClient, setSupabaseClient] = useState<SupabaseClient | null>(null)

  useEffect(() => {
    const client = createClient(supabaseUrl, supabaseKey, options)
    setSupabaseClient(client)
  }, [supabaseUrl, supabaseKey, options])

  return <SupabaseContext.Provider value={supabaseClient}>{children}</SupabaseContext.Provider>
}

export const useSupabase = (): SupabaseClient => {
  const context = useContext(SupabaseContext)
  if (!context) {
    throw new Error("useSupabase must be used within a SupabaseProvider")
  }
  return context
}
