//require util
const util = require("util");
const fs = require("fs");
// generate ids for new notes
var uniqid = require('uniqid');
//
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

//build note constructor function
class SaveNote {
  read() {return readFileAsync("db/db.json", "utf8");}
  write(newNote) {return writeFileAsync("db/db.json", JSON.stringify(newNote));}
    
  getNotes() {
    return this.read().then(notes => {
      let arrNotes;

      try {
        arrNotes = [].concat(JSON.parse(notes));
      } catch (err) {
        arrNotes = [];
      }

      return arrNotes;
    });
  }

  addNote(newNote) {
    const { title, text } = newNote;

    if (!title || !text) {
      throw new Error("Please fill out title and text");
    }

    // Add id to each note 
    const idNote = { 
      title, 
      text, 
      id: uniqid() 
    };

    // add new note to other notes and resend
    return this.getNotes()
      .then(notes => [...notes, idNote])
      .then(updatedNotes => this.write(updatedNotes))
      .then(() => idNote);
  }

  delNote(id) {
    return this.getNotes()
      .then(idNotes => idNotes.filter(note => note.id !== id))
      .then(filteredNotes => this.write(filteredNotes));
  }

}
  
    module.exports = new SaveNote();
  
   
  
  

  
      
    
