/*eslint-env node, es6*/

/* Module Description */
// Locates videos in the course files and flags them for later review

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
    course.addModuleReport('course-file-videos');

    /* Get the videos from course files */
    var videos = course.content.filter(file => {
        return videoExtensions.includes(file.ext);
    });

    /* Map list of videos to just the video names */
    var videos = videos.map(video => {
        return video.name;
    });

    course.success('course-file-videos', `${videos.length} videos found in course files. Their titles are: \n${videos.join('\n')}`);
    /* Store videos in a new info property */
    course.newInfo('course-file-videos', videos);
    course.success('course-file-videos', `${videos.length} videos stored for evaluation.`);

    stepCallback(null, course);
};
