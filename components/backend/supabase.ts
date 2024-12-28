import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient('https://hcdlifspwvasfwpnoujj.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhjZGxpZnNwd3Zhc2Z3cG5vdWpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUzNTkyNTQsImV4cCI6MjA1MDkzNTI1NH0.N_lwt2QUgEa6b1Tkon12cVp2t7ilRHyZzqq2GGxJ3mo')
