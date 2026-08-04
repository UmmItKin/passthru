import defaultMdxComponents from 'fumadocs-ui/mdx';
import { Callout } from 'fumadocs-ui/components/callout';
import type { ImageMetadata } from 'astro';
import type { ComponentProps } from 'react';

// Astro hands MDX images an ImageMetadata object instead of a string src.
function Img({ src, ...props }: Omit<ComponentProps<'img'>, 'src'> & { src?: string | ImageMetadata }) {
  const image = typeof src === 'object' && src !== null ? src : undefined;
  const Base = defaultMdxComponents.img!;

  return (
    <Base
      {...props}
      src={image ? image.src : (src as string)}
      width={image?.width}
      height={image?.height}
    />
  );
}

export const mdxComponents = {
  ...defaultMdxComponents,
  Callout,
  img: Img,
};
