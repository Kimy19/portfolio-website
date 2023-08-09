/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 이미지 가져오는 도메인 정보 등록
  images:{
    domains:[
      'www.notion.so',
      'images.unsplash.com',
      'user-images.githubusercontent.com'
    ]
  }
}

module.exports = nextConfig
