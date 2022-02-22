import { Artist } from "./artist.model";
import { Genres } from "./genre.model";
import { Tracks } from "./track.model";

export interface Albums {
    data?:     Album[];
    checksum?: string;
    total?:    number;
}

export interface Album {
    id?:                      number;
    title?:                    string;
    upc?:                     string;
    link?:                    string;
    share?:                   string;
    cover?:                   string;
    cover_small?:             string;
    cover_medium?:            string;
    cover_big?:               string;
    cover_xl?:                string;
    md5_image?:               string;
    genre_id?:                number;
    genres?:                  Genres;
    label?:                   string;
    nb_tracks?:               number;
    duration?:                number;
    fans?:                    number;
    release_date?:            Date;
    record_type?:             string;
    available?:               boolean;
    tracklist?:               string;
    explicit_lyrics?:         boolean;
    explicit_content_lyrics?: number;
    explicit_content_cover?:  number;
    contributors?:            Contributor[];
    artist?:                   Artist;
    type?:                    string;
    tracks?:                  Tracks;
}





export interface Contributor {
    id:             number;
    name:           string;
    link:           string;
    share:          string;
    picture:        string;
    picture_small:  string;
    picture_medium: string;
    picture_big:    string;
    picture_xl:     string;
    radio:          boolean;
    tracklist:      string;
    type:           string;
    role:           string;
}


