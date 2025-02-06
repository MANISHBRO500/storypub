const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());

mongoose.connect("mongodb+srv://manishbehera1400:Mpqhi69EVz9wQsjt@storypub.wbxjr.mongodb.net/", {

useUnifiedTopology: true,

});

const storySchema = new mongoose.Schema({

title: String,

content: String,

createdAt: { type: Date, default: Date.now }

});

const Story = mongoose.model("Story", storySchema);

app.post("/api/stories", async (req, res) => {

try {

    const { title, content } = req.body;

    const newStory = new Story({ title, content });

    await newStory.save();

    res.status(201).json(newStory);

} catch (error) {

    res.status(500).json({ error: "Error saving story" });

}

});

app.get("/api/stories", async (req, res) => {

try {

    const stories = await Story.find().sort({ createdAt: -1 });

    res.json(stories);

} catch (error) {

    res.status(500).json({ error: "Error fetching stories" });

}

});

app.listen(5000, () => console.log("Server running on port 5000"));

