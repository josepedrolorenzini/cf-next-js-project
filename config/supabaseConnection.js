// Replace these with your Supabase project URL and API key
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jjurmwfgqtfxmcdzbzfp.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ;

if (!supabaseUrl || !supabaseKey) {
    throw new Error("Missing Supabase environment variables.");
}


const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase;
