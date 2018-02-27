# Course File Videos
### *Package Name*: course-file-videos
### *Child Type*: Pre-import
### *Platform*: All
### *Required*: Optional

This child module is built to be used by the Brigham Young University - Idaho D2L to Canvas Conversion Tool. It utilizes the standard `module.exports => (course, stepCallback)` signature and uses the Conversion Tool's standard logging functions. You can view extended documentation [Here](https://github.com/byuitechops/d2l-to-canvas-conversion-tool/tree/master/documentation).

## Purpose
As far as I can tell, this child module is meant to compile a list of all the video files located in the course.

## How to Install

```
npm install course-file-videos
```

## Run Requirements
This child module requires `course.content`.

## Options
None

## Outputs
| Option | Type | Location |
|--------|--------|-------------|
|course-file-videos| Array | course.info|

## Process
1. Get all video file from course.contents
2. Create an array of their names
3. Add new array to course.info

## Log Categories
Categories used in logging data in the module:
- Videos in Course Files

## Requirements
Video files probably shouldn't be saved inside the course (they should probably be in Kaltura). This gives us a list of which videos we'll need to move over.