export type blogProps = {
  title: string;
  image: string;
  date: string;
  url: string;
  available: boolean;
};

export const blogDetails = [
  {
    title: "பயணம் ஆண்டிபட்டி - கோழிப்பண்ணை",
    image:
    require(".//../../public/blog3.jpeg"),
    date: "MAY 2024",
    url: "https://jayasriraam.blogspot.com/2024/04/blog-post.html",
    available: true,
  },
  {
    title: "என் கொள்கை",
    image:
    require(".//../../public/blog1.jpeg"),
    date: "MAY 2024",
    url: "https://jayasriraam.blogspot.com/2024/03/blog-post.html",
    available: true,
  },
  {
    title:
      "முதல் பரிசு",
    image:
      require(".//../../public/blog2.jpeg"),
    date: "APR 2024",
    url: "https://jayasriraam.blogspot.com/2024/02/blog-post.html",
    available: true,
  },

];
