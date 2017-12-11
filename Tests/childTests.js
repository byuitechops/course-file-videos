/*eslint-env node, es6*/

/* Dependencies */
const tap = require('tap');

function g1Tests(course, callback) {
    // Tap tests for Gauntlet 1 go here
    tap.equal(true, course.info['course-file-videos'].length >= 6);
    tap.equal(true, course.info['course-file-videos'].includes('testVideo.mp4'));
    tap.equal(true, course.info['course-file-videos'].includes('testVideo.avi'));
    tap.equal(true, course.info['course-file-videos'].includes('testVideo.mpg'));
    tap.equal(true, course.info['course-file-videos'].includes('testVideo.mov'));
    tap.equal(true, course.info['course-file-videos'].includes('testVideo.wmv'));
    tap.equal(true, course.info['course-file-videos'].includes('testVideo.swf'));
    callback(null, course);
}

module.exports = [
        {
            gauntlet: 1,
            tests: g1Tests
        }
];
