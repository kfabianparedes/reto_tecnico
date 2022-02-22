import { Album } from "./album.model";
import { Artist } from "./artist.model";

export interface Tracks {
    data?:  Track[];
    total?: number;
    next?:  string;
}

export interface Track {
    id?:                        number;
    readable?:                  boolean;
    title?:                     string;
    title_short?:               string;
    title_version?:             string;
    link?:                      string;
    unseen?:                    boolean;
    duration?:                  number;
    rank?:                      number;
    explicit_lyrics?:           boolean;
    explicit_content_lyrics?:   number;
    explicit_content_cover?:    number;
    preview?:                   string;
    md5_image?:                 string;
    artist?:                    Artist;
    type?:                      string;
    isrc?:                      string;
    share?:                     string;
    track_position?:            number;
    disk_number?:               number;
    release_date?:              Date;
    bpm?:                       number;
    gain?:                      number;
    available_countries?:       string[];
    contributors?:              Artist[];
    album?:                     Album;

}
