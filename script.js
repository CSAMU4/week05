/**
 * Coding Assignment Week 5 - Menu App 
 * Create a menu app as seen in this week’s video. 
 * What you create is up to you as long as it meets the following requirements:
        Use at least one array.
        Use at least two classes.
        Your menu should have the options to create, view, and delete elements.

        Menu App - Creating a Playlist that you add, view and delete songs. 
 */

class Song { 
    constructor(name, artist) {
        this.name = name; 
        this.artist = artist; 
    }
describe() { 
    return `This ${this.name} is by ${this.artist}.`; 
    }
}

class Playlist {
    constructor(song) {
        this.song = song; 
        this.songs = []; 
    }

    addSong(song) {
        if (song instanceof Song) {
            this.songs.push(song);
        } else {
            throw new Error(`You can only add an instance of Song. The Argument is not a song: ${song}`); 
        }
    }
}