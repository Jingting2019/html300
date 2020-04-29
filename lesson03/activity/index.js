
// video
class Video {
	constructor(track, fileName, minutes) {
		this.track = track;
		this.fileName = fileName;
		this.minutes = minutes;
	}
}

class VideoPlayer {

	play(video) {
		this.currVideo = video;
		console.log(`Playing ${this.currVideo.fileName}`);
	}
	pause() {
		console.log(`The video ${this.currVideo.fileName} is pause now.`);
	}
	playNext() {
		let currTrack = this.track + 1;
		console.log(`We are now playing track number: ${this.track}`);
	}
}

const movieOne = new Video(1, 'Harry Potter', 60);
const videoPlayer = new VideoPlayer();
videoPlayer.play(movieOne);
videoPlayer.pause();
