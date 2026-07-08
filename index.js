export default {
  async fetch(request, env, ctx) {
    // রিকোয়েস্ট থেকে URL-টি বের করে নেওয়া হচ্ছে
    const url = new URL(request.url);

    // ৮ নম্বর লাইনের টাইপো ঠিক করা হয়েছে এখানে
    if (url.pathname === '/techpro.html') {
      return new Response("Welcome to TechPro!", {
        headers: { "content-type": "text/html" },
      });
    }

    // হোমপেজ বা অন্য কোনো পাথের জন্য রেসপন্স
    if (url.pathname === '/') {
      return new Response("Hello World! This is the homepage.", {
        headers: { "content-type": "text/plain" },
      });
    }

    // যদি কোনো পাথ ম্যাচ না করে (404 Error)
    return new Response("Page Not Found", { 
      status: 404,
      headers: { "content-type": "text/plain" }
    });
  },
};
