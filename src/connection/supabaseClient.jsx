import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ✅ Test Supabase Storage Connection
// (async () => {
//     const { data, error } = await supabase.storage.from('certificates').list();
  
//     if (error) {
//       console.error('❌ Supabase Storage Connection Failed:', error);
//     } else {
//       console.log('✅ Supabase Storage Connection Successful:', data);
//     }
//   })();


  // ✅ Test Supabase Database Connection
(async () => {
  const { data, error } = await supabase.from('tech-stack-icons').select('*');

  if (error) {
      console.error('❌ Supabase Database Connection Failed:', error);
  } else {
      console.log('✅ Supabase Database Connection Successfulslsfjksdjf:', data);
  }
})();