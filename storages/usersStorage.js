// storages/usersStorage.js
// This class lets us simulate interacting with a database.
class UsersStorage {
    constructor() {
      this.storage = {};
      this.id = 0;
    }
  
    addUser({firstName, lastName, email, age, bio}) {
      const id = this.id;
      this.storage[id] = { id, firstName, lastName, email, age, bio };
      this.id++;
    }
  
    getUsers() {
      return Object.values(this.storage);
    }
  
    getUser(id) {
      return this.storage[id];
    }
  
    updateUser(id, {firstName, lastName, email, age, bio}) {
      this.storage[id] = { id, firstName, lastName, email, age, bio };
    }
  
    deleteUser(id) {
      delete this.storage[id];
    }

    getUserByEmail(email) {
        Object.entries(this.storage).forEach(([key, value]) => {
            if (value.email == email){
                return value.id;
            } 
          });
    }
  }
  // Rather than exporting the class, we can export an instance of the class by instantiating it.
  // This ensures only one instance of this class can exist, also known as the "singleton" pattern.
  module.exports = new UsersStorage();
  