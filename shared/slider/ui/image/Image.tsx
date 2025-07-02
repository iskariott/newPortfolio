import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image, { ImageProps } from 'next/image';

type PartialImageProps = Partial<ImageProps>;

export function createSliderImage(defaultProps: PartialImageProps) {
    return ({ src, alt }: { src: string | StaticImport; alt: string }) => (
        <Image {...defaultProps} src={src} alt={alt} />
    );
}
