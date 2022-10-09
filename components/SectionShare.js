import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  EmailShareButton,
  EmailIcon
} from 'next-share'

const SectionShare = ({ url }) => {
  return (
    <div className='my-3 text-center'>
      <h3 className='text-xl mb-3 underline-offset-2 underline text-gray-700'>Compartir</h3>
      <div className='grid justify-center grid-flow-col gap-3'>
        <FacebookShareButton url={url}>
          <FacebookIcon size={50} round />
        </FacebookShareButton>
        <TwitterShareButton url={url}>
          <TwitterIcon size={50} round />
        </TwitterShareButton>
        <LinkedinShareButton url={url}>
          <LinkedinIcon size={50} round />
        </LinkedinShareButton>
        <WhatsappShareButton url={url}>
          <WhatsappIcon size={50} round />
        </WhatsappShareButton>
        <PinterestShareButton url={url}>
          <PinterestIcon size={50} round />
        </PinterestShareButton>
        <RedditShareButton url={url}>
          <RedditIcon size={50} round />
        </RedditShareButton>
        <EmailShareButton url={url}>
          <EmailIcon size={50} round />
        </EmailShareButton>
      </div>
    </div>

  )
}

export default SectionShare
