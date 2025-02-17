// Replace these with your Supabase project URL and API key
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jjurmwfgqtfxmcdzbzfp.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqdXJtd2ZncXRmeG1jZHpiemZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY0MDM3NjgsImV4cCI6MjA1MTk3OTc2OH0.w5w-CTUaVjVHyQV-WbGtf8RrSvfltpAh16zR6FvYwKE";

if (!supabaseUrl || !supabaseKey) {
    throw new Error("Missing Supabase environment variables.");
}


const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase;
