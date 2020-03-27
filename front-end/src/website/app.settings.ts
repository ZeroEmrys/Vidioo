import { Injectable } from '@angular/core';

export class Settings {
    constructor(public name: string,
                public theme: string) { }
}

@Injectable()
export class AppSettings {
    public settings = new Settings(
        'Vidio E-Commerce',  // theme name
        'vidio'     // green, blue, red, pink, purple, grey
    );
}
