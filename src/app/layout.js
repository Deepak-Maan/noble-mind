import "./globals.css";

export const metadata = {
  title: "Noble Mind",
  description:
    "At Noble Mind is a forward-thinking AI specialised company dedicated to reshaping the future of how we live, work, and learn. Our mission is to create ground-breaking AI solutions for Healthcare, Education, and beyond, aligning with Saudi Arabia’s Vision 2030.",
  image: "https://i.ibb.co/9Yn0nCR/Screenshot-2024-04-05-115129.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
