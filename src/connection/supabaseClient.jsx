import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://glgtskpaejpxovawmzsq.supabase.co'; 
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdsZ3Rza3BhZWpweG92YXdtenNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk5MzM1NDcsImV4cCI6MjA1NTUwOTU0N30.SeWJ72MQbWthXodzEHjVPQpogil5Vh-LGhdOdaGB-6w'; // Replace with your Supabase anon key

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ✅ Test Supabase Storage Connection
(async () => {
    const { data, error } = await supabase.storage.from('certificates').list();
  
    if (error) {
      console.error('❌ Supabase Storage Connection Failed:', error);
    } else {
      console.log('✅ Supabase Storage Connection Successful:', data);
    }
  })();