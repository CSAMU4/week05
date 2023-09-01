/**
 * Coding Assignment Week 5 - Menu App 
 * Create a menu app as seen in this week’s video. 
 * What you create is up to you as long as it meets the following requirements:
        Use at least one array.
        Use at least two classes.
        Your menu should have the options to create, view, and delete elements.
 */

class Cat {
    constructor (name, breed) {
        this.name = name; 
        this.breed = breed; 
    }
    describe() {
        return `${this.name} is ${this.breed}.`;
    }
}