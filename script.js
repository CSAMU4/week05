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
    return `${this.name} is by ${this.artist}.`; 
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
describe () { // the name of the playlist and how many songs are in the playlist
    return `${this.name} has ${this.songs.length} songs`;
    }
}

class Menu { 
    constructor() {
        this.playlists = []; 
        this.selectedPlaylist = null; // manage one playist at a time 
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
    showPlaylistMenuOptions(playlistInfo) {
        return prompt (`
        0) Go back
        1) Add a song 
        2) Delete a song 
        ----------------------
        ${playlistInfo}

        `);
    }

    displayPlaylists() {
        let playlistString = ''; // name of the blank playlist 
             for (let i = 0; i < this.playlists.length; i++) { // loop through the playlists 
            playlistString += i + ') ' + this.playlists[i].name + '\n'; // grab each playlist and get the name of that playlist 
        }
        alert(playlistString);  
    }

    createPlaylist() {
        let name = prompt('Enter name for the new playlist: ');
        this.playlists.push(new Playlist(name)); 
    }

    viewPlaylist() {
        let index = prompt('Enter the index of the playlist you wish to view:');
        if (index > -1 && index < this.playlists.length) {
            this.selectedPlaylist = this.playlists[index]; 
            let description = 'Playlist Name: ' + this.selectedPlaylist.name + '\n'; 

            for (let i = 0; i < this.selectedPlaylist.songs.length; i++) {
                description += i + ') ' + this.selectedPlaylist.songs[i].name + ' - ' 
                + this.selectedPlaylist.songs[i].artist + '\n'; 
            }
            let selection = this.showPlaylistMenuOptions(description); 
            switch(selection) {
                case '1': 
                    this.createSong(); 
                    break; 
                case '2': 
                    this.deleteSong(); 
            }
        }         
    }
    createSong () {
        let name = prompt('Enter the name of the song:'); 
        let artist = prompt('Enter the artist of the song:'); 
        this.selectedPlaylist.songs.push(new Song(name, artist));
    }
    deleteSong() {
        let index = prompt('Enter the index of the song you wish to delete:')
        if (index > -1 && index < this.selectedPlaylist.songs.length) {
            this.selectedPlaylist.songs.splice(index,1); 
        }
    }
    deletePlaylist () {
        let index = prompt('Enter the playlist you wish to delete:')
        if (index > -1 && index < this.playlists.length) {
            this.playlists.splice(index,1); 
        }
    }
}
          
let menu = new Menu();
menu.start(); 