export default (api) => {
	api.get('/excuse', (req, res) => {
		const excuses = [
			'I have a dentist appointment at 13:00, will WFH today.',
			'I have a delivery coming today, will WFH until it gets here.',
			'My leg fell off in a freak incident in the Red Light District, WFH today.',
			'WFH today guys, not feeling very well!',
			'My key snapped off in the door, waiting for a guy and then I will head in...',
			'It is raining, going to WFH today.',
			'My body is not ready. Will WFH today.',
			'I flushed my keys down the toilet, will WFH.',
			'Have bad case of hiccups, will WFH.',
			'Hurt my back while chasing beaver, will WFH.',
			'I WFH, IKEA delivery today.',
			'I am ill. Will WFH',
			'Too much gin last night, will WFH.',
			'IKEA did not show up this morning, will WFH.',
			'WFH today, they are fixing my balcony.'
		];

		const excuse = excuses[Math.floor(Math.random() * excuses.length)];

		res.status(200).json({
			username: 'Marcelo Pires',
			channel: 'G0GPUQ1FD',
			response_type: 'in_channel',
			text: excuse
		});
	});
};
