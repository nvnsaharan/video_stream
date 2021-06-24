meetingId = '';

const setMeetingId = () => {
	meetingcode = document.getElementById('meetingcode').value;
	meetingId = meetingcode;
};

async function startMeeting() {
	const options = {
		method: 'POST',
		headers: {
			// Authorization: process.env.REACT_APP_TOKEN,
		},
	};

	fetch('https://api.zujonow.com/v1/meetings', options)
		.then((response) => response.json())
		.then((result) => {
			console.log(result);
			const mId = result.meetingId;
			const meetingUrl = `/meeting/${mId}/join`;

			window.location = window.location.origin + meetingUrl;
		}) // result will contain meetingId
		.catch((error) => console.log('error', error));
}

function respondAccessLevel() {
	startMeeting();
}

async function handleSubmit() {
	meetingcode = document.getElementById('meetingcode').value;
	meetingId = meetingcode;
	meetingUrl = `${window.location.origin}/meeting/${meetingId}/join`;
	window.location = meetingUrl;
	return false;
}

// const newVideo = document.createElement('video');

// console.log(myVideoStream + 'Index page');
// console.log(participantGrid + 'Index page');

navigator.mediaDevices.getMedia =
	navigator.mediaDevices.getUserMedia ||
	navigator.mediaDevices.webkitGetUserMedia ||
	navigator.mediaDevices.mozGetUserMedia ||
	navigator.mediaDevices.msGetUserMedia;

let theStream;
navigator.mediaDevices
	.getMedia({
		video: true,
		audio: false,
	})
	.then((stream) => {
		theStream = stream;
		if (myVideoStream) {
			myVideoStream.srcObject = stream;
		}
	});

var micenabled = true;
const muteUnmute = () => {
	if (micenabled) {
		micenabled = false;
		setUnmuteButtom();
	} else {
		micenabled = true;
		setMuteButtom();
	}
};

const setMuteButtom = () => {
	const html = `
            <i class="green fas fa-microphone"></i>
            `;
	document.querySelector('.main_mute_button').innerHTML = html;
};
const setUnmuteButtom = () => {
	const html = `
            <i class="unmute fas fa-microphone-slash"></i>
            `;
	document.querySelector('.main_mute_button').innerHTML = html;
};

var videoenabled = true;
const playStop = () => {
	if (videoenabled) {
		theStream.getVideoTracks()[0].enabled = false;

		videoenabled = false;
		setStopButtom();
	} else {
		theStream.getVideoTracks()[0].enabled = true;

		videoenabled = true;
		setPlayButtom();
	}
};
const setPlayButtom = () => {
	const html = `
      <i class="green fas fa-video"></i>
            `;
	document.querySelector('.main_video_button').innerHTML = html;
};
const setStopButtom = () => {
	const html = `
            <i class="unmute fas fa-video-slash"></i>
        `;
	document.querySelector('.main_video_button').innerHTML = html;
};
async function startMeeting() {
	meetingId = meetingId = window.location.href.split('/')[4];
	meetingUrl = `${window.location.origin}/meeting/${meetingId}`;
	window.location = meetingUrl;
	return false;
}
