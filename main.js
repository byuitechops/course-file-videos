/* Module Description */
/* Locates videos in the course files and flags them for later review

/* Put dependencies here */
var videoExtensions = [
    '.3g2',
    '.3gp',
    '.aaf',
    '.asf',
    '.avchd',
    '.avi',
    '.drc',
    '.flv',
    '.m2v',
    '.m4p',
    '.m4v',
    '.mkv',
    '.mng',
    '.mov',
    '.mp2',
    '.mp4',
    '.mpe',
    '.mpeg',
    '.mpg',
    '.mpv',
    '.mxf',
    '.nsv',
    '.ogg',
    '.ogv',
    '.qt',
    '.rm',
    '.rmvb',
    '.roq',
    '.svi',
    '.vob',
    '.webm',
    '.wmv',
    '.yuv',
    '.swf'
];

module.exports = (course, stepCallback) => {

    /* Get the videos from course files */
    var videos = course.content.filter(file => {
        return videoExtensions.includes(file.ext);
    });

    videos.forEach(video => {
        course.log('Videos in Course Files', {
            'Name': video.name,
            'Exported Path': video.path
        });
    });

    /* Map list of videos to just the video names */
    videos = videos.map(video => {
        return video.name;
    });

    /* Store videos in a new info property */
    course.newInfo('course-file-videos', videos);

    stepCallback(null, course);
};
