## Field Trip Project

### Project Summary

My project would be about headdresses, otherwise known as war bonnets. In particular the plains-style bonnets. These artifacts are significant to Native American traditions as they are a symbol of honor and respect. 

### Core Webpages

The core webpages would be the Landing page, an artifacts page that lists the various artifacts that can be viewed at the museum, and a details page that dynamically renders based on the artifact clicked on. Interactable features would include a navigation bar to access these pages, cards to showcase the various items, and text that redirects to the specified artifact's details page.

### Design Choices

For this project I would consider utilizing a similar palette to that of eiteljorg. A light orange color ```rgb(255, 173, 30)``` is used to highlight certain interactable features. For example, this color is used for their logo, links, and some of their buttons.

The structure of the data would be an Artifact Schema. It would contain the following key-value pairs (properties):

```
id: ObjectId,
name: String,
image: String,
description: String
```

Structuring the data like this would allow me to easily access the name of a particular artifact as well as its associated image and a brief description through dot notation (property access). Which allows for dynamic rendering, as opposed to static rendering.