let instance;

class DBConnection {
  constructor(uri) {
    if (instance) {
      throw new Error(
        "I am a singleton. Only one instance is accepted! Ha ha ha"
      );
    }
    this.uri = uri;
    instance = this; // by adding this line it says that once an instance has been created, set the instance variable to reference that instance.
  }

  connect() {
    console.log(`DB ${this.uri} has been connected`);
  }

  disconnect() {
    console.log("DB disconnected");
  }
}

const connection = Object.freeze(new DBConnection("mongodb://..."));

export default connection;
