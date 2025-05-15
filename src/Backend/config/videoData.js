// this file have no relation with the project


import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = "mongodb+srv://rathodsamji795:ZIGiJOzsTOJarEUN@cluster0.jjtwiiw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();

    console.log(" yes Connected to MongoDB!");

    // Connect to your test database
    const db = client.db("test");

    // Access user collection and fetch all documents
    const users = await db.collection("users").find().toArray();
    console.log("Users:", users);

    // Access video collection and fetch all documents
    // const videos = await db.collection("videos").find().toArray();
    // console.log("Videos:", videos);

  } catch (error) {
    console.error("Error:", error);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);



