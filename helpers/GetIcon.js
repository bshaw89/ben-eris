import { siSpotify } from 'simple-icons';
import { siInstagram } from 'simple-icons';
import { siApplemusic } from 'simple-icons';
import { siYoutube } from 'simple-icons';

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

    return icon.svg;
}