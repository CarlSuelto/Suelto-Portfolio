import { createClient } from '@supabase/supabase-js';

// 1. Try to read from environment variables first
const envUrl = import.meta.env.VITE_SUPABASE_URL;
const envKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// 2. HARDCODED FALLBACK: If env variables are blank/undefined, paste your actual keys between the quotes below!
const fallbackUrl = 'https://sbomzqzxidclondhjpsk.supabase.co';
const fallbackKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNib216cXp4aWRjbG9uZGhqcHNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAxMDY3MTQsImV4cCI6MjA5NTY4MjcxNH0.nkxcPq-yLiGdeweamjgzdIcr4tcoUup1LLrxLPOKPhw';

// 3. Select whichever one is available so the client initialization never fails
const supabaseUrl = envUrl && envUrl !== 'undefined' ? envUrl : fallbackUrl;
const supabaseAnonKey = envKey && envKey !== 'undefined' ? envKey : fallbackKey;

// 4. Create and export the configured client instance
export const supabase = createClient(supabaseUrl, supabaseAnonKey);