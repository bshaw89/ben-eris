import { siBandcamp, siSpotify, siInstagram, siApplemusic, siYoutube } from 'simple-icons';

export default function GetIcon(slug) {
    let icon = '';
    if (slug == 'spotify')
        icon = siSpotify;
    else if (slug == 'apple')
        icon = siApplemusic;
    else if (slug == 'instagram')
        icon = siInstagram;
    else if (slug == 'youtube')
        icon = siYoutube;
    else if (slug == 'bandcamp')
        icon = siBandcamp;

    return icon.svg;
}