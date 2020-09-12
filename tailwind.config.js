module.exports = {
	purge: ['./public/**/*.html', './src/**/*.vue'],
	variants: {
		borderWidth: ['responsive', 'last', 'hover', 'focus', 'group-hover'],
	},
	theme: {
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
		},
		fontFamily: {
			display: ['Poppins'],
			body: ['Poppins'],
		},
		borderWidth: {
			default: '1px',
			'0': '0',
			'2': '2px',
			'4': '4px',
		},
		extend: {
			colors: {
				cyan: '#9cdbff',
				cliniBlue: '#104C93',
				minwhite: '#fffffa',
			},
			spacing: {
				'96': '24rem',
				'128': '32rem',
				to8: '90%',
			},
		},
	},
};
