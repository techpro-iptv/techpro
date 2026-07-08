export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // নিচের লাইনে 'আপনার-ইউজারনেম' এর জায়গায় আপনার আসল গিটহাব ইউজারনেমটি লিখে দিন
    const githubUser = "YOUR_GITHUB_USERNAME/techpro-iptv"; 
    
    if (url.pathname === '/techpro.m
