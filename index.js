export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // techpro-iptv রিপোজিটরি থেকে ফাইল রিড করার কোড
    if (url.pathname === '/techpro.m3u') {
      return fetch(`https://raw.githubusercontent.com/${env.GITHUB_REPO || 'techpro-iptv'}/main/techpro.m3u`);
    }
    
    if (url.pathname === '/index.html' || url.pathname === '/') {
      return fetch(`https://raw.githubusercontent.com/${env.GITHUB_REPO || 'techpro-iptv'}/main/index.html`);
    }

    return new Response('IPTV Link Active', { status: 200 });
  },
};
