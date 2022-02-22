export interface Genres {
    data: Genre[];
}

export interface Genre {
    id?:             string;
    name?:           string;
    picture?:        string;
    picture_small?:  string;
    picture_medium?: string;
    picture_big?:    string;
    picture_xl?:     string;
    type?:           string;
}

