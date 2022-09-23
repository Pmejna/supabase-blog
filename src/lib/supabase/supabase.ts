import {createClient} from '@supabase/supabase-js';

export default createClient(process.env.NEXT_PUBLIC_SUPABASE_API_URL as string, process.env.NEXT_PUBLIC_SUPABASE_API_KEY as string);