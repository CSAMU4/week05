/**
 * Coding Assignment Week 5 - Menu App 
 * Create a menu app as seen in this week’s video. 
 * What you create is up to you as long as it meets the following requirements:
        Use at least one array.
        Use at least two classes.
        Your menu should have the options to create, view, and delete elements.

        Menu App - Creating a Playlist that you add, view and delete songs. 
 */

class Song { // the name of song + artist of the song 
    constructor(name, artist) {
        this.name = name; 
        this.artist = artist; 
    }
describe() { 
    return `This ${this.name} is by ${this.artist}.`; 
    }
}

class Playlist { // the name of the playlist 
    constructor(name) {
        this.name = name; 
        this.songs = []; 
    }

addSong(song) { // adding a song to the playlist 
    if (song instanceof Song) {
         this.songs.push(song);
     } else {
         throw new Error(`You can only add an instance of Song. The Argument: ${song} is not a song.`); 
        }
    }
describe () { // the name of the playlist and how many songs are in in
    return `${this.name} has ${this.songs.length} songs`;
    }
}

class Menu { 
    constructor() {
        this.playlists = []; // we can have any amount of playlists
        this.selectedPlaylist = null; // starting with no playlist
    }

    start() { 
        let selection = this.showMainMenuOptions(); 
        while(selection != 0) {
            switch(selection) {
                case '1': 
                    this.createPlaylist(); // creates a new playlist
                    break; 
                case '2': 
                    this.viewPlaylist(); // views a playlist
                    break; 
                case '3':
                    this.deletePlaylist(); // deletes a playlist
                    break; 
                case '4': 
                    this.displayPlaylists(); // displays all the playlists 
                default: 
                    selection = 0; 
            }
            selection = this.showMainMenuOptions(); 
        }

        alert('Goodbye!')
    }

    showMainMenuOptions() {
        return prompt (`
        0) Exit Playlist 
        1) Create a New Playlist 
        2) View a Playlist 
        3) Delete a Playlist 
        4) Display All Playlists 
        `);
    }

}