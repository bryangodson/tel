import _Image, { ImageProps } from "next/image";
/**
 * A custom Image component that adjusts the source URL for use on GitHub Pages.
 *
 * This component wraps the Next.js `Image` component and adds a check for the
 * `isForGithubPages` flag. If true, it prepends the `REPO_NAME` constant to the
 * `src` prop before rendering the image.
 */
const isForGithubPages = true;
const REPO_NAME = "tel";

const Image = (props: ImageProps) => {
  const { src, ...rest } = props;

  const adjustedSrc =
    typeof src === "string" && isForGithubPages ? `/${REPO_NAME}${src}` : src;

  return <_Image src={adjustedSrc} {...rest} />;
};

export default Image;
