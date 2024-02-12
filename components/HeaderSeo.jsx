import React from "react"
import Head from 'next/head'

function HeaderSeo({
  title = "Trang chủ",
  desc = "Cùng nhau vun đắp ước mơ tại 'Cây Mục Tiêu' của cộng đồng Avatar! Đặt mục tiêu, chia sẻ với cộng đồng và nỗ lực không ngừng để biến chúng thành hiện thực. Mỗi bước tiến là một chiến thắng, mỗi mục tiêu đều quý giá. Hãy cam kết với chính mình và khám phá sức mạnh của sự đoàn kết. Ghi lại mục tiêu của bạn ngay hôm nay và cùng chúng tôi xây dựng một năm tràn đầy thành công!",
  image = "/image/BannerSeo.jpg" 
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={desc} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://metatags.io/" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={image} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://metatags.io/" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={desc} />
      <meta property="twitter:image" content={image} />
    </Head>
  )
}

export default HeaderSeo