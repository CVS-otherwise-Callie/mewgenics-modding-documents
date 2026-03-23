---
tags:
  - GON
---
# Gon General

.Gon modding is the "coding", per say, of Mewgenics. However, .gons are not as open as python or lua files.

## What is a Gon file?

A .Gon file is a piece of text read by the _Tyler Glaiel_ game engine. Most of the time, a function or object defined by the .Gon stays global _unless the object is **defined by a internal frame from a swf file**_, in which the "name" defining the object will be a number. In that case, those objects are **file specific** and cannot be loaded in another file.

In essence, a .gon file is basically a type of .txt file.

## Appendation and when it's important

While objects are generally global, the game will **only** read the files they are put in. Therefore, instead of replacing a .gon file, you can _append_ a .gon file. This means creating a file by the same name as the one you want to add to, and giving it ".patch" as a extension. 


???+ example "Example Code"
    `enemies.gon.patch`

To see how appendation fully works, read this **[this article.](https://www.nexusmods.com/mewgenics/articles/2)**.

